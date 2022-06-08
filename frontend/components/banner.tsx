import NextImage from "./image";

const Banner = ({ image, name, project }) => {
  return (
    <div>
      <div className="min-w-full flex flex-col">
        <NextImage classes="object-cover rounded-lg min-w-full" image={image} />
        <h5 className="text-2xl font-bold tracking-tight self-start mt-4 text-gray-800">
          {name} - {project}
        </h5>
      </div>
    </div>
  );
};

export default Banner;
