import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;

    border: none;
    outline: none;
    text-decoration: none;
    list-style: none;
  }
  :root {
    --__bg_color: #FFFFFF;
    --__bg_search: #F0F0F2;
    --__bg_button_search: #B605E0;
    --__text_black: #201D37;
    --__bg_card: #FFFFFF;
    --__bg_border: #D8D8D8;
    --__bg_hover_border: #B605E0;
    --__card__data: #F9F8FE;

  }
  body {
    height: 100vh;
    background: var(--__bg_color);
    font-family: "Poppins", sans-serif;
  }
`;