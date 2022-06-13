import { useState, useEffect, useId } from "react";
import useContentful from "./useContentful";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const { getPosts } = useContentful();
  const id = useId();

  useEffect(() => {
    getPosts().then((response) => setPosts(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {posts.map((post) => {
        return (
          <Post key={`${id}+${post.title}`}>
            <Thumbnail to={`/posts/${post.slug}`}>
              <img src={post.image} alt={post.title} />
              <Title>{post.title}</Title>
            </Thumbnail>
            <CategoryWrapper>
              {post.categories.map((category, index) => {
                return (
                  <Category
                    key={`${id}+${index}`}
                    to={`/category/${category.categoryName}`}
                  >
                    {category.categoryTitle}
                  </Category>
                );
              })}
            </CategoryWrapper>
            <p>{post.shortDescription}</p>
            <Link to={`/posts/${post.slug}`}>
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
`;

const Post = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem auto;
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

const Thumbnail = styled(Link)`
  position: relative;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  width: 100%;
  color: white;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  background-color: #a00c85;
  font-weight: 700;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 0.4rem;
`;

const Category = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 2rem;
  border-radius: 1rem;
  background-color: #a00c85;
  color: white;
  font-size: 0.9rem;
  margin-right: 0.2rem;
  transform: scale(0.8);

  &:hover {
    background-color: black;
  }

  &.active {
    background-color: black;
  }
`;

export default Posts;
