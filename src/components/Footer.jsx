import styled from "styled-components";
import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <Container>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Shortly Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-link">
            <h4>Features</h4>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="footer-link">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-link">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="socials">
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Pinterest} alt="pinterest" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background-color: var(--very-dark-blue);
  color: var(--white);
  padding: 4rem 2rem;
  text-align: center;

  .footer-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .footer-logo {
      filter: invert(1);
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;

      .footer-link {
        h3 {
          font-size: 1.2rem;
        }
        ul {
          list-style: none;

          li {
            margin-top: 0.5rem;
            font-size: 0.8rem;
          }
        }
      }
    }

    .socials {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  }

  @media (min-width: 768px) {
    .footer-container {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      max-width: 70%;
      margin: 0 auto;

      .footer-links {
        flex-direction: row;
      }
    }
  }
`;
