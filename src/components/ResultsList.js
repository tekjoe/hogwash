import React, { useEffect } from "react";
import styled from "styled-components";

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
    padding: 0 1rem;
  }
`;

ResultsList.Item.Url = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  @media (min-width: 768px) {
    border-bottom: none;
    flex: 4;
  }
`;

ResultsList.Item.ShortenedUrl = styled.div`
  padding: 0.5rem 1rem;
  a {
    color: ${({ theme }) => theme.cyan};
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
  margin: 0 1rem 1rem 1rem;
  padding: 0.5rem 1rem;
  text-align: center;
  &:hover {
    background: ${({ theme }) => theme.lighterCyan};
  }
  @media (min-width: 768px) {
    margin: 1rem;
    padding: 0.5rem 3rem;
  }
`;

export default ({ shortenedUrls, saveToLocalStorage, handleCopy }) => {
  useEffect(() => {
    saveToLocalStorage();
  }, []);
  return (
    <ResultsList>
      {shortenedUrls.length
        ? shortenedUrls.map(shortened => (
            <ResultsList.Item key={shortenedUrls.indexOf(shortened)}>
              <ResultsList.Item.Url>
                <p>{shortened.url}</p>
              </ResultsList.Item.Url>
              <ResultsList.Item.ShortenedUrl>
                <a
                  href={shortened.shortenedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {shortened.shortenedUrl}
                </a>
              </ResultsList.Item.ShortenedUrl>
              <CopyButton onClick={handleCopy}>Copy</CopyButton>
            </ResultsList.Item>
          ))
        : null}
    </ResultsList>
  );
};
