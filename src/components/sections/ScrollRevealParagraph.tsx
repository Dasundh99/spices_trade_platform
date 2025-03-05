import React from "react";
import classNames from "classnames";

const ScrollRevealParagraph: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const classes = classNames("text-lg text-gray-200 leading-relaxed about-paragraph", className);
  return <p className={classes}>{children}</p>;
};

export default ScrollRevealParagraph;