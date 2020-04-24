import React from "react";
import styled from "styled-components";
import worker from "../images/illustration-working.svg";
import Container from "./Container";

const Masthead = styled.section``;

Masthead.Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    margin-bottom: 6rem;
  }
`;

Masthead.Image = styled.div`
  background: ${() => `url(${worker})`};
  background-position: 60px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  @media (min-width: 768px) {
    flex: 1;
    height: 500px;
    background-size: contain;
    background-position: center;
  }
`;

Masthead.CTA = styled.div`
  text-align: center;
  flex: 1;
  padding: 2rem;
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.veryDarkViolet};
  }
  p {
    color: ${({ theme }) => theme.grayishViolet};
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    text-align: left;
    margin: auto;
    h2 {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    p {
      padding-right: 6rem;
    }
  }
`;

const Button = styled.a`
  background: ${({ theme }) => theme.cyan};
  display: inline-block;
  color: #fafafa;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 1rem 3rem;
  border-radius: 2rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.lighterCyan};
  }
`;

export default () => {
  return (
    <Masthead>
      <Container>
        <Masthead.Content>
          <Masthead.Image />
          <Masthead.CTA>
            <h2>Getting dumber, together.</h2>
            <p>
              In a post-truth world, misinformation reigns supreme. Prove your
              loved ones wrong by debunking the most common rumors circulating
              the interwebs.
            </p>
            <Button href="#debunker">Get Started</Button>
          </Masthead.CTA>
        </Masthead.Content>
      </Container>
    </Masthead>
  );
};
