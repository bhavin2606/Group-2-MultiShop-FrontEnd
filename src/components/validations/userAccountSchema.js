import * as Yup from "yup";

export const userAccountSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).notRequired("Please enter your first name"),
    lastName: Yup.string().min(2).max(25).notRequired("Please enter your last name"),
    phoneNumber: Yup.number().positive().notRequired("Please enter your phone number"),
    birthday: Yup.date().notRequired("Please Enter your DOB")
}); 