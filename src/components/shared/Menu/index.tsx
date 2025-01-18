import useScrollVisibility from "../../../hooks/useScrollVisibility";
import ChevronDown from "../../../assets/icons/ChevronDown";
import { MenuProps } from "../../../types/index.types";
import SectionWrapper from "../SectionWrapper";
import { Link } from "../../common";
import React from "react";
import "./styles.css";

const Menu: React.FC<MenuProps> = ({ items }) => {
  const isVisible = useScrollVisibility(200);
  return (
    <div className={`menu ${!isVisible ? "menu--hidden" : ""}`}>
      <SectionWrapper isBorder={true}>
        <nav>
          <ul className="menu__list">
            {items.map((item, index) => (
              <li key={`${item.label}_${index}`} className="menu__item">
                {item.subItems ? (
                  <>
                    <button className="menu__link">
                      <span>{item.label}</span>
                      <ChevronDown />
                    </button>
                    <ul className="submenu">
                      {item.subItems.map((subItem) => (
                        <li
                          key={`${item.label}_${subItem.label}_${index}`}
                          className="submenu__item"
                        >
                          <a href={subItem.link} className="submenu__link">
                            <span>{subItem.label}</span>
                            <ChevronDown />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.link || ""}
                    label={item.label}
                    className="menu__link"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </SectionWrapper>
    </div>
  );
};

export default Menu;
