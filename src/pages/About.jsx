import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 960px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Bio = styled.p`
  font-size: 1.125rem;
  color: #444;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
`;

const Timeline = styled.div`
  margin: 2rem 0;
  padding-left: 1.5rem;
  border-left: 3px solid #0077cc;
`;

const TimelineItem = styled.div`
  margin-bottom: 2rem;

  h4 {
    font-size: 1.1rem;
    color: #0077cc;
    margin-bottom: 0.3rem;
  }

  p {
    margin: 0;
    color: #555;
  }
`;

const ProfileSection = styled.div`
  margin-top: 3rem;
  text-align: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  span {
    display: block;
    font-size: 0.95rem;
    color: #777;
  }
`;

const About = () => {
    return (
        <Section>
            <Heading>About Me</Heading>

            <Bio>
                I'm a web developer who loves crafting responsive, clean, and user-friendly applications. I started my journey in 2022 and have worked on projects that solve real problems using React, Node.js, and machine learning.
            </Bio>

            <Timeline>
                <TimelineItem>
                    <h4>2022 – Started Coding</h4>
                    <p>Learned HTML, CSS, JavaScript through online resources and began building mini projects.</p>
                </TimelineItem>
                <TimelineItem>
                    <h4>2023 – Built 5+ Projects</h4>
                    <p>Worked on web apps including a stock trading platform, password strength checker, and a waste classifier using ML.</p>
                </TimelineItem>
                <TimelineItem>
                    <h4>2024 – Real-world Applications</h4>
                    <p>Focused on user-centered design, API integration, and sustainability-focused projects for portfolio and research.</p>
                </TimelineItem>
            </Timeline>

            <ProfileSection>
                <img src="/profile.jpg" alt="Your Name" />
                <span>📍 Based in India | 🎮 Gamer & 🌱 Sustainability Enthusiast</span>
            </ProfileSection>
        </Section>
    );
};

export default About;
