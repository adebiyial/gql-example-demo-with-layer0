import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    word-wrap: break-word;
  }

  body {
	  scroll-behavior: smooth;
	  line-height: 1.5;
	  text-rendering: optimizeSpeed;
  }

  html,
	body {
	  font-family: "Sora", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
		  Helvetica Neue, Ubuntu, sans-serif;
	  -webkit-font-smoothing: antialiased;
  }

  body,
	h1,
	h2,
	h3,
	h4,
	p,
	ul,
	ol,
	li,
	figure,
	figcaption,
	blockquote,
	dl,
	dd,
	dt,
	blockquote,
	button,
	div,
	fieldset,
	form,
	input,
	legend,
	textarea,
	td,
	th {
	  margin: 0;
	  outline: 0;
	  padding: 0;
  }

  button,
	input {
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }

  input,
	button,
	textarea,
	select {
	  font: inherit;
  }

  ul[role = 'list'],
	ol[role = 'list'] {
	  list-style: none;
  }

  img,
	picture {
	max-width: 100%;
	display: block;
  }

  a {
	  color: inherit;
	  font-weight: inherit;
	  text-decoration: none;
  }

  a:not([class]) {
	  text-decoration-skip-ink: auto;
  }

  @media(prefers-reduced-motion: reduce) {
	  html: focus-within {
		  scroll-behavior: auto;
	}

  * {
		animation-duration: 0.01ms!important;
	  animation-iteration-count: 1!important;
	  transition-duration: 0.01ms!important;
	  scroll-behavior: auto!important;
  }

}`;

export default GlobalStyle;
