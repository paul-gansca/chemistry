import NextLink from "next/link";
import NextImage from "./image";

const Tile = ({ team }) => {
  const { name, project, developers, slug, cardImage } = team;
  return (
    <NextLink href={`/team/${slug}`}>
      <div className="flex items-center mt-6 rounded bg-white border shadow-md md:flex-row md:max-w-sm hover:bg-gray-100 cursor-pointer max-w-sm max-h-[160px]">
        <NextImage classes="object-cover rounded" image={cardImage} />
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 border-b border-slate-300">
            {name}
          </h5>
          <p className="font-normal text-gray-700">{project}</p>
          <p className="font-normal text-gray-700">
            {developers.data.length} Members
          </p>
        </div>
      </div>
    </NextLink>
  );
};

export default Tile;
