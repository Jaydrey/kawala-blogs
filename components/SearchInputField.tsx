"use client";
import { Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const SearchInputField = ({ searchTerm }: { searchTerm: string | string[] | undefined}) => {
  const router = useRouter();

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    router.replace(`?term=${event.target.value}`, {
      scroll: false,
    });
  };
  return (
    <div className="w-full flex">
      <div className="py-2 px-3 flex items-center border-l border-y rounded-l-md">
        <Search />
      </div>
      <input
        className="w-full py-2 px-3 text-lg placeholder:text-sm placeholder:font-medium border-y border-r border-gray-200 rounded-r-md focus:outline-none"
        type="text"
        name="searchBlogs"
        id="searchBlogs"
        autoFocus
        aria-label="search blogs field"
        role="search"
        placeholder="Search all blogs ..."
        onChange={handleSearchTermChange}
        // value={searchTerm ?? ""}
      />
    </div>
  );
};

export default SearchInputField;
