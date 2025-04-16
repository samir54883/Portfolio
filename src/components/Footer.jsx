import { useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
    background-color: #f1f1f1;
    padding: 2rem 1rem;
    text-align: center;
    font-size: 0.95rem;
    color: #444;
    margin-top: auto;
    border-radius: 12px; /* optional: smooth corners */
    z-index: 100;
    margin: 5px;
`;

const SocialLinks = styled.div`
    margin: 1rem 0;

    a {
        color: #261FB3;
        margin: 0 0.75rem;
        font-size: 1.5rem;
        transition: color 0.3s ease;

        &:hover {
            color: #161179;
        }
    }
`;

const Divider = styled.hr`
    border: none;
    height: 1px;
    background-color: #ddd;
    margin: 1.5rem 0;
`;

const BackToTop = styled.a`
    display: inline-block;
    margin-top: 1rem;
    font-size: 0.85rem;
    color: #261FB3;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

function Footer() {
    const year = new Date().getFullYear();

    // Scroll to top functionality
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adds smooth scroll effect
        });
    };

    return (
        <FooterContainer>
            <SocialLinks>
                <a
                    href="https://github.com/yourgithub"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/yourlinkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://twitter.com/yourtwitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <FaTwitter />
                </a>
            </SocialLinks>

            <Divider />

            <p>
                © {year} Your Name. Built with React & styled-components. Deployed on GitHub Pages.
            </p>

            <BackToTop onClick={handleScrollToTop}>↑ Back to top</BackToTop>
        </FooterContainer>
    );
}

export default Footer;
