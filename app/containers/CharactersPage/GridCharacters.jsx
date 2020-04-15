/**
 * containers/CharactersPages/GridCharacters.jsx
 * @author Bruno Prdt
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import CardCharacter from './CardCharacter';
import './index.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function GridCharacters(props) {
  const classes = useStyles();
  // eslint-disable-next-line react/prop-types
  const { characters } = props;

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={160}
        id="personalGridListId"
        className={classes.gridList}
        cols={3}
      >
        {characters.map(character => (
          <CardCharacter
            character={character}
            key={character.id}
            cols={2 || 1}
          />
        ))}
      </GridList>
    </div>
  );
}
