import GLOBAL_TYPES from '../../constants/actions';
import axios from 'axios';
import SERVER_URL from '../../constants/server';
export const addUser = payload => async dispatch => {
    try {
        await axios.post(
            SERVER_URL.API_SERVER + `${SERVER_URL.AUTH}/?path=api/account/signup`,
            payload
        )
        .then(response => {
            if (response.data.error) {
                dispatch({
                    type: GLOBAL_TYPES.RAISE_ALERT,
                    payload: {
                        error: response.data.msg
                    }
                })
            }
            else {
                dispatch({
                    type: GLOBAL_TYPES.RAISE_ALERT,
                    payload: {
                        success: response.data.msg
                    }
                })
                setTimeout(() => {
                    dispatch({
                        type: GLOBAL_TYPES.DELETE_ALERT,
                    })
                }, 100);
            }
        })
    }
    catch(err) {
        dispatch({
            type: GLOBAL_TYPES.RAISE_ALERT,
            payload: err.message
        })
    }
};