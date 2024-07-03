import axios from "axios";
import { toast } from "react-toastify";

export const postLoginData = async (values) => {
  let data = new FormData();
  let responseData = "";

  data.append("email", values.email);
  data.append("password", values.password);
  try {
    await axios
      .post("http://192.168.1.188:8000/api/login", data)
      .then((res) => {
        console.log(res);
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


export const postSignUpData = async (values) => {
  let data = new FormData();
  let responseData = "";
  data.append("email", values.email);
  data.append("firstName", values.firstName);
  data.append("lastName", values.lastName);
  data.append("password", values.password);
  data.append("confirmPassword", values.confirmPassword);

  try {
    await axios
      .post("http://192.168.1.188:8000/api/signup", data)
      .then((res) => {
        console.log(res.data);
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
  let token = localStorage.getItem("token")
  let responseData = ""
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  console.log(values, "valuessssssssssss");
  let data = new FormData();
  data.append("firstName", values.firstName);
  data.append("lastName", values.lastName);
  data.append("phoneNumber", values.phoneNumber);
  data.append("dob", values.birthday);
  data.append("image", values.image)
  data.append("_method", "put");

  try {
    await axios
      .post("http://192.168.1.188:8000/api/update-profile", data, config)
      .then((res) => {
        console.log(res);
        responseData = res.data
        toast.success("SignUp successfully")
      })
      .catch((err) => {
        console.log(err)
        toast.error("")
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
      .post("http://192.168.1.188:8000/api/newsletter", values)
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


export const postChangePasswordData = async (values) => {
  let token = localStorage.getItem("token")
  let responseData = ""
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    await axios
      .post("http://192.168.1.188:8000/api/change-password", values, config)
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


