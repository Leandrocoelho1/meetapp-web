import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '~/assets/logo.svg';

import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Profile, LogoutButton } from './styles';

export default function Header() {
  const profile = useSelector(state => state.userReducer.profile);
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="MeetApp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <Link to="/profile">Meu Perfil</Link>
          </Profile>
          <LogoutButton onClick={handleLogOut}>Sair</LogoutButton>
        </aside>
      </Content>
    </Container>
  );
}
