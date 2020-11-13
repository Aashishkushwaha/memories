import React from "react";

const Skeleton = ({ type }) => {
  return <div className={`skeleton ${type}`} />;
};

export default Skeleton;