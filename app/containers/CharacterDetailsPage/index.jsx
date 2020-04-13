/**
 * containers/CharacterDetailsPages/index.jsx
 * @author Bruno Prdt
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import messages from './messages';
import CardCharacter from './CardCharacter';

const myApiHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});
const init = {
  method: 'GET',
  headers: myApiHeader,
  mode: 'cors',
};
export default class CharacterDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [],
    };
  }

  handleChange = event => {
    this.setState({ searchName: event.currentTarget.value });
  };

  handleCallAPICharacters = () => {
    const name = this.state.searchName;
    const URL = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=0582a3f41e5acacd4c34c41d770efdb6`;
    fetch(URL, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({ characters: data.data.results });
      })
      .catch(error => console.log(error)) // catch error json
      .catch(error => console.log(error)); // catch error API
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Détails du personnage</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <H1 className="h1-characters">
          <FormattedMessage {...messages.header} />
        </H1>
        <CardCharacter perso={this.state.character} />
      </div>
    );
  }
}
