import RecentSearch from "@/components/RecentSearch";
import SearchInputField from "@/components/SearchInputField";
import SearchResult from "@/components/SearchResult";

const SearchPage = () => {
  const searchTerm: string = "";

  return (
    <main className="w-full md:w-[80%] md:mx-auto flex flex-col gap-2">
      <SearchInputField />
      {searchTerm === "" ? <RecentSearch /> : <SearchResult />}
    </main>
  );
};

export default SearchPage;
