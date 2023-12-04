import styled from 'styled-components';

export const AboutSection = styled.section`
  padding-top: 36px;
`;

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media screen and (${(props) => props.theme.media.md}) {
    flex-direction: row;
    gap: 94px;
    padding: 100px 0;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    align-items: flex-start;
    justify-content: space-between;
    padding: 100px 0;
  }
`;
export const AboutTitle = styled.h2`
  color: ${(props) => props.theme.colors['dark-green']};
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  text-align: left;
  margin: 0;
  width: 320px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 252px;
    font-size: 36px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 365px;
    font-size: 48px;
  }
`;
export const AboutHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 33px;
  @media screen and (${(props) => props.theme.media.md}) {
    gap: 8px;
  }
`;
export const AboutHeaderTitle = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;
  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 32px;
  }
`;

export const AboutDescription = styled.p`
  position: relative;
  color: ${(props) => props.theme.colors['dark-green']};
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-bottom: 36px;
  @media screen and (${(props) => props.theme.media.md}) {
    width: 346px;
    &::before {
      display: block;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: -11px;
      transform: translateY(-50%);
      content: '';
      width: 1px;
      height: 110px;
      background-color: ${(props) => props.theme.colors['light-green']};

      @media screen and (${(props) => props.theme.media.lg}) {
        height: 87px;
        left: -161px;
      }
    }
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 460px;
  }
`;

export const AboutDescr = styled.p`
  color: ${(props) => props.theme.colors['dark-green']};
  padding-top: 12px;
  border-top: 1px solid ${(props) => props.theme.colors['light-green']};
  text-align: justify;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 16px;
  }
`;

export const AboutList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  @media screen and (${(props) => props.theme.media.md}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    grid-column-gap: 44;
    grid-row-gap: 44;
  }
`;

export const AboutItem = styled.li`
  position: relative;
  flex-basis: calc((100% - (2 - 1) * 24px) / 2);
  height: 197px;
  background-color: ${(props) => props.theme.colors['slate-200']};
  padding: 12px;
  padding-top: 13px;
  @media screen and (${(props) => props.theme.media.md}) {
    &:nth-child(3) {
      padding: 0;
      grid-column: span 2;
    }
    &:nth-child(4) {
      padding: 0;
      grid-column: span 2;
    }
  }

  @media screen and (${(props) => props.theme.media.lg}) {
    width: 100%;
    height: 339px;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;
