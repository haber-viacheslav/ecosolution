import React from 'react';

import {
  StyledSocialLink,
  StyledWideList,
  StyledNarrowList,
} from '@/components/Social/Social.styled';

import Facebook from '~/svg/facebook.svg';
import Instagram from '~/svg/instagram.svg';

export const SocialWide = () => {
  return (
    <StyledWideList>
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
