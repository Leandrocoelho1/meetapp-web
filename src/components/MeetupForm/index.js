import React from 'react';
import { Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import { StyledForm } from './styles';
import BannerInput from './BannerInput';
import DatePicker from './DatePicker';

const schema = Yup.object().shape({
  file_id: Yup.number().required('Insira uma imagem para seu meetup'),
  title: Yup.string()
    .min(5)
    .required('Insira um título para seu Meetup'),
  description: Yup.string()
    .min(5)
    .required('Descreva seu meetup'),
  date: Yup.date().required('Defina a data do seu meetup'),
  location: Yup.string()
    .min(5)
    .required('Insira o local do seu meetup')
});

export default function MeetupForm(props) {
  const { initialValues, editMode } = props;

  async function handleSubmit(data) {
    if (editMode) {
      try {
        await api.put(`/meetups/${initialValues.id}`, data);
        toast.success('Meetup editado com sucesso');
        history.push(`/meetup/${initialValues.id}`);
      } catch (err) {
        toast.error(err.response.data.error);
      }
    } else {
      try {
        const meetup = await api.post('meetups', data);
        toast.success('Meetup criado com sucesso');
        history.push(`/meetup/${meetup.data.id}`);
      } catch (err) {
        toast.error(err.response.data.error);
      }
    }
  }

  return (
    <StyledForm
      schema={schema}
      initialData={initialValues}
      onSubmit={handleSubmit}
    >
      <BannerInput name="file_id" />
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

MeetupForm.propTypes = {
  initialValues: PropTypes.shape({
    banner: PropTypes.object,
    createdAt: PropTypes.object,
    date: PropTypes.object,
    description: PropTypes.string,
    file_id: PropTypes.number,
    id: PropTypes.number,
    location: PropTypes.string,
    past: PropTypes.bool,
    title: PropTypes.string,
    updatedAt: PropTypes.object,
    user_id: PropTypes.number
  }),
  editMode: PropTypes.bool
};

MeetupForm.defaultProps = {
  initialValues: {},
  editMode: false
};
