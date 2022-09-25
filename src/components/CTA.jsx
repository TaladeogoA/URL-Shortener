import styled from "styled-components";

const CTA = () => {
  return (
    <Container>
      <h2>Boost your links today</h2>
      <button>Get Started</button>
    </Container>
  );
};

export default CTA;

const Container = styled.section`
  background-color: var(--dark-violet);
  color: var(--white);
  text-align: center;
  padding: 4.5rem 2rem;

  button {
    background: var(--cyan);
    border: none;
    border-radius: 3rem;
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.8rem 2.8rem;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    padding: 3rem 0;
  }
`;
