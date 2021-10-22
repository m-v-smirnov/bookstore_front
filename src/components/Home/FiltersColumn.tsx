import styled from "styled-components";
import { GenreFilter } from "./GenreFilter";
import { PriceFilter } from "./PriceFilter";

type Props = {};

export const SortingColumns: React.FC<Props> = (props) => {

  return (
    <StyledDiv>
      <div className="sorting-container" >
        <h2>Books</h2>
        <GenreFilter />
        <PriceFilter />
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
    .sorting-container {
      margin: 0 10px;
      width: 200px;
      display: flex;
      flex-direction: column;
    }
`;