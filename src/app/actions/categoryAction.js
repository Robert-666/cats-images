import axios from "axios"


export const getCategoryData = () => {

    return async (dispatch) => {
        const category = await axios.get("https://api.thecatapi.com/v1/categories")
        dispatch({
            type: "get_category_data",
            payload: {
                category: category
            }
        })
    }
}