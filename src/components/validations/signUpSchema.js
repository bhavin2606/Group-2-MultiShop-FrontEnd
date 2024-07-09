import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

export const signUpSchema = Yup.object({
    first_name: Yup.string().min(2).max(25).required("Please enter your name"),
    last_name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().matches(passwordRules, { message: "Password must be 8+ chars, incl. uppercase (A-Z), lowercase (a-z), number (0-9), and special (@$!%*?&)." }),
    password_confirmation: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Password must match"),
});