import React from "react";
import BrandRecognition from "../images/icon-brand-recognition.svg";
import DetailedRecords from "../images/icon-detailed-records.svg";
import FullyCustomizable from "../images/icon-fully-customizable.svg";
import styled from "styled-components";

const Features = () => {
  return (
    <Section>
      <div className="container">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="features">
          <div className="feature">
            <div className="feature-img">
              <img src={BrandRecognition} alt="Brand Recognition" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="feature">
            <div className="feature-img">
              <img src={DetailedRecords} alt="Detailed Records" />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="feature">
            <div className="feature-img">
              <img src={FullyCustomizable} alt="Fully Customizable" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;

const Section = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--light-gray);

  .container {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    > p {
      color: var(--gray);
      margin-bottom: 3rem;
    }
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .feature {
      background: var(--white);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      padding: 1rem;

      .feature-img {
        padding: 1rem;
        width: fit-content;
        border-radius: 50%;
        background-color: var(--dark-violet);
        margin-top: -2rem;
        position: relative;

        ::before {
          content: "";
          height: 2rem;
          width: 10px;
          background-color: var(--cyan);
          position: absolute;
          top: -2rem;
          left: 43%;
        }

        img {
          width: 2rem;
        }
      }

      h3 {
        margin-top: 2rem;
      }

      p {
        color: var(--gray);
        font-size: 0.9rem;
        margin: 1rem 0;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 2rem;

    .container {
      max-width: 70%;
      margin: 0 auto;

      h2 {
        font-size: 2.5rem;
      }

      > p {
        font-size: 1.1rem;
      }
    }

    .features {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
