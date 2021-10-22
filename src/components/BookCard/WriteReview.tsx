import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import { addBookReview } from "../../api/bookApi";
import { StyledButton } from "../StyledComponents";

type Props = {
  bookId: string
};

type ReviewAddType = {
  review: string
}

export const WriteReview: React.FC<Props> = (props) => {
  const { register, handleSubmit,
    // formState: { errors }
  } = useForm<ReviewAddType>();

  const onSubmit: SubmitHandler<ReviewAddType> = async (data) => {
    try {
      await addBookReview(
        {
          bookId: props.bookId,
          review: data.review
        }
      );
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <StyledDiv>
      <form
        className="review-form"
        id='review-form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          className="review-form__label"
          htmlFor="review_text"
        >
          New review
        </label>
        <textarea
          className="review-form__text"
          id="review_text"
          {...register("review")}
        />
          <StyledButton
            type="submit"
            className="review-form__submit"
          >
            Send
          </StyledButton>
      </form>
    </StyledDiv >
  )
};


const StyledDiv = styled.div`
  .review-form {
    display: flex;
    flex-direction: column;
    &__label {
      margin: 10px 0;
    }
    &__text {
      margin-bottom: 20px;
      width: 500px;
      height: 140px;
      padding: 10px 15px;
      border-radius: 5px;
      border: 2px solid #5d97ff;
      outline: none;
      resize: none;
      &:focus {
        border-color: #0059ff;
      }
    }
    &__submit {
      width: 300px;
    }
  }
`;