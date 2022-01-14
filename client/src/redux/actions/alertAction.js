import globalTypes from '../../constants/actions';

export const raiseAlert = msg => dispatch => {
    dispatch({
        type: globalTypes.RAISE_ALERT,
        payload: {
            error: msg
        }
    })
}

export const deleteAlert = () => dispatch => {
    dispatch({
        type: globalTypes.DELETE_ALERT,
    })
}