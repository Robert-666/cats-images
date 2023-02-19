const initialState = {
    category: {

    }
}


export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "get_category_data":
            return {
                ...state,
                category: action.payload.category
            }
        default:
            return state
    }
}