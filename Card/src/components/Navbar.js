import styled from "styled-components";
import {links} from "../utils/constants";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="links">
            {links.map((link) => {
              const {id, name} = link;
              return (
                <li key="id">
                  <a>{name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  nav {
    height: 80px;
    background: var(--clr-primary-8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-center {
    width: 90vw;
    display: flex;
    justify-content: space-between;
  }
  ul {
    display: flex;
    align-items: center;
  }
  ul li {
    padding: 0px 20px;
    font-weight: bold;
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }
`;

export default Navbar;
