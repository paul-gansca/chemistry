import Banner from "../../components/banner";
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
  return (
    <div>
      <Seo seo={seo} />
      <Banner image={bannerImage} name={name} project={project} />
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
