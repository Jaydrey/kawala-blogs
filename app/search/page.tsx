import RecentSearch from "@/components/RecentSearch";
import SearchInputField from "@/components/SearchInputField";
import SearchResult from "@/components/SearchResult";

const SearchPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchTerm = searchParams.term;

  return (
    <main className="w-full md:w-[80%] md:mx-auto flex flex-col gap-2">
      <SearchInputField searchTerm={searchTerm} />
      {searchTerm === "" || searchTerm === undefined ? (
        <RecentSearch />
      ) : (
        <SearchResult searchTerm={searchTerm} />
      )}
    </main>
  );
};

export default SearchPage;
