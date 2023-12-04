import styled from 'styled-components';

export const StyledMenuButton = styled.button`
  position: relative;
  margin-left: auto;
  color: ${(props) => props.theme.colors['dark-grey']};
  border: none;
  border-radius: 100%;
  z-index: 10;
  display: inline-flex;
  height: 39px;
  width: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors['neutral-grey']};
  transition: background-color 0.3s ease-in;
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors['light-green']};
    cursor: pointer;
  }
  svg {
    fill: currentColor;
    stroke: currentColor;
  }
`;

export const StyledSliderLeftButton = styled.button`
  background-color: ${(props) => props.theme.colors.transparent};
  display: inline-flex;
  padding: 15px;
  align-items: flex-start;
  width: 66px;
  height: 66px;
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.colors['dark-green']};
  color: ${(props) => props.theme.colors['dark-green']};
  transition: border-color 0.3s ease-in, color 0.3s ease-in;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors['light-green']};
    border-color: ${(props) => props.theme.colors['light-green']};
    cursor: pointer;
  }
  svg {
    stroke: currentColor;
  }
`;
export const StyledSliderRightButton = styled(StyledSliderLeftButton)`
  transform: rotate(180deg);
`;

export const StyledFormSubmitButton = styled.button`
  position: absolute;
  bottom: 36px;
  right: 12px;
  color: #173d33;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125;
  letter-spacing: -0.64px;
  display: inline-flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 500px;
  background-color: ${(props) => props.theme.colors.transparent};
  border: 1px solid ${(props) => props.theme.colors['light-green']};
  color: ${(props) => props.theme.colors['dark-green']};
  transition: color 0.3s ease-in, background-color 0.3s ease-in;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors['light-green']};
    background-color: ${(props) => props.theme.colors['dark-green']};
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 24px;
  left: 19px;
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  display: inline-flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  z-index: 200;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.colors.transparent};
  transition: color 0.3s ease-in;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors['light-green']};
    cursor: pointer;
  }
`;
