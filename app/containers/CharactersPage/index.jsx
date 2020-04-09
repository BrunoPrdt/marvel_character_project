/*
 * Characters Page
 *
 * List
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import H1 from 'components/H1';
import Checkbox from '@material-ui/core/Checkbox';
import HeaderLinkDefault from '../../components/Header/HeaderLinkDefault';
import messages from './messages';
import './index.css';

export default class CharactersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
      persos: '',
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
          <HeaderLinkDefault>
            <FormattedMessage {...messages.submit} />
          </HeaderLinkDefault>
          <Checkbox
            onChange={this.handleChecked}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            color="secondary"
          />
        </form>
      </div>
    );
  }
}
