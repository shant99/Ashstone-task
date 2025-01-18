import React from "react";
import Oval from "../../../assets/icons/Oval";
import { Post } from "../../../types/index.types";

interface PostCardProps {
  post: Post;
  onClick: (post: Post) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  return (
    <div onClick={() => onClick(post)} className="post">
      <img
        src={post.img}
        srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
        alt={post.title}
        className="post-image"
      />
      <p className="post-tags">{post.tags}</p>
      <h3 className="post-title">{post.title}</h3>

      <div className="post-meta">
        <p>{post.autor}</p>
        <p>
          <Oval />
          {post.date}
        </p>
        <p>
          <Oval />
          {post.views} Views
        </p>
      </div>

      <p className="post-text">{post.text}</p>
    </div>
  );
};

export default PostCard;
