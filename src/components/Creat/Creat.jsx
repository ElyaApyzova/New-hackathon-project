import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, TextField, Button, Link, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const useStyles = makeStyles((theme) => ({
  root1: {
    backgroundImage: `url('/path/to/background-image.jpg')`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputField: {
    margin: theme.spacing(1),
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#A0D206',
    color: '#FFFFFF',
    margin: theme.spacing(1),
    width: '100%',
  },
}));

const Creat = () => {
  const classes = useStyles();

  return (
    <div className={classes.root1}>
      <Container maxWidth="sm" className={classes.formContainer}>
        <IconButton color="inherit">
          <CancelIcon />
        </IconButton>
        <TextField
          className={classes.inputField}
          label="Телефон"
          variant="outlined"
        />
        <TextField
          className={classes.inputField}
          label="Пароль"
          variant="outlined"
          type="password"
        />
        <Button className={classes.loginButton} variant="contained">Войти</Button>
        <Link href="#" variant="body2">Не помню пароль</Link>
        <div>
          <Link href="#" variant="body2">
            <img src="/path/to/icon1.png" alt="Icon 1" />
          </Link>
          <Link href="#" variant="body2">
            <img src="/path/to/icon2.png" alt="Icon 2" />
          </Link>
          <Link href="#" variant="body2">
            <img src="/path/to/icon3.png" alt="Icon 3" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Creat;
