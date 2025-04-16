import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = styled.header`
    background: rgba(225, 225, 225, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 1rem 2rem;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 10px; /* was 0, changed to 10px for spacing from top */
    margin-top: 0px; /* optional: gives spacing when not sticky too */
    z-index: 100;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
    }
`;



const Brand = styled(Link)`
    font-size: 1.5rem;
    font-weight: 800;
    color: #261FB3;
    text-decoration: none;
    transition: color 0.3s ease;
    letter-spacing: -0.5px;

    &:hover {
        color: #161179;
    }
`;

const NavLinks = styled.nav`
    display: flex;
    gap: 1.5rem;

    a {
        text-decoration: none;
        color: #0C0950;
        font-weight: 600;
        padding: 0.25rem 0.5rem;
        border-radius: 6px;
        transition: all 0.3s ease;

        &:hover {
            background-color: #f0f8ff;
            color: #261FB3;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 0.75rem;
        width: 100%;
        a {
            padding: 0.5rem 0;
            width: 100%;
        }
    }
`;

function Header() {
    return (
        <NavBar as={motion.header} initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <Brand to="/">Samir54883</Brand>
            <NavLinks>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </NavLinks>
        </NavBar>
    );
}

export default Header;