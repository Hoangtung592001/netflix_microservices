import React, { useState, useEffect } from 'react'
import SliderContainer from './slider';
import { useSelector, useDispatch } from 'react-redux';
import * as ROUTES from '../constants/routes';
import GLOBAL_TYPES from '../constants/actions';
import SERVER_URL from '../constants/server';
import axios from 'axios';
import selectionFilter from '../utils/selection-filter';
import { Card, SearchList, DetailedModal } from '../components';
import { AiFillCaretRight, AiOutlinePlus } from 'react-icons/ai';
const SearchMovies = ({ searchTerm, setShowDetailedFilmModal }) => {
    const { auth, search } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        let cancel;
        const config = {
            headers: {
                Authorization: 'Bearer ' + auth.accessToken,
            },
            cancelToken: new axios.CancelToken(c => cancel = c)
        };
        axios.post(SERVER_URL.API_SERVER + `${SERVER_URL.CONTENT}/?path=api/content/search_movies`, {
            searchTerm: searchTerm
        },
        config,
        )
        .then(result => {
            dispatch({
                type: GLOBAL_TYPES.SEARCH_MOVIES,
                payload: result.data
            })
        })
        .catch(e => {
            if (axios.isCancel(e)) return
        })
        return () => cancel()
    }, [dispatch, searchTerm, auth.accessToken])
    return (
        <>
            <SearchList.Group>
                <SearchList.Header>Films</SearchList.Header>
                    <SliderContainer
                        category='films'
                        slideItem={search.films}
                        setShowDetailedFilmModal={setShowDetailedFilmModal}
                    />
            </SearchList.Group>
        </>
    )
}

export default SearchMovies;
