import { Global, css } from "@emotion/react";
import reset from "emotion-reset";

const styles = css`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  input,
  textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
  body {
    -ms-overflow-style: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const GlobalStyle = () => {
  return (
    <>
      <Global styles={styles} />
    </>
  );
};
