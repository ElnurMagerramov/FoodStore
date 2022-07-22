import * as React from "react";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}) => (
  <span
    className={` ${
      isActive
        ? "text-success border border-0 border-bottom border-success "
        : "text-muted"
    }`}
    onClick={onClick}
  >
    {children}
  </span>
);