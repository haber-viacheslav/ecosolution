import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${(props) => props.color};
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  padding: 36px 0;
  transition: background-color 0.3s ease-in;
`;

export const StyledHeaderWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;
