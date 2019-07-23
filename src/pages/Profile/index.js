import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Preencha com seu nome completo')
    .required('Nome é obirgatório'),
  email: Yup.string()
    .email('Formato de e-mail inválido')
    .required('E-mail obirgatório'),
  oldPassword: Yup.string().notRequired(),
  password: Yup.string().when('oldPassword', (oldPassword, field) => {
    return oldPassword
      ? field
          .min(6, 'Senha deve ter no mínimo 6 carcteres')
          .required('Senha é obrigatória')
      : field;
  }),
  confirmPassword: Yup.string().when('password', (password, field) => {
    return password
      ? field
          .required('Confirme sua senha')
          .oneOf([Yup.ref('password')], 'As senhas não são iguais')
      : field;
  })
});

export default function Profile() {
  const profile = useSelector(state => state.userReducer.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />
        <hr />
        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar perfil
        </button>
      </Form>
    </Container>
  );
}
