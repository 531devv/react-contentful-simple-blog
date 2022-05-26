import { Link } from "react-router-dom";
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
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: white;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #282828;

  p {
    padding-left: 0.2rem;
    font-weight: 700;
    font-size: 1.5rem;
  }

  svg {
    color: #a00c85;
    height: 25px;
    width: 25px;
  }
`;

export default Nav;
