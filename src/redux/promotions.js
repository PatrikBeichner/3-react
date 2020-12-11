// import { PROMOTIONS } from '../shared/promotions';
//data coming from server now not shared file
import * as ActionTypes from './ActionTypes';


export const Promotions = (state = {isLoading: true, errMess: null, promotions: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOTIONS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};
        case ActionTypes.PROMOTIONS_LOADING:
            //is loading, no errors, promotions empty array because not loaded yet
            return { ...state, isLoading: true, errMess: null, promotions: []};
        case ActionTypes.PROMOTIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};