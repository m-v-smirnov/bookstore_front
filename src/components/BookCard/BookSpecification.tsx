import styled from "styled-components";

type Props = {

};

export const BookSpecification: React.FC<Props> = (props) => {
  return (
    <StyledDiv>
      <ul className="specifications">
        <li>Spec 1</li>
        <li>Spec 2</li>
        <li>Spec 3</li>
        <li>Spec 4</li>
        <li>Spec 5</li>
        <li>Spec 6</li>
      </ul>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  ul.specifications {
  }
  ul.specifications li {
    list-style-type: none;
    margin: 5px 0;
  }
`;