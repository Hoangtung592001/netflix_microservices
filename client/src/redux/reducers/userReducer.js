import GLOBAL_TYPES from '../../constants/actions';

const initialState = {
    
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case GLOBAL_TYPES.USER_INFO:
            return {
                ...state,
                ...action.payload
            }
        case GLOBAL_TYPES.CLEAR_USER_INFO:
            return {};
        default:
            return state;
    }
}