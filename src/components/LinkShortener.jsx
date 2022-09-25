import { useState } from "react";
import styled from "styled-components";

const LinkShortener = ({ setInputLink }) => {
  // set the state of input and pass it as a prop to the state in the Homepage component

  const [input, setInput] = useState("");

  const handleClick = () => {
    setInputLink(input);
    setInput("");
  };

  return (
    <StyledLinkShortener>
      <div className="form-container">
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClick}>Shorten It!</button>
      </div>
    </StyledLinkShortener>
  );
};

export default LinkShortener;

const StyledLinkShortener = styled.section`
  padding: 2rem;
  background: linear-gradient(
    to bottom,
    var(--white) 0%,
    var(--white) 50%,
    var(--light-gray) 50%,
    var(--light-gray) 100%
  );

  .form-container {
    background: var(--dark-violet);
    border-radius: 10px;
    padding: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    input {
      width: 100%;
      border-radius: 5px;
      height: 3rem;
    }

    button {
      width: 100%;
      background: var(--cyan);
      border: none;
      border-radius: 5px;
      color: var(--white);
      height: 3rem;
    }
  }

  @media (min-width: 768px) {
    .form-container {
      flex-direction: row;
      max-width: 70%;
      margin: 0 auto;
      padding: 2rem 3rem;

      input {
        width: 80%;
      }

      button {
        width: 20%;
      }
    }
  }
`;
