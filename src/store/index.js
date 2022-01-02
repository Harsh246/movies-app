import {createStore} from 'redux';
import reducers from '../reducers/index';
import {data} from '../data';
const initialState ={
    list : data,
    favourite: []
};
export const store = createStore(reducers,initialState);
