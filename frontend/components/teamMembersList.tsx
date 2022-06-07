import NextImage from "./image";
import Tag from "./tag";

const TeamMembersList = ({ developers }) => {
  return (
    <div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900">
          Team members
        </h5>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Skils
              </th>
              <th scope="col" className="px-6 py-3">
                Bio
              </th>
            </tr>
          </thead>
          <tbody>
            {developers.map((dev) => (
              <tr
                key={dev.id}
                className="bg-white border-b hover:bg-gray-100 hover:cursor-pointer"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <NextImage
                    classes="rounded-full"
                    image={dev.attributes.profileImage}
                    width={24}
                    height={24}
                  />
                  <span className="align-super ml-1">
                    {dev.attributes.name}
                  </span>
                </th>
                <td className="px-6 py-4 whitespace-pre">
                  {dev.attributes.skills.data.map((skill) => (
                    <Tag text={skill.attributes.name} isRandomColour />
                  ))}
                </td>
                <td className="px-6 py-4 min-w-[300px]">
                  {dev.attributes.bio}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamMembersList;
