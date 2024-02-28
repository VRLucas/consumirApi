import styled from 'styled-components';
import { primaryColor, linkColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: ${linkColor};
    margin: 0 10px 0 0;
  }
`;
