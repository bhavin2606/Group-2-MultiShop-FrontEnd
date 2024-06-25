import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().required("Please enter your Name"),
  email: Yup.string().required("Please enter your Email"),
  subject: Yup.string().required("Please enter your Subject"),
  message: Yup.string().required("Please enter your Content"),
});
