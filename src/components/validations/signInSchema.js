import * as Yup from "yup";

export const signInSchema = Yup.object({
   email: Yup.string().email().required("Please enter your Email"),
    password: Yup.string().min(6).required("Please enter your password"),
  });