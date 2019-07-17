
import { FETCH_TEXTS, NEW_TEXT } from '../actions/types';

const initialState = {
    items: [],
    item: {},
    history: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_TEXTS:
            return {
                ...state,
                items: action.payload,
            };

        case NEW_TEXT:
            return{
                ...state,
                items:[ action.payload, ...state.items]
            };

        default:
            return state;
    }
}