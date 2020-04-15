/**
 * app/containers/ContactPage
 * @author bruno prdt
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import messages from './messages';
import { MyForm } from './MyForm';
import '../CharactersPage/index.css';

export default function ContactPage() {
  return (
    <div>
      <Helmet>
        <title>Contact Page</title>
        <meta name="description" content="Contact page of Bruno" />
      </Helmet>
      <H1 className="contact-header">
        <FormattedMessage {...messages.header} />
      </H1>
      <MyForm />
    </div>
  );
}
