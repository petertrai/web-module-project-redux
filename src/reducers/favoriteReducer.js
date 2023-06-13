import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions"

const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            };
        case ADD_FAVORITE:
            console.log('reducer: ', action);
            
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => item.id !== action.payload)
            };
        default:
            return state
    }

}
export default favoriteReducer


// export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
// export const ADD_FAVORITE = "ADD_FAVORITE";
// export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

// export const toggleFavorites = ()=> {
//     return({type: TOGGLE_FAVORITES});
// }

// export const addFavorite = (movie)=> {
//     return({type: ADD_FAVORITE, payload:movie});
// }

// export const removeFavorite = (id)=> {
//     return({type: REMOVE_FAVORITE, payload:id});
// }