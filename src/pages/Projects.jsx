import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const Card = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }

  h4 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
  }

  p {
    font-size: 0.95rem;
    color: #555;
    margin-bottom: 1rem;
  }

  span {
    display: inline-block;
    font-size: 0.85rem;
    background: #eef3f8;
    color: #261FB3;
    padding: 2px 8px;
    border-radius: 4px;
    margin-right: 5px;
    margin-bottom: 5px;
  }

  a {
    font-size: 0.9rem;
    margin-right: 1rem;
    color: #261FB3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const projects = [
    {
        name: 'Waste Classifier',
        description: 'A machine learning web app that classifies garbage types using images and provides smart disposal suggestions.',
        tech: ['React', 'TensorFlow.js', 'Python'],
        demo: 'https://your-demo-link.com',
        github: 'https://github.com/your-username/waste-classifier',
    },
    {
        name: 'Paper Trading Platform',
        description: 'A stock trading simulation site with basket orders, stop loss, and live data using Alpha Vantage.',
        tech: ['React', 'Flask', 'JWT'],
        demo: 'https://your-demo-link.com',
        github: 'https://github.com/your-username/paper-trading',
    },
    {
        name: 'Password Strength Checker',
        description: 'A tool that visually rates password strength using regex and entropy rules.',
        tech: ['JavaScript', 'HTML', 'CSS'],
        demo: 'https://your-demo-link.com',
        github: 'https://github.com/your-username/password-checker',
    },
    // Add more as needed
];

const Projects = () => {
    return (
        <Section>
            <Heading>Projects</Heading>
            <ProjectsGrid>
                {projects.map((project, index) => (
                    <Card key={index}>
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                        <div>
                            {project.tech.map((tech, i) => (
                                <span key={i}>{tech}</span>
                            ))}
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                            <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </Card>
                ))}
            </ProjectsGrid>
        </Section>
    );
};

export default Projects;
