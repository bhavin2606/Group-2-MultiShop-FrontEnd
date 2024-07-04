import * as Yup from "yup";

export const userAccountSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).notRequired("Please enter your First Name"),
    lastName: Yup.string().min(2).max(25).notRequired("Please enter your Last Name"),
    phoneNumber: Yup.number().positive().notRequired("Please enter your Phone Number"),
    birthday: Yup.date().notRequired("Please Enter your DOB")
}); 