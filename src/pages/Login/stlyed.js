import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
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
    border-radius: 4px;
  }
`;
export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: bold;
`;
