import React from 'react'
import { DetailedModal } from '../components';
import { 
    AiFillCaretRight, 
    AiOutlinePlus, 
    AiOutlineLike, 
    AiTwotoneLike, 
    AiOutlineDislike, 
    AiTwotoneDislike  
} from 'react-icons/ai';
import RecommendedFilmContainer from './recommended_films_container';
const DetailedModalContainer = ({setShowDetailedFilmModal}) => {
    return (
        <DetailedModal>
            <DetailedModal.VideoContainer>
                <DetailedModal.CloseBtn 
                    onClick={() => setShowDetailedFilmModal(false)}
                />
                <DetailedModal.OptionsBar>
                    <DetailedModal.PlayBtn>
                        <AiFillCaretRight />
                        Play
                    </DetailedModal.PlayBtn>
                    <DetailedModal.EmoBtn>
                        <AiOutlinePlus />
                    </DetailedModal.EmoBtn>
                    <DetailedModal.EmoBtn>
                        <AiOutlineLike />
                    </DetailedModal.EmoBtn>
                    <DetailedModal.EmoBtn>
                        <AiOutlineDislike />
                    </DetailedModal.EmoBtn>
                </DetailedModal.OptionsBar>
            </DetailedModal.VideoContainer>
            <DetailedModal.DetailedInfoContainer>
                <DetailedModal.InfoContainer>
                    <DetailedModal.DetailedInfoFrame>
                        <DetailedModal.InfoHeader>
                            About <span>Man of Stell</span>
                        </DetailedModal.InfoHeader>
                        <DetailedModal.NumberInfo>
                            7.0 <h6>IMDb</h6> 2013 <span>13+</span> <span>HD</span>
                        </DetailedModal.NumberInfo>
                        <DetailedModal.DescriptionInfo>
                            An alien child is evacuated from his dying world and sent to earth
                            to live among humans. His peace is threated, when other survivors of his home planet invade Earth.
                        </DetailedModal.DescriptionInfo>
                    </DetailedModal.DetailedInfoFrame>
                    <DetailedModal.GeneralInfoFrame>
                        <DetailedModal.GeneralInfo>
                            <span>Casts: </span> Henry Cavill, Amy Dams, Michael Shannon, Diane Lane, Russell Crowe, Antje Traue, Harry Lennix, Richard Schiff.
                        </DetailedModal.GeneralInfo>
                        <DetailedModal.GeneralInfo>
                            <span>Genre: </span> Action, Adventure, Sci-Fi.
                        </DetailedModal.GeneralInfo>
                    </DetailedModal.GeneralInfoFrame>
                </DetailedModal.InfoContainer>
                <DetailedModal.RecommendedFilmGroup>
                    <h1>More Like This</h1>
                    <DetailedModal.RecommendedFilmContainer>
                        <RecommendedFilmContainer />
                        <RecommendedFilmContainer />
                        <RecommendedFilmContainer />
                        <RecommendedFilmContainer />
                        <RecommendedFilmContainer />
                        <RecommendedFilmContainer />
                    </DetailedModal.RecommendedFilmContainer>
                </DetailedModal.RecommendedFilmGroup>
            </DetailedModal.DetailedInfoContainer>
        </DetailedModal>
    )
}

export default DetailedModalContainer;
