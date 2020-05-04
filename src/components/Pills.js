import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PillsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Pill = styled.div`
  background: #4b3f6b;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin: 0 0.25rem 0.5rem 0.25rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
`;

export default ({ setQuery }) => {
  const searches = useSelector((state) => state);
  const recentSearches = searches.slice(-8);
  const handleSetQuery = (e) => {
    setQuery(
      e.target.innerHTML.charAt(0).toUpperCase() + e.target.innerHTML.slice(1)
    );
  };
  return (
    <PillsList>
      {recentSearches
        ? recentSearches.map((search) => (
            <Pill key={search.id} onClick={handleSetQuery}>
              {search.query}
            </Pill>
          ))
        : null}
    </PillsList>
  );
};
