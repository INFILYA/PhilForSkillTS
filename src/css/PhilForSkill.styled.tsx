import styled from "styled-components";

interface ISliderWrapProps {
  transform: number;
}

export const SliderWrap = styled.div<ISliderWrapProps>`
  display: flex;
  width: 100vw;
  transition-duration: 1700ms;
  transition-timing-function: ease-in-out;
  transform: translateX(${(props) => props.transform + "px"});
`;
export const Section = styled.section`
  display: flex;
  position: relative;
  box-sizing: border-box;
  z-index: 0;
  min-width: 325px;
`;

export const SectionBorder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const SectionBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  padding: 3vmax;
  z-index: 4;
  width: 100%;
  box-sizing: content-box;
  margin: 0 auto;
  display: flex;
`;
export const Content = styled.div`
  width: 100%;
`;
