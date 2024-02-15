import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CardShield } from '@/components/CardShield/CardShield';
import {
  StyledCardDescription,
  StyledCardFooter,
  StyledCardHeader,
  StyledCardTitle,
  StyledContentContainer,
  StyledImage,
  StyledCardLink,
} from '@/components/Slider/Slider.styled';

import winds from '../../../public/images/wind.jpg';
export const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <ul>
          <li>
            <SwiperSlide>
              <StyledCardLink href='#'>
                <StyledImage>
                  <Image
                    src={winds}
                    alt='Wind Station'
                    quality={100}
                    sizes='100%'
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </StyledImage>

                <StyledContentContainer>
                  <StyledCardHeader>
                    <StyledCardTitle>
                      Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI
                      BUH”
                    </StyledCardTitle>
                    <CardShield />
                  </StyledCardHeader>
                  <StyledCardFooter>
                    <StyledCardDescription>
                      Wind Power for auto field irrigation
                    </StyledCardDescription>
                    <StyledCardDescription>July 2023</StyledCardDescription>
                  </StyledCardFooter>
                </StyledContentContainer>
              </StyledCardLink>
            </SwiperSlide>
          </li>
        </ul>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
};
