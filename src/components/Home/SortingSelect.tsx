import styled from "styled-components";
import { useAppDispatch } from "../../hooks";
import { setSorting } from "../../store/booksSorting/bookSortingActions";
import { StyledSelect } from "../StyledComponents";

type Props = {};

export const SortingSelect: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  
  const onChangeSelect:React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(setSorting(e.target.value));
  }

  return (
    <StyledDiv>
      <StyledSelect
      className = "sorting__select"
      defaultValue = "default"
      onChange={onChangeSelect}
      >
        <option value="default">by default</option>
        <option value="olderFirst">Date added: older first</option>
        <option value="youngerFirst">Date added: younger first</option>
        <option value="expensiveFirst">Price: high to low</option>
        <option value="cheapFirst">Price: low to high</option>
      </ StyledSelect>

    </StyledDiv>    
  )
};

const StyledDiv = styled.div`
  .sorting {
    &__select {
      height: 25px;
    }
  }
`;