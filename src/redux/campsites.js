import * as ActionTypes from './ActionTypes';

export const Campsites = (state = {
        isLoading: true,
        errMess: null,
        campsites: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CAMPSITES: 
            //no longer loading, no error message, campsites array will be populated with payload
            return {...state, isLoading: false, errMess: null, campsites: action.payload};
        case ActionTypes.CAMPSITES_LOADING:
             //still loading loading, no error message, campsites array empty as still loading
            return {...state, isLoading: true, errMess: null, campsites: []};
        case ActionTypes.CAMPSITES_FAILED:
             //no longer loading,  error message is payload, don't need to update campsites array
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};