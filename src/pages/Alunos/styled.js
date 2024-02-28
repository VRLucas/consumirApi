import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  margin-bottom: 10px;
`;
export const Paragrafo = styled.div`
  margin-top: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #eee;
  }
`;
export const Picture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
export const CadAluno = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
`;
