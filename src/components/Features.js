import React from "react";
import styled from "styled-components";
import Container from "./Container";
import FactChecker from "./FactChecker";
import brandRecognition from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";

const Features = styled.section`
  background: ${({ theme }) => theme.lightGrayishViolet};
  padding: 5rem 1.5rem;
`;

Features.Benefit = styled.div`
  text-align: center;
  padding: 4rem 1rem 5rem 1rem;
  max-width: 550px;
  margin: -10rem auto auto auto;
  h2 {
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.veryDarkViolet};
    font-size: 2rem;
  }
  p {
    color: ${({ theme }) => theme.grayishViolet};
  }
`;

Features.FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

Features.Feature = styled.div`
  background: white;
  text-align: center;
  display: flex;
  border-radius: 0.5rem;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h3 {
    margin-bottom: 1rem;
  }
  p {
    color: ${({ theme }) => theme.grayishViolet};
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    width: auto;
    text-align: left;
    align-items: flex-start;
    &:nth-child(3) {
      margin-top: 2rem;
    }
    &:nth-child(5) {
      margin-top: 4rem;
    }
  }
`;

Features.Divider = styled.span`
  width: 0.5rem;
  height: 6rem;
  display: block;
  background: ${({ theme }) => theme.cyan};
  @media (min-width: 768px) {
    height: 0.5rem;
    width: 6rem;
    align-self: center;
  }
`;

const IconContainer = styled.div`
  background: ${({ theme }) => theme.darkViolet};
  padding: 1.25rem;
  border-radius: 100%;
  margin-bottom: 2rem;
  margin-top: -4.5rem;
  display: flex;
  img {
    display: block;
  }
`;

export default () => {
  return (
    <Features id="memetics">
      <Container>
        <FactChecker />
        <Features.Benefit>
          <h2>Advanced Memetics</h2>
          <p>
            Leverage Google's Fact Check Tools to debunk the rumors that your
            parents & grandparents forward to you.
          </p>
        </Features.Benefit>
        <Features.FeatureList>
          <Features.Feature>
            <IconContainer>
              <img src={brandRecognition} alt="Brand Recoginition Icon" />
            </IconContainer>
            <h3>Family Agnostic</h3>
            <p>
              Misinformation doesn't discriminate and neither do we. Let your
              sweet little grandma know that she's wrong with our easy to use
              UI.
            </p>
          </Features.Feature>
          <Features.Divider />
          <Features.Feature>
            <IconContainer>
              <img src={detailedRecords} alt="Detailed records Icon" />
            </IconContainer>
            <h3>International Reach</h3>
            <p>
              Stupidity doesn't care about borders. Google's Fact Check API
              scours the internet for misinformation around the world so you
              don't have to. Stay ahead of the curve.
            </p>
          </Features.Feature>
          <Features.Divider />
          <Features.Feature>
            <IconContainer>
              <img src={fullyCustomizable} alt="Fully Customizable Icon" />
            </IconContainer>
            <h3>Lorem Ipsum</h3>
            <p>
              Humans tend to like things that come in threes, so I added this
              element to keep you happy. Don't message me about the placeholder
              text.
            </p>
          </Features.Feature>
        </Features.FeatureList>
      </Container>
    </Features>
  );
};
