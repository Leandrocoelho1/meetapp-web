import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required('E-mail obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .required('Senha obrigatória')
  });

  const loading = useSelector(state => state.authReducer.loading);

  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Acessar'}
        </button>
      </Form>
      <Link to="/register">Criar conta grátis</Link>
    </>
  );
}
