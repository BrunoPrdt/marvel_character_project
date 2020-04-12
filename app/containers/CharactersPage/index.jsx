/**
 * containers/CharactersPages/index.jsx
 * @author Bruno Prdt
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import H1 from 'components/H1';
import Checkbox from '@material-ui/core/Checkbox';
import StickyHeadTable from './TableCharacters';
import CardCharacter from './CardCharacter';
import messages from './messages';
import './index.css';

const myApiHeader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});
const init = {
  method: 'GET',
  headers: myApiHeader,
  mode: 'cors',
};
export default class CharactersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
      characters: [],
      checked: false,
    };
  }

  handleChange = event => {
    this.setState({ searchName: event.currentTarget.value });
  };

  handleChecked = event => {
    this.setState({ checked: event.currentTarget.checked });
    console.log(this.state.checked);
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
          <title>Page de personnages</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <H1 className="h1-characters">
          <FormattedMessage {...messages.header} />
        </H1>
        <form className="form1" noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={this.state.searchName}
            onChange={this.handleChange}
            label=<FormattedMessage {...messages.textfieldLabel} />
          />
          <Button id="send" onClick={this.handleCallAPICharacters}>
            <FormattedMessage {...messages.submit} />
          </Button>
          <Checkbox
            onChange={this.handleChecked}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            color="secondary"
          />
        </form>
        <div>
          <StickyHeadTable characters={this.state.characters} />
        </div>
        <div>
          <CardCharacter character={this.state.characters[0]} />
        </div>
      </div>
    );
  }
}
