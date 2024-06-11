import { Close } from "@mui/icons-material";

const SearchResult = () => {
  return (
    <div className="w-full flex flex-col">
      <div>
        <h1>Recent Searches</h1>
      </div>
      <div className="flex flex-col">
        <ul>
          <li>
            <div className="flex justify-between">
              <p>data science</p>
              <Close />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchResult;


