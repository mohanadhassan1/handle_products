import { ILoginInput, IRegisterInput } from "../interfaces";

export const REGISTER_FORM: IRegisterInput[] = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    validation: {
      required: true,
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
  },
  {
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    validation: {
      required: true,
      minLength: 8,
    },
  },
];

export const LOGIN_FORM: ILoginInput[] = [
  {
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    validation: {
      required: true,
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
  },
  {
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    validation: {
      required: true,
      minLength: 8,
    },
  },
];