import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';

//import Select from '@material-ui/core/Select';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logoAppWhite.svg';
import backIcon from '../../assets/images/icons/back.svg';
import imagem from '../../assets/images/Corpo_numerado.png';




const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(4, 0, .5, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    textAlign: 'center',
  },
  root: {
    flexGrow: 0,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Avaliação() {
  const classes = useStyles();






  return (

    <Container component="main" align='center' className={classes.paper}>
      <div align="center">

        <Grid container spacing={2}>
          <Grid item xs={20} item sm={12} md={12}>


            <div id="page-cuidadores" className="container">
              {/* <PageHeader/> */}
              <header className="page-header">
                <div className="top-bar-container">
                  <Link to="/AppMenu">
                    <img src={backIcon} alt="Voltar" />
                  </Link>
                  <img src={logoImg} alt="Cuidador" />
                </div>

                <div className="header-content">
                  <strong>Avaliação Diária
                    <div align="center">{new Date().getUTCDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}
                    </div></strong>
                </div>
              </header>

              <Paper className={classes.paper}>
                <Typography component="h2" variant="h6" align="center">
                  Você está sentindo dor hoje?
          </Typography>
                <div className={classes.root}>
                  <Box>
                    <ButtonGroup disableElevation variant="contained" color="primary" >

                      <Button >Sim</Button>
                      <Button >Não</Button>


                    </ButtonGroup>
                  </Box>
                </div>
                <Typography component="h2" variant="h6" align="center" >
                  Onde está localizada sua dor? digite o(s) número(s).
          </Typography>
                <img src={imagem} />
                <Typography component="h2" variant="h6" align="center" >
                  Onde está a dor que mais te encomoda? digite apenas um número.
          </Typography>
                <Typography component="h2" variant="h6" align="center" >
                  Qual é a media de intensidade desta dor nas últimas 24hs?
          </Typography>
                <div className={classes.root}>
                  <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" >

                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                  </ButtonGroup>
                </div>
                <Typography component="h2" variant="h6" align="left">
                  Nas últimas 24 horas
          </Typography>
                <Typography component="h2" variant="h6" align="center">
                  Quanto a dor está influenciando no seu humor?
          </Typography>
                <div className={classes.root}>
                  <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" >

                    <Button >1</Button>
                    <Button >2</Button>
                    <Button >3</Button>
                    <Button >4</Button>
                    <Button >5</Button>

                  </ButtonGroup>
                </div>
                <Typography component="h2" variant="h6" align="center" >
                  Quanto a dor está atrapalhando seu desempenho nas atividades habituais?
          </Typography>
                <div className={classes.root}>
                  <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" >

                    <Button >1</Button>
                    <Button >2</Button>
                    <Button >3</Button>
                    <Button >4</Button>
                    <Button >5</Button>

                  </ButtonGroup>
                </div>
                <Typography component="h2" variant="h6" align="center">
                  A dor que você está sentindo tem influenciado a sua relação com as outras pessoas?
          </Typography>
                <div className={classes.root}>
                  <Box>
                    <ButtonGroup disableElevation variant="contained" color="primary" >


                      <Button >Sim</Button>
                      <Button >Não</Button>
                    </ButtonGroup>
                  </Box>
                </div>
                <Typography component="h2" variant="h6" align="center" >
                  Quanto o seu sono está sendo prejudicado pela dor?
          </Typography>
                <div className={classes.root}>
                  <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" >

                    <Button >1</Button>
                    <Button >2</Button>
                    <Button >3</Button>
                    <Button >4</Button>
                    <Button >5</Button>

                  </ButtonGroup>
                </div>
                <Typography component="h2" variant="h6" align="center" >
                  Quanto a dor está influeniando no seu comportamento sexual?
          </Typography>
                <div className={classes.root}>
                  <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" >

                    <Button >1</Button>
                    <Button >2</Button>
                    <Button >3</Button>
                    <Button >4</Button>
                    <Button >5</Button>

                  </ButtonGroup>
                </div>
                <Typography component="h2" variant="h6" align="center" >
                  A dor está afetando a sua autoestima?
          </Typography>
                <div className={classes.root}>
                  <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" >

                    <Button >1</Button>
                    <Button >2</Button>
                    <Button >3</Button>
                    <Button >4</Button>
                    <Button >5</Button>

                  </ButtonGroup>
                </div>
                <Typography component="h2" variant="h6" align="center" >
                  Quanto a angústia pode estar relacionada à sua dor?
          </Typography>
                <div className={classes.root}>
                  <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" >

                    <Button >1</Button>
                    <Button >2</Button>
                    <Button >3</Button>
                    <Button >4</Button>
                    <Button >5</Button>

                  </ButtonGroup>
                </div>
                <Typography component="h2" variant="h6" align="center" >
                  Quanto você está ansioso para que a dor pare?
          </Typography>
                <div className={classes.root}>
                  <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" >

                    <Button >1</Button>
                    <Button >2</Button>
                    <Button >3</Button>
                    <Button >4</Button>
                    <Button >5</Button>

                  </ButtonGroup>
                </div>

              </Paper>
            </div>
          </Grid>
        </Grid>


      </div>
    </Container>
  );
}