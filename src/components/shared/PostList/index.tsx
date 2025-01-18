import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import { Post, PostListProps } from "../../../types/index.types";
import SectionWrapper from "../SectionWrapper";
import React, { useState } from "react";
import PostPopup from "../PostPopup";
import PostCard from "../PostCard";
import "./styles.css";

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handlePostClick = (post: Post) => setSelectedPost(post);
  const handleClosePopup = () => setSelectedPost(null);

  useLockBodyScroll(!!selectedPost);

  return (
    <SectionWrapper className="posts">
      {posts.map((post) => (
        <PostCard
          key={`${post.date}_${post.title}`}
          post={post}
          onClick={handlePostClick}
        />
      ))}

      <PostPopup post={selectedPost} onClose={handleClosePopup} />
    </SectionWrapper>
  );
};

export default PostList;
