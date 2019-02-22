import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { Layout, Outlink, SEO } from "../components/";

import portraitSrc from "../images/portrait.png";

const Wrapper = styled(`div`)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 8rem auto 0 auto;

  @media (max-width: 800px) {
    flex-direction: column;
    height: unset;
    margin: 2rem auto;
  }
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const ImageSection = styled(`section`)`
  flex: 1;
  padding: 0 2rem 0 2rem;
  position: relative;

  @media (max-width: 800px) {
    padding: 2rem 1rem;
    width: 100%;
  }
`;

const InfoSection = styled(`section`)`
  box-sizing: border-box;
  flex: 2;
  padding: 0 2rem 0 2rem;

  @media (max-width: 800px) {
    padding: 2rem 2rem;
    width: 100%;
  }
`;

const Header = styled(`h1`)`
  animation: ${bounce} 1s ease;
  animation-delay: 500ms;
`;

const Portrait = styled(`img`)`
  display: block;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 800px) {
    width: 60%;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Amberley" keywords={[`gatsby`, `react`, `accessibility`]} />
    <Wrapper>
      <ImageSection>
        <Portrait
          alt="Me (Amberley) smiling, wearing sunglasses"
          src={portraitSrc}
        />
      </ImageSection>
      <InfoSection>
        <p>Hi, there.</p>
        <Header>
          <Outlink href="https://twitter.com/amber1ey">I'm Amberley.</Outlink>
        </Header>
        <p>
          Front-end engineer, accessibility advocate, and unrepentent
          generalist. Currently @{" "}
          <Outlink href="https://www.gatsbyjs.org/">Gatsby</Outlink>.
        </p>
        <p>Dog mom. Yarn nerd. Clear eyes, full heart.</p>
        <p>
          <Outlink title="Blog" href="https://amberley.blog/">
            dot blog
          </Outlink>
          .
        </p>
      </InfoSection>
    </Wrapper>
  </Layout>
);

export default IndexPage;
