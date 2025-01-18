import React from "react";
import { LinkProps } from "../../../types/index.types";

const Link: React.FC<LinkProps> = ({ href, label, className = "" }) => {
  return (
    <a href={href} className={`mobile-menu__link ${className}`}>
      {label}
    </a>
  );
};

export default Link;
