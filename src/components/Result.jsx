import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";

const Result = ({ inputLink }) => {
  // get the input link from the Homepage component, use it to fetch the shortened link and display it to the user

  //   const [shortLink, setShortLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${inputLink}`
      );
      const data = await response.json();
      console.log(data);
      // get short link from the data object from the API and set it to the shortLink state
      //   setShortLink(data.result.short_link);

      // set the initial link and the shortened link to the shortenedLinks state
      setShortenedLinks([
        ...shortenedLinks,
        {
          originalLink: inputLink.substring(0, 28),
          shortenedLink: data.result.short_link,
        },
      ]);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (inputLink) {
      fetchData();
    }
  }, [inputLink]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <ResultWrapper>
      {shortenedLinks
        ? shortenedLinks.map((item, index) => {
            return (
              <Container key={index}>
                <div className="original-link">
                  <p>{item.originalLink}...</p>
                </div>

                <div className="shortened-link">
                  <p>{item.shortenedLink}</p>
                  <CopyToClipboard
                    text={item.shortenedLink}
                    onCopy={() => setCopied(true)}
                  >
                    <Button className={copied ? "copied" : ""}>
                      {copied ? "Copied!" : "Copy"}
                    </Button>
                  </CopyToClipboard>
                </div>
              </Container>
            );
          })
        : null}
    </ResultWrapper>
  );
};

export default Result;

const ResultWrapper = styled.section`
  background: var(--light-gray);
  padding: 1rem 0;
`;

const Container = styled.div`
  background: var(--white);
  border-radius: 10px;
  margin: 1.5rem 2rem;
  border: solid 1px var(--light-gray);
  padding: 1rem 0;

  p {
    padding: 0 1rem;
    font-weight: 500;
  }

  .original-link {
    border-bottom: solid 1px var(--light-gray);

    p {
      padding-bottom: 0.5rem;
    }
  }

  .shortened-link {
    border-top: solid 1px var(--light-gray);

    p {
      padding: 0.5rem 1rem;
      color: var(--cyan);
    }
  }

  @media (min-width: 768px) {
    max-width: 70%;
    margin: 1.5rem auto;
  }
`;

const Button = styled.button`
  background-color: var(--cyan);
  color: var(--white);
  border: none;
  border-radius: 5px;
  width: calc(100% - 2rem);
  margin-inline: 1rem;
  padding: 0.5rem 2rem;
  font-weight: 700;
  font-size: 1rem;

  &.copied {
    background-color: var(--dark-violet);
  }

  &:hover {
    cursor: pointer;
  }
`;
