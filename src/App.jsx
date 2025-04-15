import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f9f9;
    color: #333;
`;

const Header = styled.header`
    background: #fff;
    padding: 1.5rem 2rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Nav = styled.nav`
    a {
        margin-left: 1rem;
        text-decoration: none;
        color: #0077cc;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Main = styled.main`
    flex: 1;
`;

const Section = styled.section`
    padding: 3rem 2rem;
`;

const Hero = styled.div`
    text-align: center;
    margin-top: 2rem;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }

    p {
        color: #666;
        font-size: 1.125rem;
    }
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1rem;

    @media(min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const ProjectCard = styled.div`
    background: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    transition: 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    }

    h4 {
        margin-bottom: 0.5rem;
    }

    p {
        color: #555;
    }
`;

const Footer = styled.footer`
  text-align: center;
  color: #aaa;
  padding: 2rem 0;
  font-size: 0.9rem;
`;

function App() {
    return (
        <Container>
            <Header>
                <h1>Your Name</h1>
                <Nav>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </Nav>
            </Header>

            <Main>
                <Section>
                    <Hero>
                        <h2>Hi, I'm Your Name 👋</h2>
                        <p>I'm a React developer who loves clean UIs and functional design.</p>
                    </Hero>
                </Section>

                <Section id="projects">
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>Projects</h3>
                    <ProjectsGrid>
                        <ProjectCard>
                            <h4>Project One</h4>
                            <p>A brief description of your project goes here.</p>
                        </ProjectCard>
                        <ProjectCard>
                            <h4>Project Two</h4>
                            <p>This could be a cool app you made with React.</p>
                        </ProjectCard>
                    </ProjectsGrid>
                </Section>

                <Section id="contact">
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>Contact</h3>
                    <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">yourprofile</a></p>
                </Section>
            </Main>

            <Footer>
                © 2025 Your Name. All rights reserved.
            </Footer>
        </Container>
    );
}

export default App;
