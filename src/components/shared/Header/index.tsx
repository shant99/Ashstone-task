import SectionWrapper from "../../shared/SectionWrapper";
import { HeaderProps } from "../../../types/index.types";
import Logotype from "../../../assets/icons/Logotype";
import { menuItems } from "../../../constants";
import MobileMenu from "../Menu/MobileMenu";
import Search from "../../shared/Search";
import Menu from "../Menu";
import React from "react";
import "./styles.css";

const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  return (
    <>
      <SectionWrapper className="top-header">
        <MobileMenu items={menuItems} />
        <Logotype />
        <Search setSearchQuery={setSearchQuery} />
      </SectionWrapper>
      <Menu items={menuItems} />
    </>
  );
};

export default Header;
