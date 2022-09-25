import React from "react";
import Logo from "../images/logo.svg";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import "../Colors.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NavWrapper>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <ul className={`mobile-nav ${isOpen ? "show" : "hidden"}`}>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li className="underline"></li>
        <li>LogIn</li>
        <li className="button">SignUp</li>
      </ul>

      <div className="desktop-nav">
        <ul className="sections">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>

        <ul className="login">
          <li>LogIn</li>
          <li className="button">Sign Up</li>
        </ul>
      </div>

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
      </button>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 4rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  z-index: 99999999;
  background: var(--white);

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 2.5rem;
    margin-right: 2rem;
    color: var(--gray);
  }

  .logo {
    margin-left: 2rem;
    display: flex;
    align-items: center;
  }

  .mobile-nav {
    position: absolute;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    list-style: none;
    font-size: 1.2rem;
    font-weight: 500;
    top: 100%;
    background: var(--dark-violet);
    color: var(--white);
    margin: 0 1rem;
    padding: 2rem 0;
    width: calc(100vw - 2rem);
    border-radius: 1rem;
    text-align: center;

    &.hidden {
      display: none;
    }

    &.show {
      display: flex;
    }

    .underline {
      width: 80%;
      height: 2px;
      background: var(--grayish-violet);
      margin: 0 auto;
    }

    .button {
      background: var(--cyan);
      padding: 0.5rem 1.5rem;
      border-radius: 2rem;
      width: 70%;
    }
  }

  /* Desktop Nav */
  .desktop-nav {
    display: none;
    align-items: center;
    font-size: 1.2rem;

    .sections {
      display: flex;
      gap: 2rem;
      list-style: none;
      font-weight: 500;
    }

    .login {
      display: flex;
      gap: 2rem;
      list-style: none;
      align-items: center;
      justify-content: center;

      .button {
        background: var(--cyan);
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        color: var(--white);
        font-size: 700;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 1rem 0;
    gap: 3rem;
    justify-content: normal;

    .logo {
      margin-left: 4rem;
    }

    .mobile-nav {
      display: none;
    }

    .desktop-nav {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-right: 4rem;
    }

    button {
      display: none;
    }
  }
`;
