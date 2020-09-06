import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logoAppWhite.svg';
import backIcon from '../../assets/images/icons/back.svg';


import './styles.css';
import CuidadorList from '../../components/CuidadorList';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';



export default function Cuidadores() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const useStyles = makeStyles((theme) => ({
    botao: {
      // margin: theme.spacing(4),
      display: 'flex',
      fontSize: '15px',
      color: 'var(--color-primary-light)',
      alignContent: 'center',
      background: 'var(--color-box-base)',
      margin: '2.3rem'
    },
    texto: {
      fontSize: '15px',
    },
    titulo: {
      color: 'var(--color-primary-light)',
      fontSize: '20px',

    }
  }));
  const classes = useStyles();

  function addNewCuidador() {
    //Gerar um novo card de cuidadores.
  }

  return (
    <div id="page-cuidadores" className="container">

      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src={logoImg} alt="Cuidador" />
        </div>

        <div className="header-content">
          <strong>Cuidadores </strong>
        </div>
      </header>


      <main>

        <Button className={classes.botao} align="center" variant="outlined" color="primary" onClick={handleClickOpen}>
          Inserir Código
          </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle className={classes.titulo} id="form-dialog-title"><b>Inserir Código</b></DialogTitle>
          <DialogContent >
            <DialogContentText className={classes.texto}>
              <strong>Adicionar código para vincular sua conta com a do profissional de saúde.</strong> <br /> OBS.: Para conseguir o código, entre em contato com o seu médico.
              </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="código"
              label="Código"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Voltar
              </Button>
            <Button onClick={addNewCuidador} color="primary">
              Adicionar
              </Button>
          </DialogActions>
        </Dialog>
        <CuidadorList />

        <span className="total-connections">
          Produzido por: E-brains Team
                </span>
      </main>

    </div>
  );
}

