import NextLink from "next/link";

const BackHome = () => {
  return (
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
  );
};

export default BackHome;
