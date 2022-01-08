import { createStore } from 'redux';
import combineReducers from '../reducers';
import { data } from '../data';
const initialState = {

    movies: 
    {
        list: data,
        favourite: [],
        showList: 'true'
    },
search:{
    result: {}
}



};
export const store = createStore(combineReducers, initialState);
