import GLOBAL_TYPES from '../../constants/actions';

const initialState = {
    films: [],
    series: []
};

export default function contentReducer(state = initialState, action) {
    switch(action.type) {
        case GLOBAL_TYPES.FILMS:
            return {
                ...state,
                films: action.payload
            }
        case GLOBAL_TYPES.SERIES:
            return {
                ...state,
                series: action.payload
            }
        default:
            return {
                ...state
            };
    }
}
