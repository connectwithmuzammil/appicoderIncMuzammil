import React from "react";

const SectionLayout = ({ leftContent, rightContent, extraClasses = "" }) => {
  return (
    <section className={`section-layout ${extraClasses}`}>
      <div className="container">
        <div className="left">{leftContent}</div>
        <div className="right">{rightContent}</div>
      </div>
    </section>
  );
};

export default SectionLayout;
