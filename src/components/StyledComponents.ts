import styled from "styled-components";



export const StyledInput = styled.input`
  height: 30px;
  width: auto;
  padding: 5px 15px;
  border-radius: 5px;
  border: 2px solid #5d97ff;
  outline: none;
  &:focus {
    border-color: #0059ff;
  }

`;

export const StyledButton = styled.button`
  padding: 5px auto;
  height: 30px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #0059ff;
  color: white;
  font-size: 22px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background-color: #00379e;
  }
`;

export const StyledSelect = styled.select`
  height: 42px;
  width: auto;
  padding: 5px 15px;
  border-radius: 5px;
  border: 2px solid #5d97ff;
  outline: none;
  background-color: white;
  &:focus {
    border-color: #0059ff;
  }

`;