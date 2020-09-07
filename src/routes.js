
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Patient/LoginPaciente/index';
import Dashboard from './pages/Profissional/Dashboard/index';
import AppMenu from './pages/Patient/AppMenu';
import Avaliacao from './pages/Patient/Avaliacao/index';
import Cuidadores from './pages/Patient/Cuidadores';
import SignUp from './pages/SignUp';
import Metas from './pages/Patient/Metas';
import Educacao from './pages/Patient/Educação';
import LoginCuidador from './pages/Profissional/LoginCuidador';

export default function Routes() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/AppMenu" component={AppMenu} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Avaliacao" component={Avaliacao} />
        <Route path="/Cuidadores" component={Cuidadores} />
        <Route path="/Cadastro" component = {SignUp} />
        <Route path="/metas" component = {Metas}/>
        <Route path="/educacao" component = {Educacao}/>
        <Route path="/LoginCuidador" component = {LoginCuidador}/>
    </BrowserRouter>
  );
}
