import Image from 'next/image';

import { StyledImageWrap } from './Background.styled';
import main from '../../../public/images/bg/bg-lg@2x.jpg';

export const Background = () => {
  return (
    <StyledImageWrap>
      <Image
        alt='wind-turbine-clean-energy'
        src={main}
        placeholder='blur'
        quality={80}
        sizes='100vw'
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </StyledImageWrap>
  );
};
