/**
 * containers/CharacterDetailsPages/index.jsx
 * @author Bruno Prdt
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import messages from './messages';
import CharacterDetails from './CharacterDetails';
import '../CharactersPage/index.css';
import GridComics from './GridComics';

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
      comics: '',
      // eslint-disable-next-line react/prop-types
      searchId: props.match.params.id,
    };

    // console.log('props match:', props.match.params.id, 'searchId:', this.state.searchId);
  }

  componentDidMount() {
    const id = this.state.searchId;
    // eslint-disable-next-line no-unused-expressions
    this.handleCallAPICharacters(id);
    this.handleAPIComicsCharacter(id);
  }

  handleCallAPICharacters = id => {
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

  handleAPIComicsCharacter = id => {
    const URL = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=0582a3f41e5acacd4c34c41d770efdb6`;
    fetch(URL, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({ comics: data.data.results });
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
          {this.state.character ? ` : ${this.state.character.name}` : ''}
        </H1>
        {this.state.character ? (
          <CharacterDetails character={this.state.character} />
        ) : (
          <div />
        )}
        {this.state.comics ? (
          <GridComics
            character={this.state.character}
            comics={this.state.comics}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
