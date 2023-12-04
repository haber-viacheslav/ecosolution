import React from 'react';

import { StyledLogo } from '@/components/links/links.styled';

import {
  StyledCloseButton,
  StyledFormSubmitButton,
  StyledMenuButton,
  StyledSliderLeftButton,
  StyledSliderRightButton,
} from './buttons.styled';

import Arrow from '~/svg/arrow-left-slider.svg';
import ArrowRight from '~/svg/arrow-right.svg';
import Close from '~/svg/close.svg';
import Menu from '~/svg/menu.svg';

interface MenuButtonProps {
  onClick: () => void;
}
export const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <StyledMenuButton onClick={onClick} type='button'>
      <Menu width={16} height={16} />
    </StyledMenuButton>
  );
};

export const CloseButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <StyledCloseButton onClick={onClick} type='button'>
      <Close width={10} height={10} />
      close
    </StyledCloseButton>
  );
};

export const SliderLeftButton = () => {
  return (
    <StyledSliderLeftButton type='button'>
      <Arrow width={36} height={36} />
    </StyledSliderLeftButton>
  );
};

export const SliderRightButton = () => {
  return (
    <StyledSliderRightButton type='button'>
      <Arrow width={36} height={36} />
    </StyledSliderRightButton>
  );
};

export const FormSubmitButton = () => {
  return (
    <StyledFormSubmitButton type='submit'>
      Send
      <StyledLogo>
        <ArrowRight width={16} height={16} />
      </StyledLogo>
    </StyledFormSubmitButton>
  );
};
