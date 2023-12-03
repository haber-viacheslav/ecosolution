import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  height: 559px;
  flex-shrink: 0;
  background: ${(props) => props.theme.colors['slate-200']};

  @media screen and (${(props) => props.theme.media.md}) {
    width: 342px;
  }
  @media screen and (${(props) => props.theme.media.lg}) {
    width: 596px;
    height: 623px;
  }
`;

export const ContactFormStyled = styled(Form)`
  position: relative;
  height: 559px;
  padding: 36px 12px;
`;

export const FormInputWrp = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FormLabel = styled.span`
  color: ${(props) => props.theme.colors['dark-green']};
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  @media screen and (${(props) => props.theme.media.md}) {
  }
  @media screen and (${(props) => props.theme.media.lg}) {
  }
`;

export const Input = styled(Field)`
  border: none;
  padding: 8px 0;
  color: ${(props) => props.theme.colors['dark-green']};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid;
  border-color: ${(props) =>
    props.error ? props.theme.colors.peach : props.theme.colors['light-green']};
  cursor: pointer;
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.placeholderColor};
  }
`;

export const TextInput = styled(Input)`
  resize: none;
  height: 147px;
  border-bottom: 1px solid ${(props) => props.theme.colors['light-green']};
  margin-top: 8px;
`;

export const ErrMessage = styled.span`
  color: ${(props) => props.theme.colors.peach};
  align-self: flex-end;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  position: absolute;
  bottom: -24px;
  right: 0;
`;
