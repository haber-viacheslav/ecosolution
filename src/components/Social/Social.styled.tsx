import Link from 'next/link';
import styled from 'styled-components';
interface StyledSocialListProps {
  variant: 'wide' | 'narrow';
}
export const StyledSocialList = styled.ul<StyledSocialListProps>`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ variant }) =>
    variant === 'wide' &&
    `
   gap: 32px;
  `}

  ${({ variant }) =>
    variant === 'narrow' &&
    `
    gap: 8px;
  `}
`;
export const StyledSocialLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.colors['dark-green']};
`;
