import styled, { css } from "styled-components";

// 25006 - styled components props and css function
/*
const test = css`
  text-align: center;
`;
*/

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 1rem;
      font-weight: 500;
    `}

  line-height: 1.4;
`;

export default Heading;
