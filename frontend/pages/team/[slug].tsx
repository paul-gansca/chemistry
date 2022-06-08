import BackHome from "../../components/backHome";
import Banner from "../../components/banner";
import Carousel from "../../components/carousel";
import RadarChart from "../../components/radarChart";
import Seo from "../../components/seo";
import TeamMembersList from "../../components/teamMembersList";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

const Team = ({ team }) => {
  const { name, project, bannerImage, developers } = team.attributes;
  const imageUrl = getStrapiMedia(bannerImage);

  const seo = {
    metaTitle: name,
    metaDescription: `Team ${name} woking on ${project}`,
    shareImage: imageUrl,
    team: true,
  };
  const slides = [
    {
      name: "Team Skills",
      content: (
        <div className="m-auto">
          <h3 className="text-xl font-medium text-gray-900">
            Project Needs vs Team Resources
          </h3>
          <div className="w-[330px] h-[330px] m-auto">
            <RadarChart />
          </div>
        </div>
      ),
    },
    {
      name: "Team Banner",
      content: <Banner image={bannerImage} name={name} project={project} />,
    },
  ];
  return (
    <div>
      <Seo seo={seo} />
      <div className="p-4 mb-6 w-full min-h-[400px] bg-white rounded-lg border shadow-md sm:p-8">
        <BackHome />
        <Carousel slides={slides} />
      </div>
      <TeamMembersList developers={developers.data} />
    </div>
  );
};

export async function getStaticPaths() {
  const teamsRes = await fetchAPI("/teams", { fields: ["slug"] });

  return {
    paths: teamsRes.data.map((team) => ({
      params: {
        slug: team.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const teamsRes = await fetchAPI("/teams", {
    filters: {
      slug: params.slug,
    },
    populate: {
      bannerImage: {
        populate: ["*"],
      },
      developers: {
        populate: ["skills, profileImage"],
      },
    },
  });

  return {
    props: { team: teamsRes.data[0] },
    revalidate: 1,
  };
}

export default Team;
