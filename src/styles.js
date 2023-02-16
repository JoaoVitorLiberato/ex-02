import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const ContainerLimitador = styled.div`
  max-width: 1200px;
`

export const Title = styled.div`
  margin-top: 30px;
  color: #FFFFFF;
  width: 300px;
  text-align: center;

  h1 {
    font-size: 60px;
    font-weight: 400;
    line-height: 25px;
  }

  span {
    font-size: 50px;
  }
`

export const ContainerItems = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    h2 {
      color: #fff;
      font-size: 40px;
      font-weight: 400;
      line-height: 25px;
      margin: 0 0 40px 25px;
    }
  }
`

export const ContainerButtons = styled.div`
  width: 100%;
  max-width: 800px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Cart = styled.div`
  width: 440px;
  height: 556px;
  background-color: #F7E0CE;
  padding: 26px;
  border-radius: 80px;
  margin-left: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
export const CartItems = styled.div`
  height: 300px;
  width: 350px;
  background-color: #D3C5BB;
  border-radius: 50px;
  margin-top: 30px;

  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }

  span {
    padding: 0 80px;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
  }

`
export const CartFooter = styled.div`
  background-color: #D3C5BB;
  width: 300px;
  height: 60px;
  border-radius: 50px;
  padding:  5px 20px 0px;


  display: flex;
  justify-content: space-between;

  button{
    border: none;
    background-color: #D3C5BB;
  }

`