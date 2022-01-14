import React from 'react';
import {
    Container,
    BackBtn,
    VideoFrame
} from './styles/watch';

export default function Watch({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Watch.BackBtn = function WatchBackBtn({ children, ...restProps }) {
    return (
        <BackBtn {...restProps}>{children}</BackBtn>
    )
}

Watch.VideoFrame = function WatchVideoFrame({ children, ...restProps }) {
    return (
        <VideoFrame {...restProps}>{children}</VideoFrame>
    )
}