import React, { useState, useEffect, useContext } from 'react';
import PageHeader from '../../../components/PageHeader';


import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import AuthService from '../../../services/auth.service'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


export default function Perfil() {



  const [userData, setUserData] = useState();

  useEffect(() => {
    const { user: { firstName } } = AuthService.getCurrentUser()
    setUserData(firstName);
  }, []);

  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);


  return (


    <div align="center">
      { userData && <div id="page-cuidadores" className="container">
        <PageHeader name={userData} />


        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
          <List className={classes.root}>

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Primeiro Nome"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
        
              </Typography>
                  {" Matheus Augusto"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />


          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Primeiro Nome"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
        
              </Typography>
                  {" Matheus Augusto"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />


        </List>
          </Container>
        </React.Fragment>






      </div>}
    </div>

  );
}