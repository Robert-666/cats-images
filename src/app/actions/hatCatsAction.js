import axios from "axios"

export const getHatCatsInfo = () => {

    return async (dispatch) => {
        const hats = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1")
        dispatch({
            type: "get_hat_cats_state",
            payload: {
                hats: hats
            }
        })

    }
} 