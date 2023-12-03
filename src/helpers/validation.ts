import * as yup from 'yup';
const nameRegExp = /^(([A-Za-z]+?)*([A-Za-z]+)?\s)+([A-Za-z]+?)*([A-Za-z]+)?$/;
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const yupValidation = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegExp, 'Wrong Fullname')
    .required('Name is required'),
  email: yup
    .string()
    .matches(emailRegExp, 'Wrong Email')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Wrong Phone')
    .min(12, 'Wrong Phone')
    .max(12, 'Wrong Phone')
    .required('Phone is required'),
});
