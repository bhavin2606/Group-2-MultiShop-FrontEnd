import * as Yup from "yup";

export const checkoutSchema = Yup.object().shape({
  billing: Yup.object().shape({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    email: Yup.string().required("Please enter your email"),
    mobileNo: Yup.string().required("Please enter your mobile number"),
    address1: Yup.string().required("Please enter address line 1"),
    country: Yup.string().required("Please select a country"),
    city: Yup.string().required("Please enter your city name"),
    state: Yup.string().required("Please enter your state name"),
    zip: Yup.string().required("Please enter your city zip code"),
  }),
  shipping: Yup.object().shape({
    isDifferentShip: Yup.boolean(),
    firstName: Yup.string().when("isDifferentShip", {
      is: (isDifferentShip) => isDifferentShip,
      then: (schema) => schema.required("Please enter your first name"),
      otherwise: (schema) => schema.notRequired()
    }),
    lastName: Yup.string().when("isDifferentShip", {
      is: (value) => value,
      then: (schema) => schema.required("Please enter your last name"),
      otherwise: (schema) => schema.notRequired()
    }),
    email: Yup.string().when("isDifferentShip", {
      is: (value) => value,
      then: (schema) => schema.required("Please enter your email"),
      otherwise: (schema) => schema.notRequired()
    }),
    mobileNo: Yup.string().when("isDifferentShip", {
      is: (value) => value,
      then: (schema) => schema.required("Please enter your mobile number"),
      otherwise: (schema) => schema.notRequired()
    }),
    address1: Yup.string().when("isDifferentShip", {
      is: (value) => value,
      then: (schema) => schema.required("Please enter address line 1"),
      otherwise: (schema) => schema.notRequired()
    }),
    country: Yup.string().when("isDifferentShip", {
      is: (value) => value,
      then: (schema) => schema.required("Please select a country"),
      otherwise: (schema) => schema.notRequired()
    }),
    city: Yup.string().when("isDifferentShip", {
      is: (value) => value,
      then: (schema) => schema.required("Please enter your city name"),
      otherwise: (schema) => schema.notRequired()
    }),
    state: Yup.string().when("isDifferentShip", {
      is: (value) => value,
      then: (schema) => schema.required("Please enter your state name"),
      otherwise: (schema) => schema.notRequired()
    }),
    zip: Yup.string().when("isDifferentShip", {
      is: (value) => value,
      then: (schema) => schema.required("Please enter your city zip code"),
      otherwise: (schema) => schema.notRequired()
    }),
  }),
});
