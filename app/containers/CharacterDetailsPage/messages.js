/*
 * CharacterDetailsPage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.CharacterDetailsPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Détail du personnage Marvel',
  },
  cardDescription: {
    id: `${scope}.cardDescription`,
    defaultMessage: 'Description',
  },
  gridComicsHeader: {
    id: `${scope}.gridComicsHeader`,
    defaultMessage: 'Comics dans lesquels apparait le personnage',
  },
});
