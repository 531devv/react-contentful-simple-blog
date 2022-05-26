import { useParams } from "react-router-dom";

function Post() {
  let params = useParams();
  return <div>Blog post with id: {params.id}</div>;
}

export default Post;
