import *  as yup from 'yup'
export const registerSchema = yup
 .object({
  name: yup
    .string()
    .required("Name is required")
    .min(5, "Name should be at least 5 characters"),
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "Invalid format."),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be 8 or more characters."),
 }).required()

 export const loginSchema = yup 
 .object({
    email: yup
      .string()
      .required("Email is required")
      .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "Invalid format."),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be 8 or more characters."),
 }).required()