import React from 'react';

import {
  StyledLink,
  StyledList,
  StyledNarrowList,
  StyledSocialLink,
  StyledWideList,
} from '@/components/Social/Social.styled';

import FacebookW from '~/svg/face-white.svg';
import Facebook from '~/svg/facebook.svg';
import InstagramW from '~/svg/insta-white.svg';
import Instagram from '~/svg/instagram.svg';

export const SocialWide = () => {
  return (
    <StyledWideList>
      <li>
        <StyledLink
          href='https://www.facebook.com/'
          target='_blank'
          rel='noopener nofollow noreferrer'
        >
          <Facebook width={24} height={24} />
        </StyledLink>
      </li>
      <li>
        <StyledSocialLink
          href='https://www.instagram.com/'
          target='_blank'
          rel='noopener nofollow noreferrer'
        >
          <Instagram width={24} height={24} />
        </StyledSocialLink>
      </li>
    </StyledWideList>
  );
};

export const SocialNarrow = () => {
  return (
    <StyledNarrowList>
      <li>
        <StyledSocialLink
          href='https://www.facebook.com/'
          target='_blank'
          rel='noopener nofollow noreferrer'
        >
          <Facebook width={24} height={24} />
        </StyledSocialLink>
      </li>
      <li>
        <StyledSocialLink
          href='https://www.instagram.com/'
          target='_blank'
          rel='noopener nofollow noreferrer'
        >
          <Instagram width={24} height={24} />
        </StyledSocialLink>
      </li>
    </StyledNarrowList>
  );
};

export const SocialBurger = () => {
  return (
    <StyledList>
      <li>
        <StyledLink
          href='https://www.facebook.com/'
          target='_blank'
          rel='noopener nofollow noreferrer'
        >
          <FacebookW width={24} height={24} />
        </StyledLink>
      </li>
      <li>
        <StyledLink
          href='https://www.instagram.com/'
          target='_blank'
          rel='noopener nofollow noreferrer'
        >
          <InstagramW width={24} height={24} />
        </StyledLink>
      </li>
    </StyledList>
  );
};
