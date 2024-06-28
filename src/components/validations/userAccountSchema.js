import * as Yup from "yup";

export const userAccountSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required("Please enter your First Name"),
    lastName: Yup.string().min(2).max(25).required("Please enter your Last Name"),
    phoneNumber: Yup.number().positive().min(8).max(13).required("Please enter your Phone Number"),
    birthday: Yup.date().required("Please Enter your DOB")
});