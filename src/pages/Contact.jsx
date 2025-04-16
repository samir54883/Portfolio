import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  input,
  textarea {
    padding: 0.8rem 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    resize: none;
  }

  textarea {
    min-height: 150px;
  }

  button {
    background-color: #261FB3;
    color: white;
    border: none;
    padding: 0.9rem;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #161179;
    }
  }
`;

const Socials = styled.div`
  margin-top: 3rem;
  text-align: center;

  a {
    margin: 0 1rem;
    font-size: 1.25rem;
    color: #261FB3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Contact = () => {
    return (
        <Section>
            <Heading>Contact</Heading>

            {/* Mailto fallback option */}
            {/* <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Feel free to reach out via <a href="mailto:you@example.com">email</a> or the form below:
      </p> */}

            <Form
                action="https://formspree.io/f/your-form-id" // Replace with real Formspree or backend endpoint
                method="POST"
            >
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required />
                <button type="submit">Send Message</button>
            </Form>

            <Socials>
                <p>Connect with me:</p>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                    LinkedIn
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                    GitHub
                </a>
                <a href="mailto:you@example.com">Email</a>
            </Socials>
        </Section>
    );
};

export default Contact;
