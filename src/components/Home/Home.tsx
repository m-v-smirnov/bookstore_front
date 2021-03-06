import styled from "styled-components";
import { BooksArea } from "./BooksArea";
import { SortingColumns } from "./FiltersColumn";

type Props = {};

export const Home: React.FC<Props> = (props) => {

  return (
    <StyledDiv>
      <div className="home-container">
        <SortingColumns />
        <BooksArea/>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
    .home-container {
      margin: 0 auto;
      width: 1100px;
      display: flex;
      justify-content: space-around;
    }

`;