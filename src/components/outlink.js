import styled from "@emotion/styled";

const Outlink = styled(`a`)`
  color: #000;
  text-decoration: none;
  background-image: linear-gradient(120deg, #feda6a 0%, #fee76a 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: all 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
    color: #1d1e22;
  }
`;

export default Outlink;
