import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { TextField, Typography, Paper, Button } from "@material-ui/core";
import { addPost, updatePost } from "../../redux/actions/post";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";

const Form = ({ currentPostId, setCurrentPostId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentPostId
      ? state.posts.find((post) => post._id === currentPostId)
      : null
  );

  const initialPostData = {
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  };
  const [postData, setPostData] = useState(initialPostData);

  useEffect(() => {
    if (post) {
      setPostData({...post, tags: post.tags.toString()});
    }
  }, [post]);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log({postData});

    if (currentPostId) {
      dispatch(
        updatePost(currentPostId, {
          ...postData,
          tags: postData?.tags?.split(","),
        })
      );
    } else {
      dispatch(addPost({ ...postData, tags: postData.tags.split(",") }));
    }
    clearHandler();
  };

  const clearHandler = () => {
    setPostData(initialPostData);
    setCurrentPostId(null);
  };

  const onChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={submitHandler}
      >
        <Typography variant="h6">{post ? "Updating" : "Creating"}  a memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={onChange}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={onChange}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={onChange}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={onChange}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clearHandler}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
