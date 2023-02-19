const initialState = {
    cats : {

    }
}


export const hatsCatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "get_hat_cats_state":
            return {
                ...state,
                cats : action.payload.hats
            }
        default:
            return state
    }
}