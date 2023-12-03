import { StyledLogo } from '@/components/links/links.styled';

import {
  StyledFormSubmitButton,
  StyledMenuButton,
  StyledSliderLeftButton,
  StyledSliderRightButton,
} from './buttons.styled';

import Arrow from '~/svg/arrow-left-slider.svg';
import ArrowRight from '~/svg/arrow-right.svg';
import Menu from '~/svg/menu.svg';

export const MenuButton = () => {
  return (
    <StyledMenuButton type='button'>
      <Menu width={16} height={16} />
    </StyledMenuButton>
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
