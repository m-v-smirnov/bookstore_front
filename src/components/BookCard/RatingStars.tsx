import styled from "styled-components";
import { Icon } from 'react-icons-kit'
import { ic_star_rate_outline } from 'react-icons-kit/md/ic_star_rate_outline'
import { useState } from "react";
import { addBookRating } from "../../api/bookApi";
import { useAppSelector } from "../../hooks";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import classNames from "classnames";

type Props = {
  bookId: string
};
const rates = [1, 2, 3, 4, 5];

export const RatingStars: React.FC<Props> = (props) => {
  const [rate, setRate] = useState(0);
  const { user } = useAppSelector((state) => state.user);
  const history = useHistory();

  const onStarsClick = async (item: number, bookId: string) => {
    if (!user) return history.push('/login');
    try {
      const options = {
        rating: item,
        bookId: bookId
      };
      await addBookRating(options);
    } catch (error: any) {
      toast.error(String(error.response.data.message));
    }
  }

  return (
    <StyleDiv>
      <div>{
        rates.map((item) => {
          return (
            <button
              key={`${item}-star`}
              className={classNames("rating__star",
                { "rating__star--blue": (rate >= item) })}
              onMouseOver={() => {
                setRate(item)
              }}
              onMouseOut={() => {
                setRate(0)
              }}
              onClick={() => {
                onStarsClick(item, props.bookId)
              }}
            >
              <Icon size={'100%'} icon={ic_star_rate_outline} />
            </button>
          )
        })
      }
      </div>
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
      color: #0059ff;
      
    }
  }
`; 