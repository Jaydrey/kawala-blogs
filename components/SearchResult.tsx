import { blogs } from "@/data/blog_data";
import { Close } from "@mui/icons-material";
import BlogCard from "./BlogCard";
import { sanitizeStringsForSearch } from "@/utils/util_functions";

const SearchResult = ({ searchTerm }: { searchTerm: string | string[] }) => {
  const allBlogs = blogs;
  const filteredBlogs = allBlogs.filter((blog) => {
    if (typeof searchTerm === "string") {
      let sanitizedTitle = sanitizeStringsForSearch(blog.title);
      let sanitizedSearchTerm = sanitizeStringsForSearch(searchTerm);
      let sanitizedDescription = sanitizeStringsForSearch(
        blog.shortDescription
      );
      let sanitizedAuthor = sanitizeStringsForSearch(blog.author.fullName);
      if (sanitizedTitle.includes(sanitizedSearchTerm)) {
        return blog;
      } else if (sanitizedDescription.includes(sanitizedSearchTerm)) {
        return blog;
      } else if (sanitizedAuthor.includes(sanitizedSearchTerm)) {
        return blog;
      }
    }
  });

  return (
    <div className="w-full flex flex-col">
      <div className="w-full py-5 mb-3">
        <h1 className="font-bold text-2xl">
          <span className="text-gray-500">Results for </span>
          <span>{searchTerm}</span>
        </h1>
      </div>
      <div className="flex flex-col">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, blogIndex) => {
            return (
              <div key={blogIndex}>
                <BlogCard
                  key={blogIndex}
                  title={blog.title}
                  shortDescription={blog.shortDescription}
                  totalComments={blog.totalComments}
                  totalLikes={blog.totalLikes}
                  author={blog.author}
                  isUserSaved={blog.isUserSaved}
                  isPublished={blog.isPublished}
                />
                <hr />
              </div>
            );
          })
        ) : (
          <div>
            <p>No blog matches the search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
