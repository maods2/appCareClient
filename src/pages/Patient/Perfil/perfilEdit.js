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
            <h1>Informações Pessoais</h1>
            <TextField
              label="Nome"
              id="margin-none"
              placeholder="Digite seu "

              className={classes.textField}
              margin="normal"
            />
            <TextField
              label="Sobrenome"
              id="margin-dense"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />
            <TextField
              label="Gênero"
              id="margin-normal"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />


            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">

                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Data do Nascimento"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />

              </Grid>
            </MuiPickersUtilsProvider>
            <TextField
              label="Ocupação"
              id="margin-normal"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />
            <TextField
              label="Estado"
              id="margin-normal"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />
            <TextField
              label="Cidade"
              id="margin-none"
              placeholder="Digite seu "

              className={classes.textField}
              margin="normal"
            />
            <TextField
              label="Peso"
              id="margin-dense"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />
            <TextField
              label="Altura"
              id="margin-dense"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />
            <TextField
              label="IMC"
              id="margin-dense"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />
            <TextField
              label="Tipo Sanguíneo"
              id="margin-dense"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />
            <TextField
              label="Condição de saúde"
              id="margin-dense"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />
            <TextField
              label="Ano que foi Diagnosticado"
              id="margin-dense"
              placeholder="Digite seu "
              className={classes.textField}

              margin="normal"
            />
            <TextField
              label="Medicações em Uso"
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