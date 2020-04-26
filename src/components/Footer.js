import React from "react";
import styled from "styled-components";
import boostMobile from "../images/bg-boost-desktop.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";

const Footer = styled.footer``;

Footer.Upper = styled.div`
  background-image: ${() => `url(${boostMobile})`};
  background-color: ${({ theme }) => theme.darkViolet};
  background-size: cover;
`;

Footer.CTA = styled.div`
  color: white;
  text-align: center;
  padding: 4rem 0;
  h2 {
    margin-bottom: 1rem;
  }
`;

Footer.Lower = styled.div`
  background: ${({ theme }) => theme.veryDarkViolet};
  display: grid;
  padding: 3rem;
  color: white;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-items: center;
  text-align: center;
  h3 {
    font-size: 2.5rem;
    line-height: 1;
  }
  h4 {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: none;
    li {
      color: ${({ theme }) => theme.grayishViolet};
      margin-bottom: 0.5rem;
    }
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.cyan};
  }
  p {
    color: ${({ theme }) => theme.grayishViolet};
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    text-align: left;
    padding: 5rem;
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

Footer.Social = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin: 0 0.5rem;
  }
`;

export default () => {
  return (
    <Footer>
      <Footer.Upper>
        <Footer.CTA>
          <h2>Share this with your friends</h2>
          <Button href="https://www.facebook.com/sharer/sharer.php?u=https://hogwash.netlify.app/">
            Post on Facebook
          </Button>
        </Footer.CTA>
      </Footer.Upper>
      <Footer.Lower>
        <h3>Hogwash</h3>
        <div>
          <h4>Features</h4>
          <ul>
            <li>Family Agnostic</li>
            <li>International Reach</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div>
          <h4>
            Built by{" "}
            <a
              href="http://www.tekjoe.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              tekjoe
            </a>
          </h4>
          <p>
            I'm always looking for my next project. If you want to build
            something together, connect with me on social media.
          </p>
        </div>
        <div>
          <Footer.Social>
            <li>
              <a
                href="https://facebook.com/tekjoe.dev"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={facebook} alt="pinterest Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/_tekjoe"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={twitter} alt="pinterest Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/chiefdizzywolf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={instagram} alt="pinterest Icon" />
              </a>
            </li>
          </Footer.Social>
        </div>
      </Footer.Lower>
    </Footer>
  );
};
