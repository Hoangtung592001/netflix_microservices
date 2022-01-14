import GLOBAL_TYPES from '../../constants/actions';
import axios from 'axios';
import SERVER_URL from '../../constants/server';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const signIn = payload => async dispatch => {
    try {
        const response = await axios.post(
            SERVER_URL.API_SERVER + `${SERVER_URL.AUTH}/?path=api/account/signin`,
            payload
        );
        if (response.data.error) {
            dispatch({
                type: GLOBAL_TYPES.RAISE_ALERT,
                payload: {
                    error: response.data.msg
                }
            })
        }
        else {
            cookies.set('refreshToken', response.data.refreshToken);
            dispatch({
                type: GLOBAL_TYPES.SIGN_IN,
                payload: {
                    accessToken: response.data.accessToken,
                    userId: response.data.user._id
                }
            })
            delete response.data.user._id;
            dispatch({
                type: GLOBAL_TYPES.USER_INFO,
                payload: {
                    ...response.data.user
                }
            })
            dispatch({
                type: GLOBAL_TYPES.RAISE_ALERT,
                payload: {
                    success: response.data.msg
                }
            })
            setTimeout(() => {
                dispatch({
                    type: GLOBAL_TYPES.DELETE_ALERT
                })
            }, 100);
        }
    }
    catch(err) {
        dispatch({
            type: GLOBAL_TYPES.RAISE_ALERT,
            payload: {
                error: err.message
            }
        })
    }
};

export const refreshToken = () => async dispatch => {
    const refreshToken = cookies.get('refreshToken');
    if(refreshToken) {
        const response = await axios.post(
            SERVER_URL.API_SERVER + `${SERVER_URL.AUTH}/?path=api/auth/grant_access_token`,
            {
                refreshToken: refreshToken
            }
        )
        if (response.data.error) {
            console.log(response.error);
        }
        else {
            dispatch({
                type: GLOBAL_TYPES.SIGN_IN,
                payload: {
                    accessToken: response.data.accessToken,
                    userId: response.data.user._id
                }
            })
            delete response.data.user._id;
            dispatch({
                type: GLOBAL_TYPES.USER_INFO,
                payload: {
                    ...response.data.user
                }
            })
        }
    }
}