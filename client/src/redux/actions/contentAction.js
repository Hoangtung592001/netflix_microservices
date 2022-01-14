import GLOBAL_TYPES from '../../constants/actions';
import axios from 'axios';
import SERVER_URL from '../../constants/server';
import { firebase } from '../../lib/firebase.prod';
import { useEffect, useState } from 'react'

export const getContent = (target, accessToken) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + accessToken,
        }
    };
    axios.get(SERVER_URL.API_SERVER + `${SERVER_URL.CONTENT}/?path=api/content/get_${target}`, config)
        .then(allContent => {
            dispatch({
                type: GLOBAL_TYPES[target.toUpperCase()],
                payload: allContent.data
            })
        })
}