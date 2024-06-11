import BlogCard from "@/components/BlogCard";

const Home = () => {
  return (
    <main className="w-full md:w-[80%] md:mx-auto flex min-h-screen flex-col gap-2">
      <BlogCard />
      <hr />
      <BlogCard />
      <hr />
    </main>
  );
};

export default Home;
