import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookType, getBookById } from "../../api/bookApi";
import { IMAGES_URL } from "../../constants/constants";

type Props = {
  bookId: string,
};



export const BookCard: React.FC<Props> = (props) => {
  
  const [book, setBook] = useState<BookType>();
  const cover = IMAGES_URL
  + (book?.coverRefId ? book.coverRefId.fileRef
    : "defaultcover.png");

  useEffect(() => {
    const getBookData = async () => {
      try {
        const result = await getBookById({bookId:props.bookId});
        setBook(result.book);
      } 
      catch (error) {
        console.log(error);
          
      }
    }
    getBookData();
    
  }, []);
 
  return (
    <StyledDiv>
      <p>{book?.author}</p>
      <p>{book?.title}</p>
      <div>
        <img src={cover} alt="" />
        <div>
          <div>Ratings</div>
          <div>
            <div>{book?.price}</div>
            {book?.sale ? <div>Sale</div> : <div></div>}
          </div>
          <button>Add</button>
        </div>
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
`;