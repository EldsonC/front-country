import styled from "styled-components";

export const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .card_details {
    padding: 30px;
    width: calc(700px);
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--__card__data);
    border-radius: 20px;

    .flag {
      margin-bottom: 20px;
      width: 400px;
      height: 300px;
      max-width: 100%;
  
      img {
        width: 100%;
        height: 100%;
  
        object-fit: cover;
      }
    }

    .chart {
      margin-top: 20px;
      width: 100%;
      height: 400px;
    }
  }
`;