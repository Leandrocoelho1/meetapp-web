import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function Default({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired
};
