import React, { useState, useEffect } from 'react'
import { Card, Player } from '../components';
import useSliding from '../hooks/useSliding';
import useSizeElement from '../hooks/useSizeElement';
import { DetailedModal } from "../components";
import { Loading } from '../components';
import {
    AiFillCaretRight,
    AiOutlinePlus,
    AiOutlineLike,
    AiTwotoneLike,
    AiOutlineDislike,
    AiTwotoneDislike,
} from "react-icons/ai";
const SliderContainer = ({category, slideItem, setShowDetailedFilmModal}) => {
    const { width, elementRef } = useSizeElement();
    const {
        handlePrev,
        handleNext,
        slideProps,
        containerRef,
        hasNext,
        hasPrev
    } = useSliding(width, slideItem.data.length);
    if (slideItem.data.length > 0) {
        return (
            <Card.Wrapper>
                {hasNext ? <Card.SlideButton next={true} onClick={handleNext}/> : null}
                {hasPrev ? <Card.SlideButton prev={true} onClick={handlePrev}/> : null}
                <Card ref={containerRef} {...slideProps}>
                    <Card.Title>{slideItem.title}</Card.Title>
                    <Card.Entities>
                    {slideItem.data.map((item) => (
                        <Card.Item
                            ref={elementRef}
                            key={item._id} 
                            item={item}
                            className='card__item'
                            setShowDetailedFilmModal={setShowDetailedFilmModal}
                        >
                            <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                            <DetailedModal.RecommendedNumberInfoFrame 
                                inCard={true}
                                className='recommended-number-info__frame'
                            >
                                <DetailedModal.NumberInfo
                                    className='number-info__frame'
                                >
                                    <h5>HD</h5>
                                    <span>13+</span>
                                    7.0
                                    <h6>IMDb</h6>
                                    <span>2007</span>
                                </DetailedModal.NumberInfo>
                                <DetailedModal.OptionsBar>
                                    <DetailedModal.PlayBtn>
                                    <AiFillCaretRight />
                                    </DetailedModal.PlayBtn>
                                    <DetailedModal.EmoBtn>
                                    <AiOutlinePlus />
                                    </DetailedModal.EmoBtn>
                                </DetailedModal.OptionsBar>
                            </DetailedModal.RecommendedNumberInfoFrame>
                            <Card.ItemType>
                                Action - Adventure - Sci-Fi
                            </Card.ItemType>
                            {/* <Card.Meta>
                                <Card.SubTitle>{item.title}</Card.SubTitle>
                                <Card.Text>{item.description}</Card.Text>
                            </Card.Meta> */}
                        </Card.Item>
                    ))}
                    </Card.Entities>
                </Card>
            </Card.Wrapper>
        )
    }
    else {
        return null;
    }
}

export default SliderContainer;
