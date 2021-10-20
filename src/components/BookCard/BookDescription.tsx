import styled from "styled-components";

type Props = {
  description: string,
};

export const BookDescription: React.FC<Props> = (props) => {
  return (
    <StyledDiv>{props.description}</StyledDiv>
  )
}

const StyledDiv = styled.div`
`; 
