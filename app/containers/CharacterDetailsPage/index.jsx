/*
 * SearchPage
 *
 * List
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';
import { FormattedMessage } from 'react-intl';
import messages from '../CharactersPage/messages';

export default function CharacterDetailsPage() {
  return (
    <div>
      <Helmet>
        <title>CharacterDetailsPage</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </div>
  );
}
