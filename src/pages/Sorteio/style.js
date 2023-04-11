import styled from "styled-components";

export const SorteioStyled = styled.section`
footer {
  margin: 64px 0;
}

.resultado {
  color: #FE652BFC;
  font-size: 25px;
}

button {
  width: 350px;
  height: 80px;
  font-size: 20px;
  box-shadow: 2px 2px 0px 1px #000000;
  border-radius: 45px;
  background-color: #FE652B;
  color: #FFF;
  cursor: pointer;
  margin: 16px 0;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

button{
  background-color: #4B69FD;
}

select {
  border-radius: 45px;
  height: 82px;
  width: 70%;
  box-sizing: border-box;
  padding: 0 32px;
  font-size: 20px;
  border: 2px solid black;
  box-shadow: 0px 2px 0px 1px #000000;
}
select:focus {
  outline: none;
}

p {
  font-size: 20px;
  font-weight: 200;
  margin: 32px 0;
}

@media screen and (max-width: 800px) {
  select {
      width: 100%;
  }
  button {
    width: 220px;
    margin: 32px 0;
  }
}
`