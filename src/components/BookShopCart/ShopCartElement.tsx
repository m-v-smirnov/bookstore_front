import styled from "styled-components";
import { IMAGES_URL } from "../../constants/constants";
import { Icon } from 'react-icons-kit'
import { plusCircle } from 'react-icons-kit/fa/plusCircle';
import { minusCircle } from 'react-icons-kit/fa/minusCircle'
import { addBookToCart, deleteOneBookFromCart } from "../../api/shopCartApi";

type Props = {
  _id: string,
  amount: number,
  cover: string,
  price: number,
  title: string,
  author: string,
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
  }

  const onPlusClick = async () => {
    try {
      const option = { bookId: props._id }
      await addBookToCart(option);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <StyledDiv>
      <div className="cart-element">
        <img
          className="cart-element__cover"
          src={cover}
          alt="cover"
        />
        <div
          className="cart-element__texts"
        >
          <p>{props.title}</p>
          <p>{props.author}</p>
        </div>
        <div
          className="cart-element__sales"
        > <div>
            <div>{props.price * props.amount} ₽</div>
            <div>ea {props.price} ₽</div>
          </div>
          <div className="cart-element__buttons">
            <button
              className="cart-element__minus"
              onClick={onMinusClick}
            >
              <Icon size={'75%'} icon={minusCircle} />
            </button>
            <div className="cart-element__amount">{props.amount}</div>
            <button
              className="cart-element__minus"
              onClick={onPlusClick}
            >
              <Icon size={'75%'} icon={plusCircle} /></button>
          </div>
        </div>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: 600px;
  margin: 20px auto;
  .cart-element {
    display: flex;
    justify-content: space-between;
    &__cover {
      width: 80px;
      height: 134px;
      object-fit: contain;
    }
    &__texts {
      width: 260px;
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
      display: flex;
      align-items: center;

    }
    &__amount {
      
      margin: 0 10px;
      width: 40px;
      text-align: center;
    }
    &__minus {
        width: 50px;
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
  }
`;
