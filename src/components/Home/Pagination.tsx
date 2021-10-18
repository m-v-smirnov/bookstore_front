import styled from "styled-components";
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_left} from 'react-icons-kit/md/ic_keyboard_arrow_left';

type Props = {
  totalPages: number,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  hasPrevPage: boolean,
  hasNextPage: boolean
};

export const Pagination: React.FC<Props> = (props) => {
  let numbersArray: (number | null)[]=[];

  if(props.totalPages < 7) {
    for (let index = 1; index <= props.totalPages; index++) {
      numbersArray.push(index);
      
    }
  }
  
  else if (props.page < 4) {
    numbersArray = [
      1,
      2,
      3,
      4,
      null,
      +props.totalPages
    ]
  }
  else if (props.page >= props.totalPages - 3) {
    numbersArray = [
      1,
      null,
      +props.totalPages - 3,
      +props.totalPages - 2,
      +props.totalPages - 1,
      +props.totalPages
    ]
  }
  else {
    numbersArray = [
      1,
      null,
      +props.page,
      +props.page + 1,
      +props.page + 2,
      null,
      +props.totalPages
    ]
  }


  return (
    <StyledDiv>
      <button
        hidden={!props.hasPrevPage}
        className="page__prev"
        onClick={() => {
          props.hasPrevPage
            ? props.setPage(+props.page - 1)
            : props.setPage(+props.page)
        }}
      >
        <Icon size={'100%'} icon={ic_keyboard_arrow_left} />
      </button>
      {numbersArray.map((item) => {
        return (
          <button
          key={`pag_key_${item}`}
            onClick={() => {
              if (item) {
                props.setPage(item);
              }
            }}
            className={(item === (+props.page))
              ? "page__button--active"
              : "page__button"
            }
          >
            {item ? item : "..."}
          </button>
        )
      })}
      <button
        hidden={!props.hasNextPage}
        className="page__next"
        onClick={() => {
          props.hasNextPage
            ? props.setPage(+props.page + 1)
            : props.setPage(+props.page)
        }}
      >
        <Icon size={'100%'} icon={ic_keyboard_arrow_left} />
      </button>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  margin: 20px auto;
  height: 28px;
  display: flex;
  justify-content: center;
  .page {
    &__button {
      border: 0;
      width: 30px;
      background-color: #ffffff; 
      cursor: pointer; 
      &:hover {
        background-color: #e4dede; 
      }
      &--active {
        border: 0;
        width: 30px;
        background-color: #0059ff;
        color: white;
        cursor: pointer;
      }   
    }
    &__next {
      width: 40px;
      transform: rotate(180deg);
      border: 0;
      background-color: #ffffff; 
      cursor: pointer;
      color: #0059ff;
    }
    &__prev {
      width: 40px;
      border: 0;
      background-color: #ffffff; 
      cursor: pointer;
      color: #0059ff;
    }
  }
`;