import { useEffect, useState } from "react"
import styled from "styled-components"
import { BooksCartResponseType, BooksCartType, getBooksFromCart } from "../../api/shopCartApi";
import { DEFAULT_COVER } from "../../constants/constants";
import { ShopCartElement } from "./ShopCartElement";

type Props = {}

export const BookShopCart: React.FC<Props> = (props) => {
  const [bookCart, setBookCart] = useState<BooksCartType[]>([]);
  useEffect(() => {
    const getBookFromCartData = async () => {
      try {
        const result = await getBooksFromCart();
        setBookCart(result.bookCart);
      } catch (error: any) {
        console.log(error);
      }
    }
    getBookFromCartData();
  }, [])
  return (
    <StyledDiv>
      <p className="shopcart__header" >Shopping list:</p>
      <div className="hopcart__list">
        {bookCart.map((item) => {
          return (
            <div key={item._id}>
              <ShopCartElement 
              _id={item.bookId._id}
              amount={item.amount}
              cover={item.bookId.coverRefId?.fileRef || DEFAULT_COVER}
              author={item.bookId.author}
              price={item.bookId.price}
              title={item.bookId.title}
              />
            </div>
          )
        })}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin: 20px auto;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .shopcart{
    &__header {
      margin: 40px auto;
      font-weight: 600;
      font-size: 22px;
    }
    &__list {
      display: flex;
      flex-direction: column;
    }
  }
`;