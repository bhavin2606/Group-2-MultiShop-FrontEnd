import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const changePasswordSchema = Yup.object({
    currentPassword: Yup.string().min(6).required("Please enter your password"),
    newPassword: Yup.string().matches(passwordRules, { message: "Please create Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'" }) ,
    confirmPassword:Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});