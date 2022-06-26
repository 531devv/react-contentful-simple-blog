import React, { useState, useEffect, useId, useContext } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useContentful from "../hooks/useContentful";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function FeaturedPosts() {
  const [posts, setPosts] = useState([]);
  const { getFeaturedPosts } = useContentful();
  const id = useId();
  const { theme, isDarkMode } = useContext(ThemeContext);

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
          breakpoints: {
            1024: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {posts.map((item) => {
          return (
            <SplideSlide key={`${id}+${item.title}`}>
              <StyleLink to={`/posts/${item.slug}`}>
                <Image
                  theme={isDarkMode ? theme.darkMode : theme.lightMode}
                  src={item.image}
                  alt={item.title}
                />
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
  margin: 1rem auto;
  width: 80%;
  max-width: 14000px;

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
`;

const StyleLink = styled(Link)`
  position: relative;
`;

const Image = styled.img`
  box-shadow: ${({ theme }) => theme.postBoxShadow};
  width: 100%;
  object-fit: contain;
  border-radius: 1rem;
`;

export default FeaturedPosts;
