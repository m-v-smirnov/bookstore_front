import styled from "styled-components";
import { Icon } from 'react-icons-kit'
import { ic_star_rate_outline } from 'react-icons-kit/md/ic_star_rate_outline'
import { useState } from "react";
import { addBookRating, BookRatingType } from "../../api/bookApi";
import { useAppSelector } from "../../hooks";
import { Redirect } from "react-router";
import { toast } from "react-toastify";

type Props = {
  bookId: string
};
const rates = [1, 2, 3, 4, 5];

const onStarsClick = async (item: number, bookId: string) => {
  try {
    const options = {
      rating: item,
      bookId: bookId
    };
    const result = await addBookRating(options);
  } catch (error: any) {
    toast.error(String(error.response.data.message));
    
  }
}

export const RatingStars: React.FC<Props> = (props) => {
  const [rate, setRate] = useState(0);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const { user } = useAppSelector((state) => state.user);


  return (

    <StyleDiv>{redirectToLogin
      ? <Redirect to="/login" />
      : <div>{
        rates.map((item) => {
          return (
            <button
              key={`${item}-star`}
              className={(rate >= item) ? "rating__star--blue" : "rating__star"}
              onMouseOver={() => {
                setRate(item)
              }}
              onMouseOut={() => {
                setRate(0)
              }}
              onClick={() => {
                if (!user) return setRedirectToLogin(true);
                onStarsClick(item, props.bookId)
              }}
            >
              <Icon size={'100%'} icon={ic_star_rate_outline} />
            </button>
          )
        })
      }
      </div>
    }
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