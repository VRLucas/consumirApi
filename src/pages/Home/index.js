import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyled';

import { Title, Paragrafo } from './styled';
import { toast } from 'react-toastify';

import axios from '../../service/axios';

export default function Login() {
  return (
    <Container>
      <Title>Welcome My WebSite</Title>
      <Paragrafo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
        reiciendis mollitia aut quidem quae omnis, necessitatibus maxime
        possimus molestiae dolores, tempora, magni deleniti cumque maiores ipsam
        facere. Tempore, expedita.
      </Paragrafo>
    </Container>
  );
}
