import * as Yup from "yup";

export const forgetSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
});