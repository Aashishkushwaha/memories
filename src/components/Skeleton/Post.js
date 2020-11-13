import React from "react";
import Skeleton from ".";
import SkeletonWrapper from "./SkeletonWrapper";

const PostSkeleton = () => {
  return (
    <>
      <SkeletonWrapper>
        <Skeleton type="card" />
        <Skeleton type="title" />
        <Skeleton type="text" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Skeleton type="btn" />
          <Skeleton type="btn" />
        </div>
      </SkeletonWrapper>
    </>
  );
};

export default PostSkeleton;
