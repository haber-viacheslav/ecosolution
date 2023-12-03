import { oswald } from '@/lib/fonts';

import {
  MenuButton,
  SliderLeftButton,
  SliderRightButton,
} from '@/components/buttons/buttons';
import {
  ContactUs,
  GetInTouch,
  LearnMore,
  LinkToOut,
} from '@/components/links/links';
import { StyledMainSection } from '@/components/Main/Main.styled';
export const Main = () => {
  return (
    <StyledMainSection id='#main'>
      <h1 className={`${oswald.variable}`}>RENEWABLE ENERGY For any task</h1>
      <LearnMore />
      <GetInTouch />

      <LinkToOut />
      <MenuButton />
      <SliderLeftButton />
      <SliderRightButton />

      <ContactUs />
    </StyledMainSection>
  );
};
