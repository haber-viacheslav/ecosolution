import React, { ReactNode } from 'react';

import {
  StyledContainer,
  StyledFooterContainer,
} from '@/components/Container/Container.styled';
interface ContainerProps {
  children?: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
}: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export const FooterContainer: React.FC<ContainerProps> = ({
  children,
}: ContainerProps) => {
  return <StyledFooterContainer>{children}</StyledFooterContainer>;
};
