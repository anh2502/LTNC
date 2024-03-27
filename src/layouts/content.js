// Content.js
import React from "react";

const Content = ({ isOpen, children }) => {
  return (
    <div style={{ marginLeft: isOpen ? "250px" : "0", transition: "margin-left 0.5s" }}>
      {children}
    </div>
  );
};

export default Content;
