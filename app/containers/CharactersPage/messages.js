/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.CharactersPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Page de recherche des personnages Marvel',
  },
  textfieldLabel: {
    id: `${scope}.textfieldLabel`,
    defaultMessage: 'Rechercher',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Envoyer',
  },
});
