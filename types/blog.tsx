import User from "./user";

type Blog = {
  title: string;
  shortDescription: string;
  publishedDate?: string | null;
  totalComments: number;
  totalLikes: number;
  author: User;
  isUserSaved: boolean;
  isPublished: boolean;
};

export default Blog;
