import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import {  getBookRating } from "../../api/bookApi";

type Props = {
  bookId: string
};

export const BookRating: React.FC<Props> = (props) => {
  const [bookRating, setBookRating] = useState(0);
  console.log(`>>> book: ${props.bookId}`);

  useEffect(() => {
    const getBookRatingData = async () => {
      try {

        const result = await getBookRating({ bookId: props.bookId });
        if(result.rating) setBookRating(result.rating);
      }
      catch (error: any) {
        toast.error(String(error.response.data.message));
      }
    }
    getBookRatingData();
  }, []);

  return (
    <StyledDiv>
      <div>Book rating</div>
      <div>{bookRating.toFixed(2)}</div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  padding: 5px;
  border: 0px solid grey;
  background-color: #dfdede;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  color: #0059ff;
  
`;