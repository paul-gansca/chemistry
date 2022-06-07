import NextLink from "next/link";
import NextImage from "./image";

const Banner = ({ image, name, project }) => {
  return (
    <div className="p-4 mb-6 w-full bg-white rounded-lg border shadow-md sm:p-8">
      <NextLink href="/">
        <div className="text-left mb-4 cursor-pointer">
          <svg
            className="w-6 h-6 inline-block mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="align-bottom font-medium text-xl">Back</span>
        </div>
      </NextLink>
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
