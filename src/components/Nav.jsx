import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { GiPencilRuler } from "react-icons/gi";
function Nav() {
  return (
    <Navigation>
      <Link to={"/"}>
        <Logo>
          <GiPencilRuler /> <p>DevBlog</p>
        </Logo>
      </Link>
      <Wrapper>
        <NavLink
          to="/category/news"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <Category>Aktualności</Category>
        </NavLink>
        <NavLink to="/category/fun">
          <Category>Rozrywka</Category>
        </NavLink>
        <NavLink to="/category/curiosities">
          <Category>Ciekawostki</Category>
        </NavLink>
        <NavLink to="/category/tech">
          <Category>Technologie</Category>
        </NavLink>
      </Wrapper>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;
  padding: 1rem 0;
  z-index: 1090;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #282828;

  &:hover {
    transform: translateY(-2px);
    transition: ease-in-out 0.1s;
  }

  p {
    padding-left: 0.2rem;
    font-weight: 700;
    font-size: 1.5rem;
    font-family: "Bebas neue", sans-serif;
    letter-spacing: 0.2rem;
  }

  svg {
    color: #a00c85;
    height: 25px;
    width: 25px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 1rem;
`;

const Category = styled.div`
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
`;

export default Nav;
