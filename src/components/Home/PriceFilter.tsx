import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { PriceRange } from "../../store/booksSorting/bookSortingTypes";
import { useAppDispatch } from "../../hooks";
import { setPriceFilter } from "../../store/booksSorting/bookSortingActions";
import { StyledButton, StyledInput } from "../StyledComponents";

type Props = {};

export const PriceFilter: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit,
    //formState: { errors }
  } = useForm<PriceRange>();
  const onSubmit: SubmitHandler<PriceRange> = async (data) => {
    dispatch(setPriceFilter(data));
  };

  return (
    <StyledDiv>
      <p>Price:</p>
      <form
        className="price-filter"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="priceMin">min</label>
          <StyledInput
            className="price-filter__input"
            id="priceMin"
            type="number"
            {...register("priceMin")}
          />
        </div>
        <div>
          <label htmlFor="priceMax">max</label>
          <StyledInput
            className="price-filter__input"
            id="priceMax"
            type="number"
            {...register("priceMax")}
          />
        </div>
        <StyledButton
          type="submit"
          className="price-filter__button"
        >
          sort by price
        </StyledButton>
      </form>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  .price-filter {
    height: 140px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__button {
      width: 120px;
      height: 25px;
    }
    &__input {
      height: 20px;
    }
  }
`;