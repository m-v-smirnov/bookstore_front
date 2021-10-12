import styled from "styled-components";

type Props = {
};

export const Home: React.FC<Props> = (props) => {

  return (
    <StyledDiv>
      <div className="home-container">
        <div>
          Sorting
        </div>
        <div>
          Books
        </div>

      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
    .home-container {
      margin: 0 auto;
      width: 900px;
      display: flex;
      justify-content: space-around;
    }

`;