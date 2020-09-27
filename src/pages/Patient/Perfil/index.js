import React, { useState, useEffect } from 'react';
import PageHeader from '../../../components/PageHeader';
import { Link, useHistory, NavLink } from 'react-router-dom';

import AuthService from '../../../services/auth.service'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  divisor: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 10,
    marginBottom: 50,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    height: 80,
    display: 'flex',
    justifyContent: 'space-between',

  },  formControl: {
    margin: theme.spacing(3),
  },
  check: {
    display: 'flex',
    marginLeft: 30,
  }
}));

export default function Perfil() {



  const [userData, setUserData] = useState();

  const classes = useStyles();

  useEffect(() => {
    const { user: { firstName } } = AuthService.getCurrentUser()
    setUserData(firstName);
  }, []);



  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [gender, setGender] = useState("")
  const [birth, setBirth] = useState("")
  const [profession, setProfession] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [imc, setImc] = useState("")
  const [bloodtype, setBloodtype] = useState("")
  const [condition, setCondition] = useState("")
   
    

 

  return (


    <div align="center">
      { userData && <div id="page-cuidadores" className="container">
        <PageHeader name={userData} />

        <div >

          <div className="forms" >
            <h1>Informações Pessoais</h1>
            <p>Informações básicas, como seu nome e foto</p>

            <List component="nav" className={classes.divisor} aria-label="mailbox folders">
              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Nome</Typography>
                <Typography className="description" gutterBottom variant="body2">Matheus Augusto</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem} >

                <Typography gutterBottom variant="h5">Sobrenome</Typography>
                <Typography className="description" gutterBottom variant="body2">Matheus Augusto</Typography>

              </ListItem>

              <Divider light />
            
             <ListItem button className={classes.listItem} >

                <Typography gutterBottom variant="h5">Gênero</Typography>
                <Typography className="description" gutterBottom variant="body2">Matheus Augusto</Typography>

              </ListItem>

              <Divider light />
            
             <ListItem button className={classes.listItem} >

                <Typography gutterBottom variant="h5">Idade</Typography>
                <Typography className="description" gutterBottom variant="body2">Matheus Augusto</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Ocupação</Typography>
                <Typography className="description" gutterBottom variant="body2">Matheus Augusto</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Estado</Typography>
                <Typography className="description" gutterBottom variant="body2">Matheus Augusto</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Cidade</Typography>
                <Typography className="description" gutterBottom variant="body2">Matheus Augusto</Typography>

              </ListItem>

            </List>

            <List component="nav" className={classes.divisor} aria-label="mailbox folders">

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Peso</Typography>
                <Typography  className="description" gutterBottom variant="body2">Matheus Augusto</Typography>

              </ListItem>
              <Divider light />
              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Altura</Typography>
                <Typography className="description" gutterBottom variant="body2">Matheus Augusto</Typography>

              </ListItem>
          
              <Divider light />

              <ListItem button className={classes.listItem}>
              
                  <Typography gutterBottom variant="h5">IMC</Typography>

              
                  <Typography className="description" gutterBottom variant="body2">Matheus Augusto</Typography>
           

              </ListItem>
              <Divider light />

              <ListItem button className={classes.listItem}>
              
                  <Typography gutterBottom variant="h5">Tipo Sanguíneo</Typography>

              
                  <Typography className="description" gutterBottom variant="body2">Matheus Augusto</Typography>
           

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Condição de saúde <br></br>que causa dor Crônica</Typography>
                <Typography className="description" gutterBottom variant="body2">Matheus Augusto</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Ano que foi Diagnosticado</Typography>
                <Typography className="description" gutterBottom variant="body2">Matheus Augusto</Typography>

              </ListItem>

              <Divider light />

              <ListItem button className={classes.listItem}>

                <Typography gutterBottom variant="h5">Medicações em Uso</Typography>
                <Typography className="description" gutterBottom variant="body2">Matheus Augusto</Typography>

              </ListItem>
            </List>
     
          </div>

          <NavLink className="edit" to="/Perfiledit"> <Fab color="primary" aria-label="edit">
            <EditIcon />
          </Fab></NavLink>

        </div>

      </div>}
    </div>

  );
}