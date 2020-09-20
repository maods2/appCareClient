import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../../../assets/styles/global.css';
import logoImg from '../../../assets/images/logoApp.svg';
import LandingImg from '../../../assets/images/landingApp.svg';


import AuthService from '../../../services/auth.service'

import './styles.css';


function App() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleCreateForm(e) {
        e.preventDefault()

        AuthService.patientLogin(email,password).then(() => {
            history.push('/appmenu');
        }).catch(() => {
            alert('Erro! Usuário não cadastrado');
        })

        console.log({
            email,
            password,
        });


    }
    return (
        <div id="page-app">
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
                    <div className="buttons-container-change">
                        <button id="bebe">
                            <Link to="/LoginCuidador">
                                Profissional
                            </Link>
                        </button>
                    </div>
                </main>


                {/* <Link to="/appmenu" className="botao">
                        Entrar
                </Link> */}
                <div className="cadastro">
                    <Link to="/cadastro">
                        Ainda não tem conta? Cadastre-se
                </Link>
                </div>

                <span className="total-connections">
                    Produzido por: E-brains Team
                </span>

            </div>

        </div>

    );
    ;
}

export default App;