import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/store.png';
import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img
              src={logo}
              alt='Marcusoft Commerce.js'
              height='100px'
              className={classes.image}
            />
            <div className={classes.grow}></div>
            <div className={classes.button}>
              <IconButton aria-label='Show cart items' color='inherit'>
                <Badge badgeContent={2} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
