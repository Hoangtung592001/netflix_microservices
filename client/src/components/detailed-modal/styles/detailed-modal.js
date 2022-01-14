import styled from 'styled-components/macro';

export const Overlay = styled.div`
    z-index: 100000;
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    overflow: auto;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
`;


export const Container = styled.div`
    width: 60%;
    padding-bottom: 30px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    background-color: #181818;
    border-radius: 5px;
`;

export const CloseBtn = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const VideoContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    video {
        width: 100%;
    }
`;

export const PosterContainer = styled.div`
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
    }
`;

export const PlayBtn = styled.button`
    padding: 8px 20px;
    display: flex;
    align-items: center;
    border: 1px solid grey;
    cursor: pointer;
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    border-radius: 5px;
    font-size: 18px;
    transition: background-color 0.5s ease;
    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
`;

export const EmoBtn = styled.button`
    padding: 10px 10px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s ease;
    &:hover {
        opacity: 0.8;
    }
`;

export const OptionsBar = styled.div`
    display: flex;
    flex-direction: row;
    z-index: 1;
    transform: translate(40px, -55px);
    ${PlayBtn} + ${EmoBtn} {
        margin-left: 20px;
    }
    ${EmoBtn} + ${EmoBtn} {
        margin-left: 10px;
    }
`;

export const DetailedInfoContainer = styled.div`
    margin: 0 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 3px;
    border-bottom: 4px solid #222;
`;

export const DetailedInfoFrame = styled.div`
    display: flex;
    flex-direction: column;
    flex: 6;
    margin-right: 20px;
`;

export const InfoHeader = styled.h2`
    font-weight: normal;
    color: white;
    margin-bottom: 10px; 
    margin-top: 0;
    span {
        font-weight: bold;
    }
`;

export const DescriptionInfo = styled.p`
    font-size: 15px;
    color: white;
    text-align: justify;
`;

export const NumberInfo = styled.div`
    font-size: 13px;
    display: flex;
    align-items: center;
    color: white;
    margin: 0;
    h6 {
        margin: 0;
        color: #000;
        background-color: rgb(237 191 25);
        padding: 4px 5px;
        border-radius: 4px;
        margin-left: 5px;
        margin-right: 5px;
    }
    span {
        border: 1px solid white;
        border-radius: 2px;
        padding: 1px 3px;
        margin-left: 5px;
    }
`;

export const GeneralInfoFrame = styled.div`
    display: flex;
    flex-direction: column;
    flex: 4;
`;

export const GeneralInfo = styled.p`
    color: white;
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 15px;
    text-align: justify;
    span {
        color: rgb(191, 191, 191);
        opacity: 0.4;
    }
    &:first-of-type {
        margin-top: 35px;
    }
`;

export const RecommendedFilmContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px 10px;
`;



export const RecommendedFilmGroup = styled.div`
    h1 {
        color: white;
        font-size: 25px;
    }
`;

export const RecommendedFilmFrame = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(77, 77, 77);
    border-radius: 4px;
    border: 1px solid rgb(77, 77, 77)
    ${VideoContainer} {
        border-radius: 4px;
        video {
            border-radius: 4px;
        }
    }
`;

export const RecommendedVideoContainer = styled.div`

`;

export const RecommendedDetailedInfoContainer = styled.div`
    margin: 0px 20px;
`;



export const RecommendedNumberInfoFrame = styled.div`
    ${PlayBtn} {
        padding: 10px 10px;
        background-color: transparent;
        border: 1px solid white;
        color: white;
        border-radius: 50%;
        font-size: 10px;
    }
    ${EmoBtn} {
        padding: 10px 10px;
        font-size: 10px;
    }
    ${OptionsBar} {
        position: relative;
        transform: translate(0px, 0px);
        ${PlayBtn} + ${EmoBtn} {
            margin-left: 4px;
        }
    }
    ${NumberInfo} {
        font-size: 12px;
        span {
            margin-right: 6px;
            margin-left: 0px;
        }
        h6 {
            margin-left: 0px;
        }
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
`;





