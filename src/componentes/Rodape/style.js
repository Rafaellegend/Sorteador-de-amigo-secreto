import styled from "styled-components";

export const RodapeStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    width: 350px;
    height: 80px;
    font-size: 20px;
    box-shadow: 2px 2px 0px 1px #000000;
    border-radius: 45px;
    background-color: #FE652B;
    color: #FFF;
    cursor: pointer;
}

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  button:hover {
    background-color: #4B69FD;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    img {
        margin-top: 32px;
    }
    button {
        width: 220px;
        margin: 32px 0;
    }
  }
`