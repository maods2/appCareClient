
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Newlogin/index';
import Dashboard from './pages/Dashboard/index';
import AppMenu from './pages/AppMenu';
import Avaliacao from './pages/Avaliacao/index';
import Cuidadores from './pages/Cuidadores';
import SignUp from './pages/SignUp';
import Metas from './pages/Metas';
import Educacao from './pages/Educação';
import LoginCuidador from './pages/LoginCuidador';

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
