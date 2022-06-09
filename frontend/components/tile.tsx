import NextLink from "next/link";
import NextImage from "./image";

const Tile = ({ team }) => {
  const { name, project, developers, slug, cardImage } = team;
  return (
    <NextLink href={`/team/${slug}`}>
      <div className="flex items-center mt-6 rounded bg-white border shadow-md h-[120px] md:flex-row md:max-w-sm hover:bg-gray-100 cursor-pointer max-w-sm max-h-[120px]">
        <div className="min-w-[100px] relative top-[3px] left-[-1px]">
          <NextImage
            classes="object-cover rounded"
            width={100}
            height={120}
            image={cardImage}
          />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal w-[240px]">
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
