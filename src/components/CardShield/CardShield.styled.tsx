import styled from 'styled-components';
export const StyledCardShield = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors['light-green']};
  color: ${(props) => props.theme.colors['dark-green']};
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
`;
