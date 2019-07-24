import React from 'react';
import { Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { StyledForm } from './styles';
import AvatarInput from './AvatarInput';
import DatePicker from './DatePicker';

export default function MeetupForm() {
  async function handleSubmit(data) {
    try {
      const meetup = await api.post('meetups', data);
      toast.success('Meetup criado com sucesso');
      history.push(`/meetup/${meetup.data.id}`);
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <AvatarInput name="file_id" />
      <Input name="title" placeholder="Título do Meetup" />
      <Input name="description" multiline placeholder="Descrição completa" />
      <DatePicker name="date" />
      <Input name="location" placeholder="Localização" />
      <button type="submit">
        <MdAddCircleOutline />
        Salvar Meetup
      </button>
    </StyledForm>
  );
}
