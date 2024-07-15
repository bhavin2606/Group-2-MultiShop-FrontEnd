import * as Yup from "yup";

export const checkoutSchema = Yup.object().shape({
  billing: Yup.object().shape({
      firstName: Yup.string().required("Please enter first name"),
      lastName: Yup.string().required("Please enter last name"),
      email: Yup.string().email("Invalid email").required("Please enter email"),
      mobileNo: Yup.string().required("Please enter mobile number").matches(/^\d{10}$/, "Invalid mobile number"),
      address1: Yup.string().required("Please enter address line 1."),
      country: Yup.string().required("Please select country"),
      city: Yup.string().required("Please enter city"),
      state: Yup.string().required("Please enter state"),
      zip: Yup.string().required("Please enter zip code"),
  }),
  isDiffrentShiping: Yup.boolean(),
  shiping: Yup.object().shape({
      firstName: Yup.string().when("$isDiffrentShiping", {
          is: (val) => {
              return val
          },
          then: string => string.required("Please enter first name"),
          otherwise: string => string,
      }),
      lastName: Yup.string().when("$isDiffrentShiping", {
          is: (val) => {
              return val
          },
          then: string => string.required("Please enter last name"),
          otherwise: string => string,
      }),
      email: Yup.string().when("$isDiffrentShiping", {
          is: (val) => {
              return val
          },
          then: string => string.required("Please enter email"),
          otherwise: string => string,
      }),
      mobileNo: Yup.string().when("$isDiffrentShiping", {
          is: (val) => {
              return val
          },
          then: string => string.required("Please enter mobile no").matches(/^\d{10}$/, "Invalid mobile number"),
          otherwise: string => string,
      }),
      address1: Yup.string().when("$isDiffrentShiping", {
        is: (val) => {
          console.log(val,"valsdfd")
              return val
          },
          then: string => string.required("Please enter address line 1"),
          otherwise: string => string,
      }),
      country: Yup.string().when("$isDiffrentShiping", {
          is: (val) => {
              return val
          },
          then: string => string.required("Please select country"),
          otherwise: string => string,
      }),
      city: Yup.string().when("$isDiffrentShiping", {
          is: (val) => {
              return val
          },
          then: string => string.required("Please enter city"),
          otherwise: string => string,
      }),
      state: Yup.string().when("$isDiffrentShiping", {
          is: (val) => {
              return val
          },
          then: string => string.required("Please enter state"),
          otherwise: string => string,
      }),
      zip: Yup.string().when("$isDiffrentShiping", {
          is: (val) => {
              return val
          },
          then: string => string.required("Please enter zip code"),
          otherwise: string => string,
      }),
  }),
  payment: Yup.string().required()
})


