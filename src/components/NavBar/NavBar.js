import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/store.png';
import useStyles from './styles';

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const isOnCartPage = location.pathname === '/cart';

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            variant='h6'
            className={classes.title}
            color='inherit'
          >
            <img
              src={logo}
              alt='Marcusoft Commerce.js'
              height='100px'
              className={classes.image}
            />
            <div className={classes.grow}></div>
            {!isOnCartPage && (
              <div className={classes.button}>
                <IconButton
                  component={Link}
                  to='/cart'
                  aria-label='Show cart items'
                  color='inherit'
                >
                  <Badge badgeContent={totalItems} color='secondary'>
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
