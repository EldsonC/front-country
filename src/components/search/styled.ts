import styled from "styled-components";

export const Search = styled.div`
  padding: 0px 10px;
  width: calc(550px - 20px);
  max-width: 90%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  
  background-color: var(--__bg_search);
  border-radius: 50px;

  button {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 40px;
    background-color: var(--__bg_button_search);
    cursor: pointer;
  } 

  input {
    display: flex;
    flex: 1;
    height: 100%;
    background-color: transparent;
    
    font-size: 16px;
    color: var(--__text_black);

    &::placeholder {
      font-size: 16px;
    }
  }

`;