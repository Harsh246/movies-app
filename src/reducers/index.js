import { combineReducers } from "redux";

const initialState = {
   
};

export function movies(state, action) {
   //console.log("state in reducer: ",state);
if(state){


    switch (action.type) {
        case 'ADD_FAV':

            return {
                ...state,
                favourite: [action.movie, ...state.favourite]

            }
        case 'RE_FAV': {
            var fav = state.favourite;
            
            var index = fav.indexOf(action.movie);
            if (index > -1) {
                fav.splice(index, 1);
            }
            return {
                ...state,
                favourite: fav
            }
        }
        case 'SHOW_ALL':
            return {
                ...state,
                showList: true
            }

        case 'SHOW_FAV':
            return {
                ...state,
                showList: false
            }
        default:
            return state;
    }

}
else
 return initialState; 
}

export function search(state, action){
  // console.log("state in search: ",state);
if(state)
return state;
else
return initialState;

}

export default combineReducers(
    {
        movies, //these are also used as keys to initialise the reducers state got from our store. PA: these names matches with the properties name in initialstate in store. and helps the particular reducer to get its part from the state.
        search
    }
);

