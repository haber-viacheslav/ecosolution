import Link from 'next/link';
import styled from 'styled-components';

export const StyledWideList = styled.ul`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
export const StyledNarrowList = styled.ul`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const StyledList = styled.ul`
  position: absolute;
  bottom: 24px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const StyledSocialLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.colors['dark-green']};
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.colors.white};
  & > svg {
    stroke: ${(props) => props.theme.colors.white};
  }
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors['light-green']};
  }
`;
