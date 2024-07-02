import * as Yup from "yup";

export const checkoutSchema = Yup.object().shape({
  billing: Yup.object().shape({
    firstName: Yup.string().required("First Name is Required Field"),
    lastName: Yup.string().required("Last Name is Required Field"),
    email: Yup.string().required("Email is Required Field"),
    mobileNo: Yup.string().required("Mobile No is Required Field"),
    address1: Yup.string().required("Address Line 1 is Required Field"),
    country: Yup.string().required("Please Select Any one Coutry"),
    city: Yup.string().required("Please add City Name"),
    state: Yup.string().required("Please add State Name"),
    zip: Yup.string().required("Please Enter Your city Zip-code"),
  }),
  shiping: Yup.object().shape({
    isDiffrentShip: Yup.boolean(),
    firstName: Yup.string().when("isDiffrentShip", (isDiffrentShip) => {
      if (isDiffrentShip[0]) {
        return Yup.string().required("First Name is Required Field")
      } else {
        return Yup.string().notRequired()
      }
    }),
    lastName: Yup.string().when("isDiffrentShip", {
      is(value) {
        return value
      },
      then: string => string.required("Last Name is Required Field"),
      otherwise: string => string
    }),

    email: Yup.string().when("isDiffrentShip", {
      is(value) {
        return value
      },
      then: string => string.required("Email is Required Field"),
      otherwise: string => string
    }),
    mobileNo: Yup.string().when("isDiffrentShip", {
      is(value) {
        return value
      },
      then: string => string.required("Mobile No is Required Field"),
      otherwise: string => string
    }),
    address1: Yup.string().when("isDiffrentShip", {
      is(value) {
        return value
      },
      then: string => string.required("Address Line 1 is Required Field"),
      otherwise: string => string
    }),
    country: Yup.string().when("isDiffrentShip", {
      is(value) {
        return value
      },
      then: string => string.required("Please Select Any one Coutry"),
      otherwise: string => string
    }),
    city: Yup.string().when("isDiffrentShip", {
      is(value) {
        return value
      },
      then: string => string.required("Please add City Name"),
      otherwise: string => string
    }),
    state: Yup.string().when("isDiffrentShip", {
      is(value) {
        return value
      },
      then: string => string.required("Please add State Name"),
      otherwise: string => string
    }),
    zip: Yup.string().when("isDiffrentShip", {
      is(value) {
        return value
      },
      then: string => string.required("Please Enter Your city Zip-code"),
      otherwise: string => string
    }),
  }),

});

