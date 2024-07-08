import * as Yup from "yup";

export const newsLetterSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
});