import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 960px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Summary = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.05rem;
  color: #444;

  p {
    margin: 0.5rem 0;
  }
`;

const Button = styled.a`
  display: inline-block;
  background-color: #0077cc;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #005fa3;
  }
`;

const PdfContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 600px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }
`;

const Resume = () => {
    return (
        <Section>
            <Heading>Resume</Heading>

            <Summary>
                <p><strong>Experience:</strong> Web Developer (React, Node.js)</p>
                <p><strong>Skills:</strong> React, JavaScript, HTML, CSS, Python, Flask, Git</p>
                <p><strong>Education:</strong> B.Tech in Computer Science</p>
                <Button href="/resume.pdf" download>
                    Download Resume
                </Button>
            </Summary>

            <PdfContainer>
                <iframe
                    src="/resume.pdf"
                    title="Resume PDF"
                />
            </PdfContainer>
        </Section>
    );
};

export default Resume;
