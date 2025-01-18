import CloseIcon from "../../../assets/icons/CloseIcon";
import React from "react";
import { CloseBtnProps } from "../../../types/index.types";

const CloseBtn: React.FC<CloseBtnProps> = ({
  onClick,
  ariaLabel = "Close menu",
}) => {
  return (
    <button className="close-icon" onClick={onClick} aria-label={ariaLabel}>
      <CloseIcon />
    </button>
  );
};

export default CloseBtn;
