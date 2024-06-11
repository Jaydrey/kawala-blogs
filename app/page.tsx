import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blog_data";

const Home = () => {
  const allBlogs = blogs;

  return (
    <main className="w-full md:w-[80%] md:mx-auto flex min-h-screen flex-col gap-2">
      {allBlogs &&
        allBlogs.map((blog, blogIndex) => {
          return (
            <div
              key={blogIndex}
              title={blog.title}
              aria-label="blog card"
              role="button"
            >
              <BlogCard
                key={blogIndex}
                author={blog.author}
                title={blog.title}
                shortDescription={blog.shortDescription}
                totalComments={blog.totalComments}
                totalLikes={blog.totalLikes}
                isPublished={blog.isPublished}
                publishedDate={blog.publishedDate ?? null}
                isUserSaved={blog.isUserSaved}
              />
              <hr />
            </div>
          );
        })}
    </main>
  );
};

export default Home;
