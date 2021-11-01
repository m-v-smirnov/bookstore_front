import styled from "styled-components";
import { IMAGES_URL } from "../../constants/constants";
import { Icon } from 'react-icons-kit'
import { plusCircle } from 'react-icons-kit/fa/plusCircle';
import { minusCircle } from 'react-icons-kit/fa/minusCircle'
import {
  addBookToCart,
  deleteBooksFromCart,
  deleteOneBookFromCart
} from "../../api/shopCartApi";
import { Link } from "react-router-dom";

type Props = {
  _id: string,
  amount: number,
  cover: string,
  price: number,
  title: string,
  author: string,
  changeStatus: boolean,
  setChangeStatus: React.Dispatch<React.SetStateAction<boolean>>
}

export const ShopCartElement: React.FC<Props> = (props) => {
  const cover = IMAGES_URL + props.cover;
  const onMinusClick = async () => {
    try {
      const option = { bookId: props._id }
      await deleteOneBookFromCart(option);
    } catch (error) {
      console.log(error);
    }
    props.setChangeStatus(!props.changeStatus);
  }

  const onPlusClick = async () => {
    try {
      const option = { bookId: props._id }
      await addBookToCart(option);
    } catch (error) {
      console.log(error);
    }
    props.setChangeStatus(!props.changeStatus);
  }
  const onDelClick = async () => {
    try {
      const option = { bookId: props._id }
      await deleteBooksFromCart(option);
    } catch (error) {
      console.log(error);
    }
    props.setChangeStatus(!props.changeStatus);
  }

  return (
    <StyledDiv>
      <div className="cart-element">
        <Link to={`/book/${props._id}`}>
          <img
            className="cart-element__cover"
            src={cover}
            alt="cover"
          />
        </Link>
        <div
          className="cart-element__texts"
        >
          <p>{props.title}</p>
          <p>{props.author}</p>
        </div>
        <div className="cart-element__buttons">
          <button
            className="cart-element__minus"
            onClick={onMinusClick}
          >
            <Icon size={'65%'} icon={minusCircle} />
          </button>
          <div className="cart-element__amount">{props.amount}</div>
          <button
            className="cart-element__minus"
            onClick={onPlusClick}
          >
            <Icon size={'65%'} icon={plusCircle} /></button>
        </div>
        <div className="cart-element__price" >{props.price} ₽</div>
        <div className="cart-element__price">{props.price * props.amount} ₽</div>
        <div className="cart-element__delete">
          <button
            title="delete book(s)"
            className="cart-element__x"
            onClick={onDelClick}
          >x</button>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 800px;
  margin: 10px auto;
  .cart-element {
    display: flex;
    align-items: center;
    &__cover {
      width: 80px;
      height: 134px;
      margin: 0 10px;
      object-fit: contain;
    }
    &__texts {
      width: 260px;
      margin: 0 10px;
    }
    &__sales {
      padding: 20px 0;
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }
    &__buttons {
      width: 80px;
      margin: 0 10px;
      display: flex;
      align-items: center;

    }
    &__amount {
      width: 20px;
      text-align: center;
    }
    &__minus {
        width: 40px;
        text-align: center;
        color: #0059ff;;
        font-size: 14px;
        cursor: pointer;
        border: 0;
        background-color: white;
        &:hover{
        color: #00379e;
       }
    }
    &__price {
      width: 100px;
      margin: 0 10px;
      text-align: center;
    }
    &__delete {
      width: 60px;
      margin: 0 10px;
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__x {
      border: 0;
      background-color: white;
      color: darkred;
      cursor: pointer;
      font-size: 16px;
      font-weight: 700;
      &:hover{
        color: red;
      }
    }
  }
`;
