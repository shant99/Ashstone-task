import React from "react";
import MenuIcon from "../../../assets/icons/MenuIcon";
import { MenuBtnProps } from "../../../types/index.types";

const MenuBtn: React.FC<MenuBtnProps> = ({ onClick, ariaLabel = "Menu" }) => {
  return (
    <button className="menu-button" onClick={onClick} aria-label={ariaLabel}>
      <MenuIcon />
    </button>
  );
};

export default MenuBtn;
