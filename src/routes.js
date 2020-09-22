
import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';

import Login from './pages/Patient/LoginPaciente/index';
import Dashboard from './pages/Profissional/Dashboard/index';
import AppMenu from './pages/Patient/AppMenu';
import Avaliacao from './pages/Patient/Avaliacao/index';
import Cuidadores from './pages/Patient/Cuidadores';
import SignUp from './pages/SignUp';
import Metas from './pages/Patient/Metas';
import Educacao from './pages/Patient/Educação';
import LoginCuidador from './pages/Profissional/LoginCuidador';
import ProfilePatient from './pages/Profissional/ProfilePatient/index.js';
import ProtectedRoute from './services/ProtectedRoute';
import Perfil from './pages/Patient/Perfil';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <ProtectedRoute path="/AppMenu" component={AppMenu} />
        <ProtectedRoute path="/Dashboard" component={Dashboard} />
        <ProtectedRoute path="/Avaliacao" component={Avaliacao} />
        <ProtectedRoute path="/Perfil" component={Perfil} />
        <ProtectedRoute path="/Cuidadores" component={Cuidadores} />
        <ProtectedRoute path="/Cadastro" component = {SignUp} />
        <ProtectedRoute path="/metas" component = {Metas}/>
        <ProtectedRoute path="/educacao" component = {Educacao}/>
        <ProtectedRoute path="/LoginCuidador" component = {LoginCuidador}/>
        <ProtectedRoute path="/ProfilePatient" component = {ProfilePatient}/>
        </Switch>
    </BrowserRouter>
  );
}
