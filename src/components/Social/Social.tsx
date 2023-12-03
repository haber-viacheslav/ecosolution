import React from 'react';

import {
  StyledSocialLink,
  StyledSocialList,
} from '@/components/Social/Social.styled';

import Facebook from '~/svg/facebook.svg';
import Instagram from '~/svg/instagram.svg';

interface SocialProps {
  variant: 'wide' | 'narrow';
}
export const Social: React.FC<SocialProps> = ({ variant }: SocialProps) => {
  return (
    <StyledSocialList variant={variant}>
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
    </StyledSocialList>
  );
};
