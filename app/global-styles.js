import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    overflow-y: scroll;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input, textarea {
    font-family: inherit;
    font-size: 16px;
    outline: none;
  }

  button {
    font-family: inherit;
    outline: none;
  }

  h1, h2, h3, h3, h5, h6 {
    font-weight: inherit;
  }
`;
