/*
 * ContactPage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.ContactPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Contact',
  },
  contactDescription: {
    id: `${scope}.contactDescription`,
    defaultMessage: 'Description',
  },
});
