import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
    padding: 5rem 2rem;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled(motion.h2)`
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
    color: #0C0950;
`;

const ContentWrapper = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: justify;

    @media (min-width: 768px) {
        grid-template-columns: 2fr 1fr;
        align-items: start;
    }
`;

const Bio = styled(motion.div)`
    font-size: 1.1rem;
    color: #333;
    line-height: 1.8;
`;

const Timeline = styled.div`
    margin-top: 2rem;
    border-left: 3px solid #261FB3;
    padding-left: 1.5rem;
`;

const TimelineItem = styled(motion.div)`
    margin-bottom: 2rem;

    h4 {
        font-size: 1.2rem;
        color: #261FB3;
        margin-bottom: 0.4rem;
    }

    p {
        margin: 0;
        text-align: justify;
        color: #444;
    }
`;

const ProfileSection = styled(motion.div)`
    text-align: center;

    img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 1rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    h3 {
        margin-bottom: 0.25rem;
        font-size: 1.3rem;
        color: #222;
    }

    span {
        display: block;
        font-size: 0.95rem;
        color: #666;
    }
`;

const About = () => {
    return (
        <Section>
            <Heading
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                About Me
            </Heading>

            <ContentWrapper
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Bio>
                    <p>
                        I'm a passionate web developer focused on building modern, responsive, and user-friendly web applications. Since
                        beginning my journey in 2022, I’ve developed real-world projects using React, Node.js, and machine learning. My focus
                        lies in writing clean code, following good design principles, and continuously learning new technologies.
                    </p>

                    <Timeline>
                        <TimelineItem
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h4>2022 – Started Coding</h4>
                            <p>Learned HTML, CSS, and JavaScript by building small, practical projects through online platforms.</p>
                        </TimelineItem>
                        <TimelineItem
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h4>2023 – Project Building Phase</h4>
                            <p>Developed over 5 projects including stock trading apps, ML tools, and utilities with React and APIs.</p>
                        </TimelineItem>
                        <TimelineItem
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h4>2024 – Advanced Concepts & UI</h4>
                            <p>
                                Focused on UI/UX, accessibility, performance optimizations, and building applications that solve real-world
                                problems.
                            </p>
                        </TimelineItem>
                    </Timeline>
                </Bio>

                <ProfileSection
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img src="src/assets/ME.png" alt="Your Name" />
                    <h3>Your Name</h3>
                    <span>📍 India | 🎮 Gamer </span>
                </ProfileSection>
            </ContentWrapper>
        </Section>
    );
};

export default About;
