import searchHistories from "@/data/search_history_data";
import { Close } from "@mui/icons-material";
import SearchTermDiv from "./SearchTermDiv";

const RecentSearch = () => {
  const searchTerms = searchHistories;
  return (
    <div className="w-full flex flex-col">
      <div className="w-full py-5 mb-3">
        <h1 className="font-bold text-2xl">Recent Searches</h1>
      </div>
      <div className="flex flex-col">
        {searchTerms && (
          <ul>
            {searchTerms.map((term, termIndex) => {
              return (
                <SearchTermDiv
                  key={termIndex}
                  termIndex={termIndex}
                  term={term}
                />
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RecentSearch;
