import React, { useState, useEffect } from 'react';
import PageHeader from '../../../components/PageHeader';
import { Link, useHistory, NavLink } from 'react-router-dom';

import AuthService from '../../../services/auth.service'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Perfil() {



  const [userData, setUserData] = useState();

  const classes = useStyles();

  useEffect(() => {
    const { user: { firstName } } = AuthService.getCurrentUser()
    setUserData(firstName);
  }, []);


  return (


    <div align="center">
      { userData && <div id="page-cuidadores" className="container">
        <PageHeader name={userData} />

        <div >

          <div className="forms" >
            <h1>PERFIL DO USUÁRIO</h1>

            <div className={classes.root}>



            </div>


          </div>
          <NavLink to="/Perfiledit"> <Fab color="primary" aria-label="edit">
            <EditIcon />

          </Fab></NavLink>

        </div>

      </div>}
    </div>

  );
}