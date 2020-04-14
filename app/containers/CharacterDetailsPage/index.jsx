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
import '../CharactersPage/index.css';

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
      character: '',
      // eslint-disable-next-line react/prop-types
      searchId: props.match.params.id,
    };
    // console.log('props match:', props.match.params.id, 'searchId:', this.state.searchId);
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-expressions
    this.handleCallAPICharacters();
  }

  handleCallAPICharacters = () => {
    const id = this.state.searchId;
    const URL = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=0582a3f41e5acacd4c34c41d770efdb6`;
    fetch(URL, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({ character: data.data.results[0] });
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
        {this.state.character ? (
          <CardCharacter character={this.state.character} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
