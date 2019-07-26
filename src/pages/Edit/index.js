import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import api from '~/services/api';

import MeetupForm from '~/components/MeetupForm';
import { Container } from './styles';

export default function Create(props) {
  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState({});
  const { match } = props;

  useEffect(() => {
    async function getMeetup() {
      const response = await api.get(`meetups/organizing/${match.params.id}`);
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const date = parseISO(response.data.date);
      const timeZonedDate = utcToZonedTime(date, userTimezone);
      const loadedMeetup = { ...response.data, date: timeZonedDate };
      setMeetup(loadedMeetup);
      setLoading(false);
    }

    getMeetup();
  }, [loading, match.params.id]);

  return (
    <Container>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MeetupForm editMode initialValues={meetup} />
      )}
    </Container>
  );
}

Create.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
};
