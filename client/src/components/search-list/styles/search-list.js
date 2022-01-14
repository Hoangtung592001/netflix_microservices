import styled from 'styled-components/macro';

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-gap: 10px 20px;
    .card__item {
        &:first-of-type {
            // margin-left: 0;
        }
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const Header = styled.h2`
    color: #fff;
`;



