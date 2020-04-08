/*
 * SearchPage
 *
 * List
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Search Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>LE beau h1 de la search page</H1>
    </div>
  );
}
