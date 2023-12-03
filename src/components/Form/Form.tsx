import { ErrorMessage, Formik } from 'formik';
import React from 'react';

import { FormSubmitButton } from '@/components/buttons/buttons';
import {
  Box,
  ContactFormStyled,
  ErrMessage,
  FormInputWrp,
  FormLabel,
  Input,
  TextInput,
  Wrapper,
} from '@/components/Form/Form.styled';
import { yupValidation } from '@/helpers/validation';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export const Form: React.FC = () => {
  // const handleSubmit = (values: typeof initialValues, { resetForm }) => {
  //   console.log(values);
  //   resetForm();
  // };

  const handleSubmit = () => {
    `jj`;
  };

  return (
    <>
      <Wrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={yupValidation}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <ContactFormStyled autoComplete='off'>
              <Box>
                <FormInputWrp>
                  <FormLabel>* Full name:</FormLabel>
                  <Input
                    type='text'
                    name='name'
                    placeholder='John Rosie'
                    valid={touched.name && !errors.name ? 'true' : undefined}
                    error={touched.name && errors.name}
                  />
                  <ErrorMessage
                    name='name'
                    render={(msg) => <ErrMessage>{msg}</ErrMessage>}
                  />
                </FormInputWrp>

                <FormInputWrp>
                  <FormLabel>* E-mail:</FormLabel>

                  <Input
                    type='text'
                    name='email'
                    placeholder='johnrosie@gmail.com'
                    valid={touched.email && !errors.email ? 'true' : undefined}
                    error={touched.email && errors.email}
                  />
                  <ErrorMessage
                    name='email'
                    render={(msg) => <ErrMessage>{msg}</ErrMessage>}
                  />
                </FormInputWrp>

                <FormInputWrp>
                  <FormLabel>* Phone:</FormLabel>

                  <Input
                    type='text'
                    name='phone'
                    placeholder='380961234567'
                    valid={touched.phone && !errors.phone ? 'true' : undefined}
                    error={touched.phone && errors.phone}
                  />

                  <ErrorMessage
                    name='phone'
                    render={(msg) => <ErrMessage>{msg}</ErrMessage>}
                  />
                </FormInputWrp>

                <FormInputWrp>
                  <FormLabel> Message:</FormLabel>

                  <TextInput
                    as='textarea'
                    type='text'
                    name='message'
                    placeholder='My message....'
                  />
                </FormInputWrp>
              </Box>
              <FormSubmitButton />
            </ContactFormStyled>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};
