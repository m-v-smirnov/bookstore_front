import styled from "styled-components";
import { Reviews } from "./Reviews";
import { WriteReview } from "./WriteReview";

type Props = {
  bookId: string
};

export const BooksReviews: React.FC<Props> = (props) => {
  return (
    <StyledDiv>
      <Reviews bookId={props.bookId}/>
      <WriteReview  bookId={props.bookId}/>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
`;