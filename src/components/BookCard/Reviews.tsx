import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { IMAGES_URL } from "../../constants/constants";
import { getBookReviews, ReviewType } from "../../api/bookApi";

type Props = {
  bookId: string
};

export const Reviews: React.FC<Props> = (props) => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);


  useEffect(() => {
    const getReviewsData = async () => {
      try {
        const result = await getBookReviews({ bookId: props.bookId });
        console.log(`>>> result: ${result.reviews[0].review}`);
        setReviews(result.reviews);
      } catch (error: any) {
        toast.warn(error.response.data.message)
      }
    };
    getReviewsData();
  }, []);

  return (
    <StyledDiv>
      {(reviews.length === 0)
        ? <div>Yor review will be first in a list.</div>
        : <div>{reviews.map((item) => {
          const avatar = IMAGES_URL
            + (item.userId.avatarRefId.fileRef ? item.userId.avatarRefId.fileRef
              : "defaultavatar.png");
          console.log(`>>> avatarURL : ${avatar}`);

          return (
            <div key={item._id} className="review">
              <div className="review__user">
                <img className="review__img" src={avatar} alt="" />
                <div className="review__name">{item.userId.fullName} :</div>
              </div>
              <div className="review__text">{item.review}</div>
            </div>
          )
        })}
        </div>
      }
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  margin: 30px auto;
  .review {
    margin: 30px auto;
    border-bottom: 2px solid grey;
    &__user {
      display: flex;
      align-items: center;
    }
    &__img {
      width: 50px;
      height: 50px;
      border-radius: 10px;
    }
    &__name {
      margin: 0 30px;
      font-size: 18px;
      font-weight: 500;
    }
    &__text {
      margin: 20px 0;
    }
  }
`;