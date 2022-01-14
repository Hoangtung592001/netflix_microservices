import React, { useState } from "react";
import { DetailedModal } from "../components";
import {
  AiFillCaretRight,
  AiOutlinePlus,
  AiOutlineLike,
  AiTwotoneLike,
  AiOutlineDislike,
  AiTwotoneDislike,
} from "react-icons/ai";
const RecommendedFilmContainer = () => {
  const [hoverPoster, setHoverPoster] = useState(true);
  return (
    <DetailedModal.RecommendedFilmFrame>
      {hoverPoster ? 
        <DetailedModal.PosterContainer/>
        :
        <DetailedModal.VideoContainer />
      }
      
      <DetailedModal.RecommendedDetailedInfoContainer>
        <DetailedModal.RecommendedNumberInfoFrame>
          <DetailedModal.NumberInfo>
            <span>13+</span>7.0<h6>IMDb</h6>
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
        <DetailedModal.InfoHeader>
          <span>Gozilla: Kings of the monsters</span>
        </DetailedModal.InfoHeader>
        <DetailedModal.DescriptionInfo>
          An alien child is evacuated from his dying world and sent to earth to
          live among humans. His peace is threated, when other survivors of his
          home planet invade Earth.
        </DetailedModal.DescriptionInfo>
      </DetailedModal.RecommendedDetailedInfoContainer>
    </DetailedModal.RecommendedFilmFrame>
  );
};

export default RecommendedFilmContainer;
