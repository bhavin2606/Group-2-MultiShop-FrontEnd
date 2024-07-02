import axios from "axios"

export const getBannerData = async (loading) => {
    loading = true
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
