import SearchHistory from "@/types/search_history";
import { Close } from "@mui/icons-material";

const SearchTermDiv = ({
  termIndex,
  term,
}: {
  termIndex: number;
  term: SearchHistory;
}) => {
  return (
    <li key={termIndex} className="w-full py-4">
      <div className="flex justify-between">
        <div role="button">{term.searchTerm && <p>{term.searchTerm}</p>}</div>
        <div role="button" aria-label={`remove ${term.searchTerm} search term`}>
          <Close />
        </div>
      </div>
    </li>
  );
};

export default SearchTermDiv;
