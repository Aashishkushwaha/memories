import React from "react";
import Post from "./Post/Post";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentPostId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return posts.length < 1 ? (
    <CircularProgress />
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
