"use server";

export const searchBlogs = async (formData: FormData) => {
  "use server";
  let searchTerm = (formData.get("searchBlogs") as string) || "";
};
