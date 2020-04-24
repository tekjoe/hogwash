import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import background from "../images/bg-shorten-desktop.svg";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  top: -10rem;
`;

const FactChecker = styled.div`
  background: ${({ theme }) => `${theme.darkViolet} url(${background})`};
  background-size: cover;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

FactChecker.Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ValidatedFieldset = styled.fieldset`
  width: 100%;
  border: none;
  margin-bottom: 1.25rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
    width: 80%;
  }
`;

const Input = styled.input`
  background: white;
  color: ${({ theme, hasErrors }) =>
    hasErrors ? theme.red : theme.veryDarkViolet};
  padding: 1rem;
  border-radius: 0.5rem;
  border: ${({ hasErrors, theme }) =>
    hasErrors ? `3px solid ${theme.red}` : "3px solid white"};
  font-size: 1.125rem;
  width: 100%;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.cyan};
  display: inline-block;
  color: #fafafa;
  font-weight: bold;
  font-size: 1.125rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 100%;
  padding: 1rem;
  &:hover {
    background: ${({ theme }) => theme.lighterCyan};
  }
  @media (min-width: 768px) {
    width: 20%;
  }
`;

const ResultsList = styled.div`
  margin: 2rem 0;
`;

ResultsList.Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  background: white;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

ResultsList.Item.Body = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  p {
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  small a {
    text-decoration: none;
    color: #307d94;
  }
  @media (min-width: 768px) {
    padding: 2rem;
    border-bottom: none;
    flex: 4;
  }
`;

const CopyButton = styled.a`
  background: ${({ theme }) => theme.cyan};
  display: inline-block;
  color: #fafafa;
  font-weight: bold;
  font-size: 1.125rem;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  text-align: center;
  margin: 1rem;
  &:hover {
    background: ${({ theme }) => theme.lighterCyan};
  }
  @media (min-width: 768px) {
    padding: 0.5rem 3rem;
    margin: 1rem;
  }
`;

const Error = styled.p`
  color: ${({ theme }) => theme.red};
  font-style: italic;
  @media (min-width: 768px) {
    position: absolute;
  }
`;

export default () => {
  const [rumors, setRumors] = useState({ claims: [] });
  const [query, setQuery] = useState("Covid-19");
  const [hasErrors, setHasErrors] = useState(false);
  useEffect(() => {
    const getRumors = async () => {
      const results = await axios(
        `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${query}&key=${process.env.REACT_APP_API_KEY}&languageCode=en-US`
      );
      setRumors({ claims: results.data.claims });
    };
    getRumors();
  }, []);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  // const saveToLocalStorage = (rumors) => {
  //   const serializedUrls = JSON.stringify(rumors.claims);
  //   localStorage.setItem("rumors", serializedUrls);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const getRumors = async () => {
      const results = await axios(
        `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${query}&key=${process.env.REACT_APP_API_KEY}&languageCode=en-US`
      );
      // error handling
      if (!results.data.claims) {
        setHasErrors(true);
      } else {
        setRumors({ claims: results.data.claims });
        setHasErrors(false);
      }
    };
    getRumors();
  };
  const handleCopy = async (e) => {
    const link = e.target.previousElementSibling.dataset.url;
    e.target.innerText = "Copied!";
    e.target.style.backgroundColor = "hsl(260, 8%, 14%)";
    try {
      await navigator.clipboard.writeText(link);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };
  return (
    <Container>
      <FactChecker id="debunker">
        <FactChecker.Form>
          <ValidatedFieldset>
            <Input
              placeholder={query ? query : "Search for a rumor here..."}
              onChange={handleChange}
              value={query}
              id="queryForm"
            />
            {hasErrors ? (
              <Error>Invalid search. Please try again.</Error>
            ) : null}
          </ValidatedFieldset>
          <SubmitButton onClick={handleSubmit}>Debunk It!</SubmitButton>
        </FactChecker.Form>
      </FactChecker>
      <h3>Showing results for {query}</h3>
      <ResultsList>
        {rumors.claims.length
          ? rumors.claims.map((rumor) => (
              <ResultsList.Item key={rumors.claims.indexOf(rumor)}>
                <ResultsList.Item.Body data-url={rumor.claimReview[0].url}>
                  <h4>
                    {rumor.claimant ? `Claim by ${rumor.claimant}:` : "Claim:"}
                  </h4>
                  <p>{rumor.text}</p>
                  <p>
                    <strong>{`${rumor.claimReview[0].publisher.name}`}</strong>{" "}
                    rating:{" "}
                    <strong>{`${rumor.claimReview[0].textualRating}`}</strong>
                  </p>
                  <small>
                    <a href={rumor.claimReview[0].url}>
                      {rumor.claimReview[0].title}
                    </a>
                  </small>
                </ResultsList.Item.Body>
                <CopyButton onClick={handleCopy}>Copy Link</CopyButton>
              </ResultsList.Item>
            ))
          : null}
      </ResultsList>
    </Container>
  );
};
