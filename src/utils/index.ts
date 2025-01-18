import { Post } from "../types/index.types";

export const getFilteredPosts = (posts: Post[], searchQuery: string) => {
  const searchStr = searchQuery.toLowerCase();
  return posts?.filter(
    (post) =>
      post.title?.toLowerCase().includes(searchStr) ||
      post.text?.toLowerCase().includes(searchStr)
  );
};
