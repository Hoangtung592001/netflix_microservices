import React from 'react';

import {
    Overlay,
    Container,
    VideoContainer,
    OptionsBar,
    PlayBtn,
    EmoBtn,
    InfoContainer,
    DetailedInfoFrame,
    InfoHeader,
    DescriptionInfo,
    NumberInfo,
    GeneralInfoFrame,
    GeneralInfo,
    DetailedInfoContainer,
    RecommendedFilmContainer,
    RecommendedFilmFrame,
    RecommendedVideoContainer,
    RecommendedNumberInfoFrame,
    RecommendedDetailedInfoContainer,
    RecommendedFilmGroup,
    PosterContainer,
    CloseBtn
} from './styles/detailed-modal';

export default function DetailedModal({ children, ...restProps }) {
    return(
        <Overlay {...restProps}>
            <Container>
                {children}
            </Container>
        </Overlay>
    )
}

DetailedModal.VideoContainer = function DetailedModalVideoContainer({ children, ...restProps }) {
    return (
        <VideoContainer { ...restProps }>
            <video muted allow="autoplay" loop autoPlay src='/videos/little.mp4'/>
            {children}
        </VideoContainer>
    )
}

DetailedModal.PosterContainer = function DetailedModalPosterContainer({ children, ...restProps }) {
    return (
        <PosterContainer { ...restProps }>
            <img src='/images/misc/joker1.jpg' alt='poster'/>
            {children}
        </PosterContainer>
    )
}

DetailedModal.CloseBtn = function DetailedModalCloseBtn({ ...restProps }) {
    return (
        <CloseBtn {...restProps}>
            <img src="/images/icons/close.png" alt="Close" />
        </CloseBtn>
    )
}


DetailedModal.OptionsBar = function DetailedModalOptionsBar({ children, ...restProps }) {
    return (
        <OptionsBar { ...restProps }>
            {children}
        </OptionsBar>
    )
}

DetailedModal.PlayBtn = function DetailedModalPlayBtn({ children, ...restProps }) {
    return (
        <PlayBtn { ...restProps }>
            {children}
        </PlayBtn>
    )
}

DetailedModal.EmoBtn = function DetailedModalEmoBtn({ children, ...restProps }) {
    return (
        <EmoBtn { ...restProps }>
            {children}
        </EmoBtn>
    )
}

DetailedModal.InfoContainer = function DetailedModalInfoContainer({ children, ...restProps }) {
    return (
        <InfoContainer { ...restProps }>
            {children}
        </InfoContainer>
    )
}

DetailedModal.DetailedInfoFrame = function DetailedModalDetailedInfoFrame({ children, ...restProps }) {
    return (
        <DetailedInfoFrame { ...restProps }>
            {children}
        </DetailedInfoFrame>
    )
}

DetailedModal.InfoHeader = function DetailedModalInfoHeader({ children, ...restProps }) {
    return (
        <InfoHeader { ...restProps }>
            {children}
        </InfoHeader>
    )
}

DetailedModal.DescriptionInfo = function DetailedModalDescriptionInfo({ children, ...restProps }) {
    return (
        <DescriptionInfo { ...restProps }>
            {children}
        </DescriptionInfo>
    )
}

DetailedModal.NumberInfo = function DetailedModalNumberInfo({ children, ...restProps }) {
    return (
        <NumberInfo { ...restProps }>
            {children}
        </NumberInfo>
    )
}

DetailedModal.GeneralInfoFrame = function DetailedModalGeneralInfoFrame({ children, ...restProps }) {
    return (
        <GeneralInfoFrame { ...restProps }>
            {children}
        </GeneralInfoFrame>
    )
}

DetailedModal.GeneralInfo = function DetailedModalGeneralInfo({ children, ...restProps }) {
    return (
        <GeneralInfo { ...restProps }>
            {children}
        </GeneralInfo>
    )
}

DetailedModal.DetailedInfoContainer = function DetailedModalDetailedInfoContainer({ children, ...restProps }) {
    return (
        <DetailedInfoContainer { ...restProps }>
            {children}
        </DetailedInfoContainer>
    )
}





DetailedModal.RecommendedFilmContainer = function DetailedModalRecommendedFilmContainer({ children, ...restProps }) {
    return (
        <RecommendedFilmContainer { ...restProps }>
            {children}
        </RecommendedFilmContainer>
    )
}

DetailedModal.RecommendedFilmFrame = function DetailedModalRecommendedFilmFrame({ children, ...restProps }) {
    return (
        <RecommendedFilmFrame { ...restProps }>
            {children}
        </RecommendedFilmFrame>
    )
}

DetailedModal.RecommendedVideoContainer = function DetailedModalRecommendedVideoContainer({ children, ...restProps }) {
    return (
        <RecommendedVideoContainer { ...restProps }>
            {children}
        </RecommendedVideoContainer>
    )
}

DetailedModal.RecommendedNumberInfoFrame = function DetailedModalRecommendedNumberInfoFrame({ children, ...restProps }) {
    return (
        <RecommendedNumberInfoFrame { ...restProps }>
            {children}
        </RecommendedNumberInfoFrame>
    )
}

DetailedModal.RecommendedDetailedInfoContainer = function DetailedModalRecommendedDetailedInfoContainer({ children, ...restProps }) {
    return (
        <RecommendedDetailedInfoContainer { ...restProps }>
            {children}
        </RecommendedDetailedInfoContainer>
    )
}

DetailedModal.RecommendedFilmGroup = function DetailedModalRecommendedFilmGroup({ children, ...restProps }) {
    return (
        <RecommendedFilmGroup {...restProps}>
            {children}
        </RecommendedFilmGroup>
    ) 
};



