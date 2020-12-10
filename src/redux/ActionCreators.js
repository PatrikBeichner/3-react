import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        //when identifier is same as value can write as just "value," ie 'campsiteId,'
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text,
    }
});

//two arrows = arrow function nested in arrow function, able to do from thunk
export const fetchCampsites = () => dispatch => {
    dispatch(campsitesLoading());
    
    //timeout to simulate lag while fetching from server
    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);
};

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});