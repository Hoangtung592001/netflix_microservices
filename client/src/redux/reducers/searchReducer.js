import GLOBAL_TYPES from '../../constants/actions';

const initialState = {
    films: [],
    series: []
}

export default function searchReducer(state = initialState, action) {
    switch(action.type) {
        case GLOBAL_TYPES.SEARCH_MOVIES:
            return {
                ...state,
                films: action.payload.films,
                series: action.payload.series
            }
        default:
            return state;
    }
}