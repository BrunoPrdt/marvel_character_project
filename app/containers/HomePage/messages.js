/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage:
      'Marvel Univers ! Votre personnage Marvel préféré est forcément ici.',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      "Vous désirez en savoir plus sur un des personnages de l'univerrs Mavel et ses comics ? Vous êtes au bon endroit!",
  },
  projectMessage: {
    id: `${scope}.project.message`,
    defaultMessage:
      "Clickez sur le bouton 'recherche' ou sur 'Recherchez un personage dans le menu de navigation, et entrez le début ou le nom complet du personnage Marvel désiré",
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
