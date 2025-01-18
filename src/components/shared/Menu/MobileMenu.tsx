import useLockBodyScroll from "../../../hooks/useLockBodyScroll";
import ChevronDown from "../../../assets/icons/ChevronDown";
import { MenuProps } from "../../../types/index.types";
import Logotype from "../../../assets/icons/Logotype";
import React, { useState } from "react";
import { MenuBtn, CloseBtn, Link } from "../../common";

const MobileMenu: React.FC<MenuProps> = ({ items }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubMenuToggle = (label: string) =>
    setActiveSubMenu((prev) => (prev === label ? null : label));

  const handleMenuToggle = () => setIsOpen((prev) => !prev);
  const handleCloseMenu = () => setIsOpen(false);

  useLockBodyScroll(isOpen);

  return (
    <div className="mobile-menu">
      <MenuBtn onClick={handleMenuToggle} />
      <div
        className={`mobile-menu__overlay ${
          isOpen ? "mobile-menu__overlay--active" : ""
        }`}
        onClick={handleCloseMenu}
      >
        <div
          className={`mobile-menu__content ${
            isOpen ? "mobile-menu__content--open" : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-menu__content-header">
            <Logotype />
            <CloseBtn onClick={handleCloseMenu} />
          </div>

          <nav>
            <ul className="mobile-menu__list">
              {items.map((item, index) => (
                <li
                  key={`${item.label}_${index}`}
                  className="mobile-menu__item"
                >
                  {item.subItems ? (
                    <>
                      <button
                        className="mobile-menu__link"
                        onClick={() => handleSubMenuToggle(item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown />
                      </button>
                      {item.subItems && (
                        <ul
                          className={`mobile-submenu ${
                            activeSubMenu === item.label
                              ? "mobile-submenu--active"
                              : ""
                          }`}
                        >
                          {item.subItems.map((subItem) => (
                            <li
                              key={`${item.label}_${subItem.label}_${index}`}
                              className="mobile-menu__item"
                            >
                              <Link
                                href={subItem.link || ""}
                                className="mobile-menu__link"
                                label={subItem.label}
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.link || ""}
                      className="mobile-menu__link"
                      label={item.label}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
