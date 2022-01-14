import React, { useState, useContext, createContext } from 'react';

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Meta,
  Entities,
  Item,
  Image,
  SlideButton,
  Wrapper,
  ItemType
} from './styles/card';

import IconArrowDown from '../IconArrowDown/IconArrowDown';
import DetailedModalContainer from '../../container/detailed_modal';

const Card = React.forwardRef((props, ref) => {
  const { children, ...restProps } = props;
  return (
    <Container ref={ref} {...restProps}>{children}</Container>
  );
});
export default Card;

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Wrapper = function CardWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.ItemType = function CardItemType({ children, ...restProps }) {
  return <ItemType {...restProps}>{children}</ItemType>;
};


Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = React.forwardRef((props, ref) => {
  const { children, setShowDetailedFilmModal, ...restProps } = props;
  return (
    <Item
      ref={ref}
      onClick={() => setShowDetailedFilmModal(true)}
      {...restProps}
    >
      {children}
    </Item>
  );
})

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};


Card.SlideButton = function CardSliderButton({ ...restProps }) {
  return (
    <SlideButton {...restProps}>
      <span>
        <IconArrowDown />
      </span>
    </SlideButton>
  )
}
