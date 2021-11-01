import styled from "styled-components"
import { Icon } from 'react-icons-kit'
import { ic_shopping_cart_outline } from 'react-icons-kit/md/ic_shopping_cart_outline'
import { useEffect, useState } from "react"
import { getBooksFromCart } from "../../api/shopCartApi"
import { useHistory } from "react-router"

type Props = {
  width: string,
}
type StyledProps = {
  width: string,
}
export const CartButton: React.FC<Props> = (props) => {
  const [amount, setAmount] = useState(0);
  const history = useHistory();
  
  useEffect(() => {
    const getBookFromCartData = async () => {
      try {
        const result = await getBooksFromCart();
        if (result.bookCart.length > 0) {
          let counter: number = 0;
          for (let i = 0; i < result.bookCart.length; i++) {
            counter += result.bookCart[i].amount;
          }
          setAmount(counter);
        }
        else {
          setAmount(0);
        }
      } catch (error: any) {
        console.log(error);
        
      }
      
    }
    getBookFromCartData();
  }, []);
  
  const onCartButtonClick = () => {
    history.push('/shopcart');
  }
  
  return (
    <StyledDiv width={props.width}>
      <button
        className="cart-icon__button"
        onClick={onCartButtonClick}
      >
        <Icon size={'100%'} icon={ic_shopping_cart_outline} />
      </button>
      <div hidden={!Boolean(amount)} className="cart-icon__amount">{amount}</div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  width: ${(p: StyledProps) => p.width};
  position: relative;
    .cart-icon{
      &__button {
        align-self: center;
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
      &__amount{
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        top: 0px;
        right: 7px;
        background-color:white;
        color:#0059ff;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
      } 
    }
  `;
