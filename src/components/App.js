import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Grow, AppBar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import useStyles from "../styles";
import { fetchPosts } from "../redux/actions/post";

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentPostId, setCurrentPostId] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          height={45}
          src={
            "https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI"
          }
          alt="memories"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={1}
            className={classes.mainContainer}
          >
            <Grid item xs={12} sm={5} md={7}>
              <Posts setCurrentPostId={setCurrentPostId} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Form
                currentPostId={currentPostId}
                setCurrentPostId={setCurrentPostId}
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
