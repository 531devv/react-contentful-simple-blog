import Posts from "../components/Posts";
import FeaturedPosts from "../components/FeaturedPosts";

function Homepage() {
  return (
    <div>
      <FeaturedPosts />
      <Posts />
    </div>
  );
}

export default Homepage;
