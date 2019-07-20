import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Preencha seu nome completo')
      .required('Nome obrigatório'),
    email: Yup.string()
      .email()
      .required('E-mail obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .required('Senha obrigatória')
  });

  const dispatch = useDispatch();

  const loading = useSelector(state => state.authReducer.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Criar conta'}
        </button>
      </Form>
      <Link to="/">Já tenho login</Link>
    </>
  );
}
