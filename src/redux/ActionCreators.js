import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

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
    
    return fetch(baseUrl + 'campsites')
        .then(response => response.json())
        .then(campsites => dispatch(addCampsites(campsites)));

    // timeout to simulate lag while fetching from server
    // setTimeout(() => {
    //     dispatch(addCampsites(CAMPSITES));
    // }, 2000);
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

export const fetchComments = () => dispatch => {
    //fetch request to server at baseUrl for comments resource, returns promise for array of comments
    return fetch(baseUrl + 'comments')
        //use then to access that array as the response if successful. .json method converts json to javascript array
        .then(response => response.json())
        //if successful dispatch comments to be added to redux store
        .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromotions = () => dispatch => {
    dispatch(promotionsLoading());
    
    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)));
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});