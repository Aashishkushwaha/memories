import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { deletePost, likePost } from "../../../redux/actions/post";
import { useDispatch } from "react-redux";
import useStyles from "./style";

const Post = ({ post, setCurrentPostId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deletePostHandler = (id) => {
    dispatch(deletePost(id));
  };

  const likesClickHandler = (postId, post) => {
    dispatch(likePost(postId, { ...post, likeCount: ++post.likeCount }));
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post?.selectedFile}
        title={post?.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post?.creator}</Typography>
        <Typography variant="body2">
          {moment(post?.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            setCurrentPostId(post?._id);
          }}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post?.tags?.map((tag) => `#${tag.trim()} `)}
        </Typography>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5">{post?.title}</Typography>
          <Typography variant="body2" color="textSecondary" component="h5">{post?.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            className={classes.button}
            size="small"
            color="primary"
            onClick={() => likesClickHandler(post?._id, post)}
          >
            <ThumbUpAltIcon fontSize="small" style={{ marginRight: "4px" }} />
            {`${post?.likeCount} `}
            Likes
          </Button>
          <Button
            className={classes.button}
            size="small"
            color="primary"
            onClick={() => deletePostHandler(post?._id)}
          >
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default Post;
