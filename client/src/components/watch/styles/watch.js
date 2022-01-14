import styled from 'styled-components/macro';

export const Container = styled.div`

`;

export const BackBtn = styled.div`
    position: absolute;
    top: 10px;
    left: 20px;
    cursor: pointer;
    z-index: 100000;
    transition: all 0.2s ease-in;
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    opacity: 0;
    a {
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        svg {
            margin-right: 8px;
        }
    }
    &:hover {
        opacity: 1;
    }
`;

export const VideoFrame = styled.div`

`;

