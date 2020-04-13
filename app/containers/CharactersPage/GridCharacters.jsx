import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import CardCharacter from './CardCharacter';

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
      <GridList cellHeight={260} className={classes.gridList} cols={2}>
        {characters.map(character => (
          <CardCharacter character={character} key={character.id} />
        ))}
      </GridList>
    </div>
  );
}
