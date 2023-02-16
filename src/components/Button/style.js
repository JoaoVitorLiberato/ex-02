import styled from "styled-components";

export const Container = styled.button`
  border: none;
  outline: none;
  border-radius: 15px;
  margin: 20px;
  transition: 0.5s all ease-in-out;
  
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: relative;

  &:hover {
    opacity: .4;
    border: 1px solid red;
  }

`

export const Imagem = styled.img`
  width: 330px;
  height: 325px;
  transform: translate(-91px, -87px);
`