import React from "react";

const Row = ({ value, name }) => {
  return (
    <div className="flex gap-4  border-b-red border-b-2 px-2 py-4 md:text-lg">
      <div>{name}</div>
      <div>{value}</div>
    </div>
  );
};

export default Row;
