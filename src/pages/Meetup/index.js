import React, { useState, useEffect } from 'react';
import { MdEdit, MdCancel, MdDateRange, MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';

import { Container, Header, Content, Details, Loading } from './styles';
import api from '~/services/api';

export default function Meetup(props) {
  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function getMeetup() {
      const { match } = props;

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
  }, [loading, props]);

  return loading ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    <Container>
      <Header>
        <h1>{meetup.title}</h1>

        <nav>
          <button type="button">
            <MdEdit />
            Editar
          </button>
          <button type="button">
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
