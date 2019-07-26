import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdCancel, MdDateRange, MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import { toast } from 'react-toastify';

import { Container, Header, Content, Details, Loading } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Meetup(props) {
  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState({});
  const { match } = props;

  useEffect(() => {
    async function getMeetup() {
      const response = await api.get(`meetups/organizing/${match.params.id}`);

      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const date = parseISO(response.data.date);
      const timeZonedDate = utcToZonedTime(date, userTimezone);
      const formattedDate = format(timeZonedDate, "d' de 'MMMM', às 'k'hs'", {
        locale: pt
      });

      const loadedMeetup = { ...response.data, formattedDate };

      setMeetup(loadedMeetup);
      setLoading(false);
    }

    getMeetup();
  }, [loading, match.params.id, props]);

  async function handleCancel() {
    await api.delete(`meetups/${match.params.id}`);
    toast.success('Meetup cancelado com sucesso');
    history.push('/dashboard');
  }

  return loading ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    <Container>
      <Header>
        <h1>{meetup.title}</h1>

        <nav>
          <Link to={`/meetup/edit/${match.params.id}`}>
            <button type="button">
              <MdEdit />
              Editar
            </button>
          </Link>
          <button type="button" onClick={handleCancel}>
            <MdCancel />
            Cancelar
          </button>
        </nav>
      </Header>

      <Content>
        <img src={meetup.banner.url} alt={meetup.banner.name} />
        <p>{meetup.description}</p>
        <Details>
          <div className="">
            <MdDateRange size={20} color="rgba(255, 255, 255, 0.6)" />
            {meetup.formattedDate}
          </div>
          <div className="">
            <MdLocationOn size={20} color="rgba(255, 255, 255, 0.6)" />
            {meetup.location}
          </div>
        </Details>
      </Content>
    </Container>
  );
}

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
};
