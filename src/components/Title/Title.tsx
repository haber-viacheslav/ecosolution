import React, { JSX } from 'react';

import { StyledTitle } from '@/components/Title/Title.styled';

interface TitleProps {
  children: string;
}
export const Title: React.FC<TitleProps> = ({
  children,
}: TitleProps): JSX.Element => {
  return <StyledTitle>{children}</StyledTitle>;
};
