import styled from "styled-components";
import { Icon } from 'react-icons-kit'
import { ic_star_rate_outline } from 'react-icons-kit/md/ic_star_rate_outline'
import { useState } from "react";

type Props = {

};
const rates = [1, 2, 3, 4, 5];
export const RatingStars: React.FC<Props> = (props) => {
  const [rate, setRate] = useState(0);
  return (
    <StyleDiv>
      {rates.map((item) => {
        return (
          <button 
          key={`${item}-star`}
          className={(rate >= item) ? "rating__star--blue" : "rating__star"}
          onMouseOver={() => {
            setRate(item)
          }}
          onMouseOut ={() => {
            setRate(0)
          }}
          >
            <Icon size={'100%'} icon={ic_star_rate_outline} />
          </button>
        )
      })}
    </StyleDiv>
  )
};

const StyleDiv = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  .rating {
    &__star {
      padding: 0%;;
      background-color: white;
      border: 0;
      height: 25px;
      width: 25px;
      color: lightgrey;
      cursor: pointer;
      
    }
    &__star--blue {
      padding: 0%;;
      background-color: white;
      border: 0;
      height: 25px;
      width: 25px;
      color: #0059ff;
      cursor: pointer;
      
    }
  }
`; 