import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub } from 'react-icons/fa';

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Tagline = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2.5rem;
`;

const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const CTAButton = styled(Link)`
  background-color: #0077cc;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005fa3;
  }
`;

const StackTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: #444;
`;

const TechStack = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 2rem;
  color: #555;

  svg {
    transition: transform 0.3s ease;
    cursor: default;

    &:hover {
      transform: scale(1.2);
      color: #0077cc;
    }
  }
`;

function Home() {
    return (
        <Section id="top">
            <HeroTitle>Hi, I'm Your Name 👋</HeroTitle>
            <Tagline>I build responsive and performant web applications using modern tools and technologies.</Tagline>

            <CTAContainer>
                <CTAButton to="/projects">View Projects</CTAButton>
                <CTAButton to="/resume">Download Resume</CTAButton>
            </CTAContainer>

            <StackTitle>Tech I Work With</StackTitle>
            <TechStack>
                <FaReact title="React" />
                <FaJs title="JavaScript" />
                <FaHtml5 title="HTML5" />
                <FaCss3Alt title="CSS3" />
                <FaNodeJs title="Node.js" />
                <FaGithub title="GitHub" />
            </TechStack>
        </Section>
    );
}

export default Home;
