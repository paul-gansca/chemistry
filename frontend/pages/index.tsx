import { useState } from "react";
import Search from "../components/search";
import Seo from "../components/seo";
import Tile from "../components/tile";
import { fetchAPI } from "../lib/api";

const Home = ({ teams, homepage, skills }) => {
  const [searchVal, setSearchVal] = useState("");
  const [allSkills, setAllSkills] = useState(
    skills.reduce((acc, elem) => {
      if (!acc[elem.attributes.name]) {
        acc[elem.attributes.name] = { isSelected: false };
      }
      return acc;
    }, {})
  );
  const [filterBySkills, setFilterBySkills] = useState({});
  const onSearch = (e) => setSearchVal(e.target.value);
  const checkDevHasSkill = (dev) =>
    dev.attributes.skills.data.some(
      (skill) => filterBySkills[skill.attributes.name]
    );
  return (
    <div>
      <Seo seo={homepage.attributes.seo} />
      <Search
        onSearch={onSearch}
        allSkills={allSkills}
        setAllSkills={setAllSkills}
        countFilterBySkills={Object.keys(filterBySkills).length}
        setFilterBySkills={setFilterBySkills}
      />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        {teams
          .filter(
            (t) =>
              Object.keys(filterBySkills).length === 0 ||
              t.attributes.developers.data.some(checkDevHasSkill)
          )
          .filter(
            (t) => t.attributes.name.toLowerCase().indexOf(searchVal) > -1
          )
          .map((t) => (
            <Tile key={t.id} team={{ ...t.attributes }} />
          ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  // Run API calls in parallel
  const [teamsRes, homepageRes, skillsRes] = await Promise.all([
    fetchAPI("/teams", {
      populate: {
        cardImage: {
          populate: ["*"],
        },
        developers: {
          populate: ["skills"],
        },
      },
    }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
    fetchAPI("/skills"),
  ]);
  return {
    props: {
      teams: teamsRes.data,
      homepage: homepageRes.data,
      skills: skillsRes.data,
    },
  };
};

export default Home;
