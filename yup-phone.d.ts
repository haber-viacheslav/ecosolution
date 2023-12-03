declare module 'yup-phone' {
  import { StringSchema } from 'yup';

  interface PhoneOptions {
    defaultCountry?: string;
    strict?: boolean;
    parseOnHover?: boolean;
  }

  interface StringSchema {
    phone(message?: string, options?: PhoneOptions): StringSchema;
  }
}
