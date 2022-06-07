const SearchModalFooter = ({
  clearAllFilters,
  hideModal,
  setFilterBySkills,
}) => {
  return (
    <>
      <button
        type="button"
        onClick={hideModal}
        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={clearAllFilters}
        className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
      >
        Clear all filters
      </button>
      <button
        type="button"
        onClick={setFilterBySkills}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Apply Filters
      </button>
    </>
  );
};

export default SearchModalFooter;
