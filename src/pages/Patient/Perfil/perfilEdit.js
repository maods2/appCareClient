import React, { useState, useEffect, useContext } from 'react';
import PageHeader from '../../../components/PageHeader';
import TextField from '@material-ui/core/TextField';

import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form'
import './styles.css';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

import AuthService from '../../../services/auth.service'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '40ch',
  },
}));

export default function PerfilEdit() {


  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const [userData, setUserData] = useState();

  useEffect(() => {
    const { user: { firstName } } = AuthService.getCurrentUser()
    setUserData(firstName);
  }, []);


  const classes = useStyles();

  return (


    <div align="center">
      { userData && <div id="page-cuidadores" className="container">
        <PageHeader name={userData} />

        <div >

          <div className="forms" >
            <h1>PERFIL DO USUÁRIO</h1>
            <TextField
              label="Primeiro Nome"
              id="margin-none"
              placeholder="Digite seu "

              className={classes.textField}
              margin="normal"
            />
            <TextField
              label="Último Nome"
              id="margin-dense"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />
            <TextField
              label="ocupação"
              id="margin-normal"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />


            <TextField
              label="outras doenças de base (diabetes, has, dislipidemia, por exemplo)"
              id="margin-normal"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />
            <TextField
              label="quais profissionais acompanham ele (campo de atuação)"
              id="margin-normal"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />
            <TextField
              label="medicações em uso (posologia: dose e frequência de uso)"
              id="margin-normal"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />
            <TextField
              label="Principal condição de saúde que causa dores crônicas (doença/patologia):"
              id="margin-none"
              placeholder="Digite seu "

              className={classes.textField}
              margin="normal"
            />
            <TextField
              label="Já foi diagnosticado?"
              id="margin-dense"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">

                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Ano em que foi diagnosticado com dor crônica"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />

              </Grid>
            </MuiPickersUtilsProvider>
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}

          >

            Atualizar
      </Button>

        </div>

      </div>}
    </div>

  );
}