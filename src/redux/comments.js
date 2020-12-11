import * as ActionTypes from './ActionTypes';

                        //receives an object containing error message and array of comments
export const Comments = (state = {errMess: null, comments: []}, action) => {
    switch (action.type) {
        //returns previous state, null error message, and comments array from action payload
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
        //returns previous state, error message from action payload
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            //comment.id = state.length; fine when state was simple array, now array is stored in state.comments object
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            //return state.concat(comments);  fine when state was simple array, now need to spread previous state and update just comments property
            return {...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
};