import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = styled.header`
  background: #fff;
  padding: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav a {
    margin-left: 1rem;
    text-decoration: none;
    color: #0077cc;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Header() {
    return (
        <NavBar>
            <h1>Your Name</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </NavBar>
    );
}

export default Header;
