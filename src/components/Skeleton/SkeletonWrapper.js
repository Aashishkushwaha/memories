import React from "react";

const SkeletonWrapper = ({ children }) => {
  return (
    <div className={`skeletonWrapper`}>
      <div className="shine" />
      {children}
    </div>
  );
};

export default SkeletonWrapper;
