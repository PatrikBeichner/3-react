import * as ActionTypes from './ActionTypes';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        //when identifier is same as value can write as just "value," ie 'campsiteId,'
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text,
    }
})