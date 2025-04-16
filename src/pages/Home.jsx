import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaNodeJs,
    FaGithub,
    FaFileAlt,
    FaFolderOpen,
    FaRegLightbulb,
    FaTools,
} from 'react-icons/fa';

const ParticlesBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    background-color: white;

    canvas {
        display: block !important;
        width: 100% !important;
        height: 100% !important;
    }
`;

const ContentWrapper = styled.div`
    position: relative;
    z-index: 1;
`;

const Section = styled.section`
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 900px) {
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
`;

const Left = styled(motion.div)`
    text-align: center;
    @media (min-width: 900px) {
        text-align: left;
    }
`;

const HeroTitle = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #222;
`;

const Tagline = styled.p`
    font-size: 1.25rem;
    color: #555;
    margin-bottom: 2.5rem;
`;

const CTAContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    @media (min-width: 900px) {
        justify-content: flex-start;
    }
`;

const CTAButton = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background-color: #261FB3;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);

    &:hover {
        background-color: #161179;
        transform: translateY(-2px);
    }

    svg {
        font-size: 1.2rem;
    }
`;

const Right = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 300px;
        width: 100%;
        border-radius: 20px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    }
`;

const StackSection = styled(motion.div)`
    grid-column: span 2;
    text-align: center;
    margin-top: 4rem;
`;

const StackTitle = styled.h3`
    margin-bottom: 1rem;
    font-size: 1.5rem;
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
        transition: transform 0.3s ease, color 0.3s ease;
        cursor: default;

        &:hover {
            transform: scale(1.2);
            color: #261FB3;
        }
    }
`;

const ExtraSection = styled(motion.div)`
    grid-column: span 2;
    margin-top: 4rem;
    padding: 2rem 1rem;
    border-top: 1px solid #eee;
    text-align: center;
`;

const SectionHeading = styled.h4`
    font-size: 1.5rem;
    font-weight: bold;
    color: #222;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    svg {
        margin-right: 0.6rem;
    }
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 auto;
    max-width: 700px;
    text-align: left;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;

  &::before {
    content: '✔';
    margin-right: 0.75rem;
    color: #261FB3;
  }
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
`;

function Home() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.onload = () => {
            window.particlesJS('particles-js', {
                particles: {
                    number: { value: 150, density: { enable: true, value_area: 900 } },
                    color: { value: '#261FB3' },
                    shape: { type: 'circle' },
                    opacity: { value: 0.5, random: true },
                    size: { value: 5, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#261FB3',
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 5,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                    },
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: { enable: true, mode: ['grab', 'bubble'] },
                        onclick: { enable: true, mode: ['push', 'repulse'] },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            line_linked: { opacity: 1 },
                        },
                        bubble: {
                            distance: 250,
                            size: 6,
                            duration: 2,
                            opacity: 0.8,
                            speed: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.6,
                        },
                        push: {
                            particles_nb: 6,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
            });
        };
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <ParticlesBackground id="particles-js" />
            <ContentWrapper>
                <Section id="home">
                    <Left
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <HeroTitle>Hi, I'm Samir Singh 👋</HeroTitle>
                        <Tagline>
                            I build responsive, accessible, and performant web applications using modern tools.
                        </Tagline>

                        <CTAContainer>
                            <CTAButton to="/projects">
                                <FaFolderOpen />
                                View Projects
                            </CTAButton>
                            <CTAButton to="/resume">
                                <FaFileAlt />
                                Download Resume
                            </CTAButton>
                        </CTAContainer>
                    </Left>

                    <Right
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img src="src/assets/MyBack.png" alt="Developer Illustration" />
                    </Right>
                </Section>

                <StackSection
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <StackTitle>Tech I Work With</StackTitle>
                    <TechStack>
                        <FaReact title="React" />
                        <FaJs title="JavaScript" />
                        <FaHtml5 title="HTML5" />
                        <FaCss3Alt title="CSS3" />
                        <FaNodeJs title="Node.js" />
                        <FaGithub title="GitHub" />
                    </TechStack>
                </StackSection>

                <ExtraSection
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <SectionHeading>
                        <FaRegLightbulb /> My Philosophy
                    </SectionHeading>
                    <SectionText>
                        I strive to craft clean, modular code that prioritizes accessibility, maintainability,
                        and performance. My development philosophy is rooted in clarity, simplicity, and a
                        user-first mindset. I'm constantly exploring new technologies and improving workflows
                        that push the web forward—while keeping the experience seamless and intuitive.
                    </SectionText>
                </ExtraSection>

                <ExtraSection
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <SectionHeading>
                        <FaTools /> Tools & Workflow
                    </SectionHeading>
                    <List>
                        <ListItem>Code Editor: VS Code with Copilot, ESLint, Prettier</ListItem>
                        <ListItem>Dev Tools: Chrome DevTools, GitHub CLI, GitHub Actions</ListItem>
                        <ListItem>Design: Figma, Color Contrast Checker, Responsiveness testing</ListItem>
                        <ListItem>Tooling: Vite, Webpack, NPM/Yarn, environment config</ListItem>
                        <ListItem>CI/CD: Automated builds & deployments with GitHub Actions</ListItem>
                    </List>
                </ExtraSection>
            </ContentWrapper>
        </>
    );
}

export default Home;
