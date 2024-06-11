import Blog from "@/types/blog";
import { ChatBubbleOutlineOutlined, FavoriteBorder } from "@mui/icons-material";

const BlogCard = (blog: Blog) => {
  return (
    <div className="w-full min-h-[20vh] flex flex-col justify-center py-4">
      <div className="flex flex-col gap-3">
        <div className="flex">
          {/* image */}
          <div></div>
          {/* name of author */}
          <div>{blog.author && <h3>{blog.author.fullName}</h3>}</div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-2">
            <div>
              {/* title of blog */}
              {blog.title && (
                <h2 className="font-bold text-2xl" aria-label="blog title">
                  {blog.title}
                </h2>
              )}
            </div>
            <div>
              {/* description of blog */}
              {blog.shortDescription && (
                <p
                  className="font-normal text-base text-gray-500"
                  aria-label="blog description"
                >
                  {blog.shortDescription}
                </p>
              )}
            </div>
            <div className="flex justify-between text-gray-500">
              <div className="flex gap-4">
                <div>
                  {/* date published */}
                  {blog.publishedDate && (
                    <time dateTime="2024-03-15">{blog.publishedDate}</time>
                  )}
                </div>
                <div className="flex gap-1">
                  <FavoriteBorder />
                  <p aria-label="total likes">{blog.totalLikes}</p>
                </div>
                <div className="flex gap-1">
                  <ChatBubbleOutlineOutlined />
                  <p aria-label="total comments">{blog.totalComments}</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div>{/* image of blog */}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
