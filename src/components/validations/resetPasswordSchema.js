import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/;

export const resetPasswordSchema = Yup.object({
    password: Yup.string()
        .matches(passwordRules, { 
            message: "Password must be at least 8 characters, include uppercase (A-Z), lowercase (a-z), number (0-9), and special character (@$!%*?&)." 
        })
        .required("Please enter a new password"),
    confirmPassword: Yup.string()
        .required("Please confirm your new password")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
