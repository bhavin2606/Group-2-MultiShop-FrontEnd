import axios from "axios"

export const getBannerData = async (loading) => {
    loading = true
    let responseData = ""
    try {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/banners`).then((response) => {
            responseData = response.data
        }).catch((error) => console.log(error))
        return responseData
    } catch (error) {
        console.log(error);
    }
}

export const getCategoryData = async (loading) => {
    loading = true
    let responseData = ""
    try {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/category`).then((response) => {
            responseData = response.data
        }).catch((error) => console.log(error))
        return responseData
    } catch (error) {
        console.log(error);
    }
}
