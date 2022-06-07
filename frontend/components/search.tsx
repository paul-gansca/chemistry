import { useState } from "react";
import Modal from "./modal";
import SearchModalFooter from "./searchModalFooter";
import Tag from "./tag";

const Search = ({
  onSearch,
  allSkills,
  setAllSkills,
  setFilterBySkills,
  countFilterBySkills,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModalVisibility = () => setIsModalVisible((state) => !state);
  return (
    <div className="pb-6">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-6 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-slate-100 focus:outline-none shadow-md shadow-gray-400/50"
          placeholder="Search Teams"
          onChange={onSearch}
          required
        />
        <button
          type="button"
          onClick={() => toggleModalVisibility()}
          className="text-white absolute right-2.5 bottom-4 bg-blue-500 hover:bg-blue-600 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
        >
          <div className="flex">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            {countFilterBySkills > 0 ? (
              <span className="relative inline-flex justify-center items-center text-white bg-[#F26529] rounded-full h-4 w-4 text-[10px]">
                {countFilterBySkills}
              </span>
            ) : (
              ""
            )}
          </div>
        </button>
      </div>
      {isModalVisible && (
        <Modal
          title="Filters"
          body={Object.keys(allSkills).map((skill, index) => (
            <button
              key={`${skill}${index + 1}`}
              type="button"
              onClick={() => {
                setAllSkills((state) => ({
                  ...state,
                  [skill]: { isSelected: !state[skill].isSelected },
                }));
              }}
            >
              <Tag
                size="text-md"
                givenColour={
                  allSkills[skill].isSelected
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800"
                }
                text={skill}
              />
            </button>
          ))}
          footer={
            <SearchModalFooter
              clearAllFilters={() => {
                setAllSkills(
                  Object.keys(allSkills).reduce((acc, e) => {
                    acc[e] = { isSelected: false };
                    return acc;
                  }, {})
                );
                setIsModalVisible(false);
              }}
              hideModal={() => setIsModalVisible(false)}
              setFilterBySkills={() => {
                setFilterBySkills(
                  Object.keys(allSkills).reduce((acc, skill) => {
                    if (allSkills[skill].isSelected) {
                      acc[skill] = true;
                    }
                    return acc;
                  }, {})
                );
                setIsModalVisible(false);
              }}
            />
          }
          topRightClose={toggleModalVisibility}
        />
      )}
    </div>
  );
};

export default Search;
