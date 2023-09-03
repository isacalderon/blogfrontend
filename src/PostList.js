import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function PostList({ posts }) {
  const [postId, setPostId] = useState([]);
  return (
    <div>
      <ListGroup>
        {posts.map((post) => (
          <ListGroup.Item itemID={post.postId}>{post.title}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default PostList;
