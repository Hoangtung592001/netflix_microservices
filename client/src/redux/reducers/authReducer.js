import GLOBAL_TYPES from '../../constants/actions';

const initialState = {
    accessToken: '',
    userId: ''
};

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case GLOBAL_TYPES.SIGN_IN:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                userId: action.payload.userId
            }
        default:
            return state;
    }
}