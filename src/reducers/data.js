import { ADD_DATA, ADD_NEW_DATA } from "../actions";

export default function data(state= [], action){
    switch(action.type){
        case ADD_DATA:
            return action.data
        case ADD_NEW_DATA:
            return [...state, action.newData];
        default:
            return state;
    }
}