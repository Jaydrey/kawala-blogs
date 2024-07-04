"use client";
import SearchInputField from "./SearchInputField";
import { useRouter } from "next/navigation";

const SearchForm = () => {
  const router = useRouter();
  const handleSearchBlogs = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let searchTerm = (formData.get("searchBlogs") as string) || "";

    let urlParams = new URLSearchParams({
      term: searchTerm,
    });
    router.push(`/search?${urlParams}`, { scroll: false });
  };
  return (
    <form onSubmit={handleSearchBlogs}>
      <SearchInputField home={true} />
    </form>
  );
};

export default SearchForm;
