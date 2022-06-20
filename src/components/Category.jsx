import { useState, useEffect } from "react";
import styled from "styled-components";
import useContentful from "../hooks/useContentful";
import { Link, useParams } from "react-router-dom";

function Category() {
  const [posts, setPosts] = useState([]);
  let { slug } = useParams();
  const { getCategoryPosts } = useContentful();

  useEffect(() => {
    getCategoryPosts(slug).then((response) => setPosts(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const categoryPosts = posts.map((post, index) => {
    return (
      <Post key={post.slug + index}>
        <Link to={`/posts/${post.slug}`}>
          <img src={post.image} alt={post.title} />
        </Link>
        <h2>{post.title}</h2>
        <p>{post.shortDescription}</p>
        <Link to={`/posts/${post.slug}`}>
          <Button>Dowiedz się więcej</Button>
        </Link>
      </Post>
    );
  });

  return (
    <Wrapper>
      {categoryPosts.length > 0 ? categoryPosts : <Text>Brak postów</Text>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Post = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem auto;
  text-align: center;
  width: 600px;
  max-width: 100%;

  h2 {
    margin: 0.2rem;
  }

  p {
    margin-bottom: 0.8rem;
  }

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 1rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: #a00c85;
  font-weight: 700;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

const Text = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Category;
