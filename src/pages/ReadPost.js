import ContentPostComponent from "./ContentPostComponent";

const ReadPost = (props) => {
  const postId = props.postId;
  if (postId) {
    return (
      <div>
        <ContentPostComponent id={postId} />
      </div>
    );
  }
  return <h1>Posts</h1>;
};

export default ReadPost;
