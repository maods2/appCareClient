import React, { useState, useEffect } from 'react';
import { Link, useHistory, NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

import '../../../assets/styles/global.css';
import logoImg from '../../../assets/images/logoApp.svg';
import LandingImg from '../../../assets/images/landingApp.svg';


import AuthService from '../../../services/auth.service'

import './styles.css';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function App() {

    const history = useHistory();
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    const [userData, setUserData] = useState();


    useEffect(() => {
        (async () => {
            const logged = await AuthService.isAuthenticated()
            setUserData(logged)
            if (logged.role == "Pacient") {
                history.push('/appmenu');
            } else if (logged.role == "Professional") {
                history.push('/MainPage');
            }

        })();
    }, []);

    function handleCreateForm(e) {
        e.preventDefault()

        AuthService.patientLogin(email, password).then(() => {
            history.push('/appmenu');
        }).catch(() => {
            alert('Erro! Usuário não cadastrado');
        })

        console.log({
            email,
            password,
        });
    }

    const toggleChecked = () => {
        setChecked((prev) => !prev);

        history.push('/LoginCuidador');
    };

    return (
        <>
            {!userData && <div id="page-app">
                <div id="page-app-content" className="container">
                    <div className="logo-container">
                        <img src={logoImg} alt="Teste" />
                        <h2>Para Pacientes</h2>
                    </div>

                    <img src={LandingImg}
                        alt="Plataforma Teste"
                        className="hero-image"
                    />

                    <main>
                        <form onSubmit={handleCreateForm}>
                            <fieldset>
                                <div className="input-block">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }} />
                                </div>

                                <div className="input-block">
                                    <label htmlFor="senha">Senha</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }} />
                                </div>
                            </fieldset>

                            <div className="buttons-container">
                                <button type="submit">
                                    Entrar
                        </button>
                            </div>
                        </form>
                        <div className="buttons-change">
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                               
                                onClick={toggleChecked}
                            >
                                Cuidador
                             </Button>
                  
                        </div>
                    </main>



                    <div className="cadastro">
                        <Link to="/cadastro">
                            Ainda não tem conta? Cadastre-se
                </Link>
                    </div>

                    <span className="total-connections">
                        Produzido por: E-brains Team
                </span>

                </div>

            </div>}
        </>
    );

}

export default App;