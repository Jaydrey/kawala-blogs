import { ChatBubbleOutlineOutlined, FavoriteBorder } from "@mui/icons-material";


const BlogCard = () => {
  return (
    <div className="w-full min-h-[20vh] flex flex-col justify-center">
      <div className="flex flex-col gap-3">
        <div className="flex">
          {/* image */}
          <div></div>
          {/* name of author */}
          <div>
            <h3>Norbert Kawala</h3>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-2">
            <div>
              {/* title of blog */}
              <h2 className="font-bold text-2xl">Postgres is eating the database world</h2>
            </div>
            <div>
                {/* description of blog */}
                <p className="font-normal text-base text-gray-500">PostgreSQL isn&apos;t just a simple relational database; it&apos;s a data...</p>
            </div>
            <div className="flex justify-between text-gray-500">
                <div className="flex gap-4">
                    <div>
                        {/* date published */}
                        <time dateTime="2024-03-15">Mar 15</time>
                    </div>
                    <div className="flex gap-1">
                        <FavoriteBorder />
                        <p aria-label="total likes">2.7K</p>
                    </div>
                    <div className="flex gap-1">
                        <ChatBubbleOutlineOutlined />
                        <p aria-label="total comments">16</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
          </div>
          <div>
            {/* image of blog */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
