import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
     &, &.light-mode {
        --color-text: #232429;
        --color-background: #f7f8fc;
        --color-primary: #475ad4;
        --color-secondary: #6e7eec;
        --color-accent: #808fef;
        --color-border: rgba(0, 0, 0, 0.1);

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
        --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

        --backdrop-color: rgba(255, 255, 255, 0.1);

        --image-grayscale: 0;
        --image-opacity: 100%;
    }

    &.dark-mode {
        --color-text: #d6d7dc;
        --color-background: #030407;
        --color-primary: #2c3fba;
        --color-secondary: #132490;
        --color-accent: #101f7f;
        --color-border: rgba(255, 255, 255, 0.3);

        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
        --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
        --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

        --backdrop-color: rgba(0, 0, 0, 0.3);

        --image-grayscale: 10%;
        --image-opacity: 90%;
    }

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    /* GRADIENTS */ 
    --linearPrimarySecondary: linear-gradient(#475ad4, #6e7eec);
    --linearPrimaryAccent: linear-gradient(#475ad4, #808fef);
    --linearSecondaryAccent: linear-gradient(#6e7eec, #808fef);
    --radialPrimarySecondary: radial-gradient(#475ad4, #6e7eec);
    --radialPrimaryAccent: radial-gradient(#475ad4, #808fef);
    --radialSecondaryAccent: radial-gradient(#6e7eec, #808fef);

    /* Belki kullanırız */
    /*
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81; 
    */
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: all 0.3s;
}

body {
    font-family: 'Kanit', sans-serif;
    font-weight: 400;
    font-size: 62.5%;
    transition: all 0.3s ;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Poppins';
    font-weight: 700;
    overflow-wrap: break-word;
    hyphens: auto;

}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;
