/*
 * CharactersPage Messages
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
  checkbox: {
    id: `${scope}.checkbox`,
    defaultMessage: "Cocher pour changer l'affichage des résultats",
  },
  cardDescription: {
    id: `${scope}.cardDescription`,
    defaultMessage: 'Description',
  },
  cardButton: {
    id: `${scope}.cardButton`,
    defaultMessage: 'Click for more',
  },
});
