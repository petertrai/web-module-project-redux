import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions"

const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
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