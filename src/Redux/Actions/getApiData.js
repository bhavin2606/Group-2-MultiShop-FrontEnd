import axios from "axios"

export const getBannerData = async (loading) => {
    let responseData = ""
    try {
        await axios.get("../JSON/carousal.json").then((response) => {
            responseData = response.data
        }).catch((error) => console.log(error))
        return responseData
    } catch (error) {
        console.log(error);
    }
}

export const getUserData = async () => {
    let token = localStorage.getItem("token")
    console.log("token", token);
    let responseData = ""
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        await axios.get("http://192.168.1.188:8000/api/profile", config).then((response) => {
            responseData = response.data
            console.log(responseData);
        }).catch((error) => console.log(error))
        return responseData
    } catch (error) {
        console.log(error);
    }
}