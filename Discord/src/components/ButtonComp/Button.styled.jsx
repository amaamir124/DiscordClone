import styled from "styled-components";

export const Button = styled.button`
  /* width: 60px; */
  padding: 10px 20px;
 
  
  align-self: center;
  font-family:Poppins,sans-serif;
  border-radius: 22px;
  font-size: ${(props) => (props.fs ? props.fs : '14px')};
  background-color: ${(props) => (props.bg ? props.bg : 'white')};
  border: none;
  font-weight: ${(props) => (props.fw ? props.fw : 'normal')};
  color:${(props) => (props.text_color ? props.text_color : 'black')};
  
  &:hover {
    cursor: pointer;
    color: #5165F6;
  }
`;


