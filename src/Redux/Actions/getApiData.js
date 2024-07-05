// import axios from "axios"

// export const getBannerData = async (loading) => {
//     let responseData = ""
//     try {
//         await axios.get(`${process.env.REACT_APP_BASE_URL}/banners`).then((response) => {
//             responseData = response.data
//         }).catch((error) => console.log(error))
//         return responseData
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const getCategoryData = async (loading) => {
//     loading = true
//     let responseData = ""
//     try {
//         await axios.get(`${process.env.REACT_APP_BASE_URL}/category`).then((response) => {
//             responseData = response.data
//         }).catch((error) => console.log(error))
//         return responseData
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const getUserData = async () => {
//     let token = localStorage.getItem("token")
//     console.log("token", token);
//     let responseData = ""
//     const config = {
//         headers: { Authorization: `Bearer ${token}` }
//     };
//     try {
//         await axios.get(`${process.env.REACT_APP_BASE_URL}/profile`, config).then((response) => {
//             responseData = response.data
//             console.log(responseData);
//         }).catch((error) => console.log(error))
//         return responseData
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const getSettingData = async () => {
//     let token = localStorage.getItem("token")
//     console.log("token", token);
//     let responseData = ""
//     try {
//         await axios.get(`${process.env.REACT_APP_BASE_URL}/footer`).then((response) => {
//             responseData = response.data
//             console.log(responseData);
//         }).catch((error) => console.log(error))
//         return responseData
//     } catch (error) {
//         console.log(error);
//     }
// }