import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ to, content }) => {
  return (
    <div className="px-1 md:px-4 hover:bg-white hover:text-dark rounded-md">
      <Link to={to}>{content}</Link>
    </div>
  );
};

export default LinkButton;
