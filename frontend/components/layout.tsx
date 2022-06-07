import Nav from "./nav";

export const Layout = ({ children }) => {
  return (
    <div className="bg-[#f7f7f7] border-gray-200 min-h-screen">
      <Nav />
      <div className="py-6 px-8">{children}</div>
    </div>
  );
};
