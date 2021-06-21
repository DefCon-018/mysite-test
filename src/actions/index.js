export const ADD_DATA = 'ADD_DATA';
export const ADD_NEW_DATA = 'ADD_NEW_DATA';

export function addData(data){
    return {
        type: ADD_DATA,
        data
    }
}

export function addNewData(newData){
    return{
        type: ADD_NEW_DATA,
        newData
    }
}