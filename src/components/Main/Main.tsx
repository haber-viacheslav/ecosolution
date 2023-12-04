import { Background } from '@/components/Background/Background';
import { Container } from '@/components/Container/Container';
import { LearnMore } from '@/components/links/links';
import {
  MainContactItem,
  MainContactList,
  MainStyledCopyRight,
  StyledAddress,
  StyledMainDescription,
  StyledMainSection,
  StyledMainTitle,
  StyledMainWrap,
  StyledTopWrap,
} from '@/components/Main/Main.styled';
import { copyrightSymbol } from '@/constant/constant';
import { year } from '@/helpers/getYear';
export const Main = () => {
  return (
    <StyledMainSection id='main'>
      <Container>
        <StyledTopWrap>
          <StyledMainTitle>RENEWABLE ENERGY For any task</StyledMainTitle>
          <StyledMainWrap>
            <StyledMainDescription>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </StyledMainDescription>
            <LearnMore />
          </StyledMainWrap>
        </StyledTopWrap>
        <StyledAddress>
          <MainContactList>
            <li>
              <MainContactItem
                href='https://maps.app.goo.gl/VetCRL1nfsCvXd8i7'
                target='_blank'
                rel='noopener nofollow noreferrer'
              >
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </MainContactItem>
            </li>
            <li>
              <MainContactItem href='mailto:office@ecosolution.com'>
                office@ecosolution.com
              </MainContactItem>
            </li>
          </MainContactList>
          <MainStyledCopyRight>
            ecosolution {copyrightSymbol} {year}
          </MainStyledCopyRight>
        </StyledAddress>
        <Background />
      </Container>
    </StyledMainSection>
  );
};
