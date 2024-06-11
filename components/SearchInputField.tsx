import { Search } from "@mui/icons-material";

const SearchInputField = () => {
  return (
    <div className="w-full flex">
      <div className="py-2 px-3 flex items-center border-l border-y rounded-l-md">
        <Search />
      </div>
      <input
        className="w-full py-2 px-3 text-lg placeholder:text-sm placeholder:font-medium border-y border-r border-gray-200 rounded-r-md focus:outline-none"
        type="text"
        aria-label="search blogs field"
        role="search"
        placeholder="Search all blogs ..."
      />
    </div>
  );
};

export default SearchInputField;
