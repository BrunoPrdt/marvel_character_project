import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { FormattedMessage } from 'react-intl';
import H2 from '../../components/H2';
import messages from './messages';
import '../CharactersPage/index.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

export default function GridComics(props) {
  const classes = useStyles();
  // eslint-disable-next-line react/prop-types
  const { comics } = props;

  return (
    <div className={classes.root}>
      <H2>
        <span className="gridComicsH2">
          <FormattedMessage {...messages.gridComicsHeader} />
        </span>
      </H2>
      <GridList cellHeight={400} spacing={1} className={classes.gridList}>
        {comics.map(comic => (
          <GridListTile key={comic.id} cols="1" rows="2">
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.name}
            />
            <GridListTileBar
              title={comic.title}
              titlePosition="top"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
