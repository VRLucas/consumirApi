import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
body {
  background-color: ${colors.primaryDarkColor};
  color: ${colors.primaryDarkColor} ;
}
html, body, #root {
  height: 100%;
  width: 100%;
}
button {
  cursor: pointer;
  background-color: ${colors.buttonColor};
  border: none;
  color: #fff;
  padding: 10px 20px ;
  border-radius: 8px;
  margin-left: 20px;

}
a{
  text-decoration: none;
  color: ${colors.primaryColor};
}
ul {
  list-style: none;
}
body .Toastify .Toastify__toast-container .Toastify__toast--success{
  background-color: ${colors.sucessColor};
}
body .Toastify .Toastify__toast-container .Toastify__toast--error{
  background-color: ${colors.errorColor};
  color: #fff;
}


`;

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
