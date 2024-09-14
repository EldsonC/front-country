import styled from "styled-components";

export const Countries = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .banner {
    width: 100%;

    img {
      width: 100%;
      height: 300px;
  
      object-fit: cover;
    }
  }

  .search {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    position: sticky;
    top: 0px;

    background-color: var(--__bg_color);
    box-shadow: 0px 10px 46px #00000013;
  }

  section {
    margin-bottom: 50px;
    padding: 0 10px;
    margin-top: 50px;
    width: calc(100% - 20px);

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;