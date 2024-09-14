import styled from "styled-components";

export const Card = styled.div`
  padding: 10px;
  width: calc(160px - 20px);
  height: calc(100px - 20px);

  border-radius: 20px;
  background-color: var(--__bg_card);
  border: 1px dashed var(--__bg_border);

  display: flex;

  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 16px;
    text-align: center;
  }

  &:hover {
    border-color: var(--__bg_hover_border);

    span {
      color: var(--__bg_hover_border);
    }
  }
`;