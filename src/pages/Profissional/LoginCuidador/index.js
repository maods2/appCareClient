import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../../../assets/styles/global.css';
import logoImg from '../../../assets/images/logoApp.svg';
import LandingImg from '../../../assets/images/landingApp.svg';

import api from '../../../services/api';

import './styles.css';


function LoginCuidadores() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleCreateForm(e) {
        e.preventDefault()

        api.post('api/professional/authentication', {
            email,
            password
        }).then(() => {
            alert('Login ok');

            history.push('/Dashboard');
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
                    <h2>Para Profissionais</h2>
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
                        <button >
                            <Link to="/">
                                Pacientes
                        </Link>
                        </button>
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

        </div>

    );
    ;
}

export default LoginCuidadores;