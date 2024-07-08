import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string().required("Please enter your email"),
  subject: Yup.string().required("Please enter your subject"),
  message: Yup.string().required("Please enter your content"),
});
