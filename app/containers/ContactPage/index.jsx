/**
 * app/containers/ContactPage
 * @author bruno prdt
 */
import React from 'react';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
// import messages from './messages';
export default function ContactPage() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
      </H1>

    </div>
  );
}
