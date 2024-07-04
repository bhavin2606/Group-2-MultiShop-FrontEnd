import axios from "axios";
import { toast } from "react-toastify";
import { date } from "yup";

export const postLoginData = async (values) => {
  let data = new FormData();
  let responseData = "";
  data.append("email", values.email);
  data.append("password", values.password);
  try {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/login`, values)
      .then((res) => {
        console.log(res,"login reesu");
        responseData = res.data
        toast.success("Logged in successfully")
      })
      .catch((err) => {
        console.log(err)
        toast.error("Invalid Credentials")
      });
    return responseData
  }
  catch (error) {
    toast.error("Invalid Credentials")
  }
};

export const contactUSData = async (values) => {
  try {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/addcontact`,
      headers: { 
        'Content-Type': 'application/json', 
        'X-API-Key': '{{token}}'
      },
      data : values
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
}


export const postSignUpData = async (values) => {
  let data = new FormData();
  console.log(values,"values");
  let responseData = "";
  data.append("email", values.email);
  data.append("firstName", values.firstName);
  data.append("lastName", values.lastName);
  data.append("password", values.password);
  data.append("confirmPassword", values.confirm_password);
  console.log(data,"data");
  try {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/signup`, data)
      .then((res) => {
        console.log(res,"signup");
        responseData = res.data
        toast.success("SignUp successfully")
      })
      .catch((err) => {
        console.log(err)
        toast.error("Email already registered")
      });
    return responseData
  }
  catch (error) {
    toast.error("Invalid Credentials")
  }
};


export const postUpdateProfileData = async (values) => {
  let data = new FormData();
  let responseData = "";
  data.append("firstName", values.firstName);
  data.append("lastName", values.lastName);
  data.append("phoneNumber", values.phoneNumber);
  data.append("birthday", values.birthday);
  data.append("avatar", values.avatar)

  try {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/userProfile`, data)
      .then((res) => {
        console.log(res);
        responseData = res.data
        toast.success("Profile Updated successfully")
      })
      .catch((err) => {
        console.log(err)
        toast.error("Something Wrong....")
      });
    return responseData
  }
  catch (error) {
    toast.error("Invalid Credentials")
  }
};


export const postNewsLetterData = async (values) => {
  let responseData = "";
  try {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/newsletter`, values)
      .then((res) => {
        console.log(res);
        responseData = res.data
        toast.success("Subscribed successfully")
      })
      .catch((err) => {
        console.log(err)
        toast.error("Invalid email")
      });
    return responseData
  }
  catch (error) {
    toast.error("Invalid")
  }
};