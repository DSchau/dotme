import React from "react";
import PropTypes from "prop-types";
import "../styles/reset.css";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import { globalStyles } from "../styles/global";
import { Outlink } from "./";
import Emoji from "a11y-react-emoji";

const Wrapper = styled(`div`)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Footer = styled(`footer`)`
  margin: 0 auto 1rem auto;
  text-align: center;
`;

const Layout = ({ children }) => (
  <Wrapper>
    <Global styles={globalStyles} />
    <main>{children}</main>
    <Footer>
      © {new Date().getFullYear()}, Built with{` `}
      <Emoji symbol="💜" label="love" />
      {` & `}
      <Outlink href="https://www.gatsbyjs.org">Gatsby</Outlink>
      {` `}
      by Amberley Romo
    </Footer>
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
