import Link from 'next/link';
import styled from 'styled-components';
export const StyledSection = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  padding: 36px 0;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
  @media screen and (${(props) => props.theme.media.md}) {
    flex-direction: row;
  }

  @media screen and (${(props) => props.theme.media.lg}) {
    gap: 48px;
    flex-direction: row;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
  width: 280px;

  @media screen and (${(props) => props.theme.media.mToMd}) {
    width: 244px;
  }

  @media screen and (${(props) => props.theme.media.lg}) {
    width: 466px;
  }
`;

export const ContactInfo = styled.li`
  &:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ContactText = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  max-width: 218px;
  color: ${(props) => props.theme.colors['dark-green']};
`;
export const ContactCategory = styled.p`
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors['dark-green']};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const StyledTitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors['dark-green']};
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 24px;
  @media screen and (${(props) => props.theme.media.md}) {
    font-size: 36px;
    margin-bottom: 40px;
  }

  @media screen and (${(props) => props.theme.media.lg}) {
    font-size: 48px;
    margin-bottom: 120px;
  }
`;

export const StyledSocial = styled(ContactCategory)`
  margin-bottom: 20px;
`;

export const StyledPhoneList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
export const StyledPhoneItem = styled.li``;
export const ContactItem = styled(Link)`
  color: ${(props) => props.theme.colors['dark-green']};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease-in;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors['light-green']};
    & > svg {
      stroke: ${(props) => props.theme.colors.currentColor};
    }
  }
`;
