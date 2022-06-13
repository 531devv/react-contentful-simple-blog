import React, { useState, useEffect, useId } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useContentful from "./useContentful";
import styled from "styled-components";
import { Link } from "react-router-dom";

function FeaturedPosts() {
  const [posts, setPosts] = useState([]);
  const { getFeaturedPosts } = useContentful();
  const id = useId();

  useEffect(() => {
    getFeaturedPosts().then((response) => setPosts(response));
  }, []);

  return (
    <Wrapper>
      <h2>Polecane artykuły:</h2>
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {posts.map((item) => {
          return (
            <SplideSlide>
              <StyleLink to={`/posts/${item.slug}`} key={`${id}+${item.title}`}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </StyleLink>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 1rem 0;

  h2 {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
  }

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;
    width: 100%;
    color: white;
  }

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 1rem;
  }
`;

const StyleLink = styled(Link)`
  position: relative;
`;

export default FeaturedPosts;
