import styled from "styled-components";

type Props = {

};

export const SortingColumns: React.FC<Props> = (props) => {
  return (
    <StyledDiv>
      <div className="sorting-container" >
        <h2>Books</h2>
        <div>
          <p>Genres:</p>
        </div>
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
    .sorting-container {
      margin: 0 10px;
      width: 180px;
      display: flex;
      flex-direction: column;
    }

`;