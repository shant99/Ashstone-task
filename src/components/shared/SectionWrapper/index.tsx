import { SectionWrapperProps } from "../../../types/index.types";
import React from "react";
import "./styles.css";

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = "",
  isBorder = false,
}) => {
  const borderClass = isBorder ? "section-wrapper--border" : "";
  return (
    <section className={`section-wrapper ${borderClass}`}>
      <div className={`section-wrapper__container ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
