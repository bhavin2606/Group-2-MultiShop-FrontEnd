import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/;

export const changePasswordSchema = Yup.object({
    currentPassword: Yup.string().min(6).required("Please enter your current password"),
    password: Yup.string()
        .matches(passwordRules, { 
            message: "Password must be 8+ chars, incl. uppercase (A-Z), lowercase (a-z), number (0-9), and special (@$!%*?&)."
        })
        .required("Please enter a new password"),
    confirmPassword: Yup.string()
        .required("Please confirm your new password")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
