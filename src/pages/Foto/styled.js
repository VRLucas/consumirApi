import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
`;
export const Paragrafo = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  text-align: justify;
`;
export const Form = styled.form`
  label {
    display: flex;
    width: 180px;
    height: 180px;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    background: #eee;
    border: 5px dashed ${colors.primaryDarkColor};
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    overflow: hidden;
    img {
      width: 180px;
      height: 180px;
    }
  }
  input {
    display: none;
  }
`;
