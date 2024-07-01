import axios from "axios"

export const getBannerData = async () => {
    let responseData = ""
    try {
        await axios.get("http://192.168.1.181:8000/api/banners").then((response) => {
            responseData = response.data
        }).catch((error) => console.log(error))
        return responseData
    } catch (error) {
        console.log(error);
    }
}