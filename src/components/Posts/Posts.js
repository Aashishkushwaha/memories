import React from "react";
import Post from "./Post/Post";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import Skeleton from "../Skeleton";
import PostSkeleton from "../Skeleton/Post";

const Posts = ({ setCurrentPostId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  return posts.length < 1 ? (
    <>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {Array(5)
          .fill(7)
          .map((_, index) => (
            <Grid key={index} item xs={12} md={6}>
              <PostSkeleton />
            </Grid>
          ))}
      </Grid>
    </>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => {
        return (
          <Grid item key={post._id} xs={12} md={6}>
            <Post setCurrentPostId={setCurrentPostId} post={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
