import styled from "styled-components";
import { WINDOW_SIZE_DESKTOP } from "../../utils";

export const Wrapper = styled.div`
  width: 90%;
  min-height: 82px;
  position: relative;
  box-shadow: 0 2px 5px 2px var(--shadow-black);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 22px 18px 8px;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 12px;

  figure {
    width: 49px;
    height: 49px;
    border-radius: 50%;
  }

  .ratingStarFlag {
    position: absolute;
    top: 2px;
    right: 4%;
    margin: 0;
  }

  .feedback {
    width: 70%;
    h2,
    h3 {
      font-family: var(--nunito);
      margin: 0;
      font-weight: 700;
    }
    h2 {
      font-size: 14px;
      margin-bottom: 6px;
    }
    h3 {
      font-style: italic;
      font-size: 12px;
    }
  }

  @media only screen and (min-width: ${`${WINDOW_SIZE_DESKTOP}px`}) {
    width: 786px;
    min-height: 177px;
    padding: 32px 32px 16px;
    gap: 36px;

    figure {
      width: 114px;
      height: 118px;
      border-radius: 10%;
    }
    .ratingStarFlag {
      top: 30px;
      right: 30px;
    }

    .feedback {
      h2 {
        font-size: 24px;
        margin-bottom: 12px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
`;
