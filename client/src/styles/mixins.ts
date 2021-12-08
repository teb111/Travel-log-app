import { css } from "styled-components";

export const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexStart: css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  `,

  spaceBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: space-between;
  `,
  padX: css`
    padding: 0 3%;
  `,
  gridCenter: css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 5px;
  `,
};
