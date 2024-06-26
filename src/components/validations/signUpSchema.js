import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

export const signUpSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required("Please enter your name"),
    lastName: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().matches(passwordRules, { message: "Please create Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'" }) ,
    confirm_password: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Password must match"),
});