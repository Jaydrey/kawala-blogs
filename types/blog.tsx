import User from "./user";

type Blog = {
    title: string;
    shortDescription: string;
    publishedDate: string;
    totalComments: number;
    totalLikes: number;
    author: User;
    isUserSaved: boolean;
    isDraft: boolean;
}

export default Blog;


