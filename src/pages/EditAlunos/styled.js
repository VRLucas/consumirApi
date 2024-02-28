import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 28px auto;
  padding: 20px;
`;
export const Label = styled.label`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    &:focus {
      border: 2px solid rgba(0, 0, 0, 0.3);
    }
  }
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;
export const Paragrafo = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  text-align: justify;
`;
export const ProfilePicture = styled.div`
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  align-items: center;
  border-radius: 50%;

  img {
    width: 82px;
    height: 82px;
    border-radius: 50%;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    position: absolute;
    margin: -11px 40px;
    color: #fff;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
