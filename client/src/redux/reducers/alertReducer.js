import GLOBAL_TYPES from '../../constants/actions';

const initialState = {
    
};

export default function alertReducer(state = initialState, action) {
    switch(action.type) {
        case GLOBAL_TYPES.RAISE_ALERT:
            return action.payload;
        case GLOBAL_TYPES.DELETE_ALERT:
            return {}
        default:
            return {
                ...state
            };
    }
}
