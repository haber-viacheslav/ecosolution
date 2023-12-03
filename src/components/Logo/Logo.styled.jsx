import Link from 'next/link';
import styled from 'styled-components';

import Log from '~/svg/Logo.svg';
export const StyledLogo = styled(Log)`
  width: 269px;
  height: 40px;
  fill: ${(props) => props.theme.colors.currentColor};
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  border: none;
  color: ${(props) => props.theme.colors['dark-green']};
  transition: color 0.3s ease-in;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors['light-green']};
  }
`;
