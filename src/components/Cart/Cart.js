import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart }) => {
  const classes = useStyles();
  const isEmpty = !cart?.line_items?.length;

  const EmptyCart = () => {
    return (
      <Typography variant='subtitle'>
        You have no items in your shopping cart.{' '}
        <Link className={classes.link} to='/'>
          Start adding some now
        </Link>
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item={item} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cartDetails}>
          <Typography variant='h4'>
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size='large'
              type='button'
              variant='contained'
              color='secondary'
            >
              Empty cart
            </Button>
            <Button
              className={classes.checkoutButton}
              size='large'
              type='button'
              variant='contained'
              color='primary'
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant='h3' className={classes.title} gutterBottom>
        Your Shopping cart
      </Typography>

      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
