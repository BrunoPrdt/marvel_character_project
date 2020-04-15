/**
 * app/component/swipeableTemporaryDrawer
 * @author bruno prdt
 */
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import PermContactCalendarTwoToneIcon from '@material-ui/icons/PermContactCalendarTwoTone';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="home">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItemIcon>
              <HomeTwoToneIcon fontSize="large" color="secondary" />
            </ListItemIcon>
            <ListItemText style={{ marginLeft: 30 }}>
              <FormattedMessage {...messages.homeLink} />
            </ListItemText>
          </Link>
        </ListItem>
        <ListItem button key="search">
          <Link to="/search" style={{ textDecoration: 'none' }}>
            <ListItemIcon>
              <SearchTwoToneIcon fontSize="large" color="secondary" />
            </ListItemIcon>
            <ListItemText style={{ marginLeft: 30 }}>
              <FormattedMessage {...messages.searchLink} />
            </ListItemText>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="about">
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <ListItemIcon>
              <InfoTwoToneIcon fontSize="large" color="secondary" />
            </ListItemIcon>
            <ListItemText style={{ marginLeft: 30 }}>
              <FormattedMessage {...messages.aboutLink} />
            </ListItemText>
          </Link>
        </ListItem>
        <ListItem button key="contact">
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <ListItemIcon>
              <PermContactCalendarTwoToneIcon
                fontSize="large"
                color="secondary"
              />
            </ListItemIcon>
            <ListItemText style={{ marginLeft: 30 }}>
              <FormattedMessage {...messages.contactLink} />
            </ListItemText>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <div>
        {['left'].map(anchor => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuTwoToneIcon fontSize="large" color="secondary" />
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
