import { useEffect, useState } from "react"
import styled from "styled-components"
import { BooksCartType, getBooksFromCart } from "../../api/shopCartApi";
import { DEFAULT_COVER } from "../../constants/constants";
import { ShopCartElement } from "./ShopCartElement";

type Props = {}

export const BookShopCart: React.FC<Props> = (props) => {
  const [bookCart, setBookCart] = useState<BooksCartType[]>([]);
  const [changeStatus, setChangeStatus] = useState(false);
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
  }, [changeStatus])
  return (
    <StyledDiv>
      <p className="shopcart__header" >Shopping list:</p>
      <div className="cart-tabs">
        <div className="cart-tabs__book">BOOK</div>
        <div className="cart-tabs__quantity">QUANTITY</div>
        <div className="cart-tabs__price">UNIT PRICE</div>
        <div className="cart-tabs__price">TOTAL PRICE</div>
        <div className="cart-tabs__x">{null}</div>
      </div>
      <div className="hopcart__list">
        {(bookCart.length >0)
          ? bookCart.map((item) => {
            return (
              <div key={item._id}>
                <ShopCartElement
                  _id={item.bookId._id}
                  amount={item.amount}
                  cover={item.bookId.coverRefId?.fileRef || DEFAULT_COVER}
                  author={item.bookId.author}
                  price={item.bookId.price}
                  title={item.bookId.title}
                  changeStatus={changeStatus}
                  setChangeStatus={setChangeStatus}
                />
              </div>
            )
          })
          : <div>Cart is empty</div>
        }
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin: 20px auto;
  width: 800px;
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
  .cart-tabs {
    display: flex;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    margin: 10px auto;
    padding-bottom: 10px;
    border-bottom: 1px solid lightgrey;
    &__book {
      width: 100px;
      margin-right: 280px;
    }
    &__quantity {
      width: 100px;
    }
    &__price {
      width: 120px;
    }
    &__x {
      width: 80px;
    }

  }
`;