import { FC } from "react";
import { PostPopupProps } from "../../../types/index.types";
import CloseIcon from "../../../assets/icons/CloseIcon";
import "./styles.css";

const PostPopup: FC<PostPopupProps> = ({ post, onClose }) => {
  return (
    <div
      className={`post-popup ${post ? "post-popup--open" : ""}`}
      aria-modal="true"
      role="dialog"
    >
      <div className="post-popup__overlay" onClick={onClose} />
      <div className="post-popup__content">
        <button
          className="post-popup__close-btn"
          onClick={onClose}
          aria-label="Close popup"
        >
          <CloseIcon />
        </button>
        <h2 className="post-popup__title">{post?.title}</h2>
        <p className="post-popup__text">{post?.text}</p>
      </div>
    </div>
  );
};

export default PostPopup;
