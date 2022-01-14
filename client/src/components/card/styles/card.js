import styled from 'styled-components/macro';
export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.5s ease 0.5ms;
  overflow; hidden;
  z-index: 1000;
  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 50px;
  position: relative;
`;

export const Group = styled.div`
  display: flex;
  margin-top: -100px;
  overflow: hidden;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  // > ${Container}:first-of-type {
  //   @media (min-width: 1100px) {
  //     margin-top: -100px;
  //   }
  // }
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;

export const ItemType = styled.div`
  position: absolute;
  font-size: 12px;
  color: #fff;
  z-index: 100;
  bottom: 10px;
  margin-left: 10px;
  display: none;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
  min-width: 240px;
  &:hover {
    transform: scale(1.5);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover .recommended-number-info__frame, &:hover ${ItemType} {
      display: flex;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 56px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
  .recommended-number-info__frame {
    display: none;
    position: absolute;
    margin: 0px auto;
    bottom: 20px;
    width: 100%;
    padding: 0px 10px;
    .number-info__frame {
      font-size: 10px;
      h5 {
        font-size: 10px;
        line-height: normal;
        margin: 0;
        font-weight: bold;
        color: #46d369;
        margin-right: 3px;
      }
    }
  }
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
  &:hover {
    ${Item} {
      transform: translateX(-25%);
    }
    ${Item}:hover {
      transform: scale(1.5);
      z-index: 99;
    }
  }
  ${Item}:hover ~ ${Item} {
    transform: translateX(25%);
  }
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
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

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
  border-radius: 15px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;



export const SlideButton = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 55px;
    height: 135px;
    background: rgba(0, 0, 0, 0.5);
    border: 0;
    outline: 0;
    padding: 0;
    z-index: 4;
    ${({ next }) => (next ? 'right: 0; span{transform: rotateZ(-90deg);}' : '')};
    ${({ prev }) => (prev ? 'left: 0; span{transform: rotateZ(90deg);}' : '')};
    transform: translateY(52px);
    span {
      width: 25px;
      color: #fff;
      display: block;
      margin: 0 auto;
    }
    z-index: 10000;
    &:hover {
      opacity: 1.5;
    }
`;

// &:next {
//   right: 0;
//   span {
//       transform: rotateZ(-90deg);
//   }
// }
// &:prev {
//   left: 0;
//   span {
//       transform: rotateZ(90deg);
//   }
// }