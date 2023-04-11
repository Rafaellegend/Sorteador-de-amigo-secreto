import styled from "styled-components";

export const FormStyled = styled.div`
  margin-bottom: 32px;
  input {
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    height: 82px;
    width: 70%;
    box-sizing: border-box;
    padding-left: 32px;
    font-size: 20px;
    border: 2px solid black;
    box-shadow: 0px 2px 0px 1px #000000;
  }
  input:focus {
    outline: none;
  }

  button {
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    height: 82px;
    width: 30%;
    box-sizing: border-box;
    border: 2px solid black;
    font-size: 20px;
    color: #000000;
    box-shadow: 2px 2px 0px 1px #000000;
    cursor: pointer;
    background-color: #c4c4c4;
  }

  button:hover {
    opacity: 0.8;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

.alerta.erro {
    color: #842029;
    background-color: #f8d7da;
    padding: 16px;
    border: 1px solid #f5c2c7;
    border-radius: 8px;
}

@media screen and (max-width: 800px) {
    .alerta {
        margin: 48px 0;
    }
    input {
      display: block;
      width: 100%;
      border-radius: 45px;
      box-shadow: 0px 2px 0px 1px #000000;    
      margin-bottom: 18px;
    }
    button {
      display: block;
      margin-top: 16px;
      margin: 0 auto;
      width: 220px;
      border-radius: 45px;
    }
}`