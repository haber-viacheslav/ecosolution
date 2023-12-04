import styled from 'styled-components';

export const StyledImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  @media screen and (${(props) => props.theme.media.md}) {
    height: 400px;
  }
`;
