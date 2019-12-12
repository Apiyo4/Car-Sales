import * as types from './actionTypes';

export function removeFeature(item){
    return{
        type: types.REMOVE_FEATURE,
        payload: item,
    }
}
export function addFeature(item){
    return{
        type: types.BUY_ITEM,
        payload: item,
    }
}