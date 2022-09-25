import HeroImg from "../images/illustration-working.svg";
import styled from "styled-components";
import "../Colors.css";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="hero">
        <div className="hero-img">
          <img src={HeroImg} alt="hero" />
        </div>

        <div className="hero-text">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.section`
  margin: 4rem 0;
  padding: 0 2rem;
  overflow: hidden;
  background-color: var(--white);

  .hero-img {
    img {
      width: 150%;
    }
  }

  .hero-text {
    text-align: center;
    margin-top: 2rem;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--very-dark-blue);
    }

    p {
      font-size: 1rem;
      color: var(--gray);
    }
  }

  button {
    background: var(--cyan);
    border: none;
    border-radius: 3rem;
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem 3rem;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    .hero {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 4rem;
      margin-top: 4rem;
      flex-direction: row-reverse;

      .hero-img {
        img {
          width: 140%;
        }
      }

      .hero-text {
        text-align: left;
        margin-top: 0;

        h1 {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.2rem;
          width: 80%;
        }
      }
    }
  }
`;
