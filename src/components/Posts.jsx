import { useState, useEffect } from "react";
import useContentful from "./useContentful";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const { getPosts } = useContentful();

  useEffect(() => {
    getPosts().then((response) => setPosts(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {posts.map((post) => {
        return (
          <Post key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <img src={post.image} alt={post.title} />
            </Link>

            <h2>{post.title}</h2>
            <p>{post.shortDescription}</p>
            <Link to={`/posts/${post.id}`}>
              <Button>Dowiedz się więcej</Button>
            </Link>
          </Post>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
`;

const Post = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
  text-align: center;

  h2 {
    margin: 0.8rem;
  }

  p {
    margin-bottom: 0.8rem;
  }

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: violet;
  cursor: pointer;
`;

export default Posts;
