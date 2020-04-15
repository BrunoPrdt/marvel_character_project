import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import HeaderLinkSecondary from '../../components/Header/HeaderLinkSecondary';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardCharacter(props) {
  const classes = useStyles();

  // eslint-disable-next-line react/prop-types
  const { character } = props;
  console.log('dans card charracter', character);

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              M
            </Avatar>
          }
          title={character.name}
          subheader={character.modified}
        />
        <CardMedia
          className={classes.media}
          image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          title={character.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {character.description.substr(0, 50)}...
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <HeaderLinkSecondary to={`characterbyid/${character.id}`} />
        </CardActions>
      </Card>
    </div>
  );
}
