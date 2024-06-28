import * as Yup from "yup";

export const resetSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
});