import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Watch } from '../components';
import { Link } from "react-router-dom";
import ReactNetflixPlayer from "react-netflix-player";
import * as ROUTES from '../constants/routes';
const WatchMovie = () => {
    return (
        <Watch>
            <Watch.BackBtn>
                <Link to={ROUTES.BROWSE}>
                    <BiArrowBack />
                    Home
                </Link>
            </Watch.BackBtn>
            <Watch.VideoFrame>
                <ReactNetflixPlayer 
                    src='/videos/little.mp4'
                    primaryColor={"#E50914"}
                    playerLanguage={"en"}
                    title='Little Fish man'
                    subTitle='Little Fish man'
                    titleMedia='Little Fish man'
                />
            </Watch.VideoFrame>
        </Watch>
    )
}

export default WatchMovie;
