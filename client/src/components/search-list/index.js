import React from 'react';

import {
    Container,
    Group,
    Header
} from './styles/search-list';

export default function SearchList({ children, ...restProps }) {
    return(
        <Container {...restProps}>{children}</Container>
    )
}

SearchList.Group = function SearchListGroup({ children, ...restProps }) {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

SearchList.Header = function SearchListHeader({ children, ...restProps }) {
    return (
        <Header {...restProps}>{children}</Header>
    )
}