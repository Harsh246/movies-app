import {createStore} from 'redux';
import reducers from '../reducers/index';
import {data} from '../data';
const initialState ={
    list : data,
    favourite: [],
    showList: 'true',
    showFav: 'false'
};
export const store = createStore(reducers,initialState);
