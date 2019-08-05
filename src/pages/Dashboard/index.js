import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';

import api from '~/services/api';
import { Container, Header, MeetupList, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups/organizing');

      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = response.data.map(meetup => {
        const date = parseISO(meetup.date);
        const timeZonedDate = utcToZonedTime(date, userTimezone);
        const formattedDate = format(timeZonedDate, "d' de 'MMMM', às 'k'hs'", {
          locale: pt
        });

        return { ...meetup, formattedDate };
      });

      setMeetups(data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Meus Meetups</h1>
        <Link to="/meetup/create">
          <button type="button">
            <MdAddCircleOutline size={20} color="#fff" />
            Novo Meetup
          </button>
        </Link>
      </Header>

      <MeetupList>
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <strong>{meetup.title}</strong>
            <span>{meetup.formattedDate}</span>
            <Link to={`/meetup/${meetup.id}`}>
              <MdChevronRight size={24} color="#fff" />
            </Link>
          </Meetup>
        ))}
      </MeetupList>
    </Container>
  );
}
