import NextLink from "next/link";

const Nav = () => {
  return (
    <div className="bg-white border-b border-slate-100 shadow-md shadow-gray-400/50">
      <div className="flex flex-wrap justify-between items-center ml-[10%] h-[78px]">
        <div className="my:auto">
          <NextLink href="/">Team Logo</NextLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
