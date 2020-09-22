import React, { useState, useEffect, useContext } from 'react';

import { Link, useHistory } from 'react-router-dom';

import AuthService from '../../services/auth.service'

import logoImg from '../../assets/images/logoAppWhite.svg';
import backIcon from '../../assets/images/icons/back.svg';

//import api from '../../services/api';


function PageHeader(props) {


  // const history = useHistory();
  // const [userData, setUserData] = useState();


  // useEffect(() => {
  //   (async () => {
  //     const { user: { firstName } } = AuthService.getCurrentUser()
  //     setUserData(firstName);
  //     console.log(userData)
  //   })();
  // }, []);

  // if (!userData) {
  //   history.push("/");
  // }
  // else {
    return (
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src={logoImg} alt="Cuidador" />
        </div>

        <div className="header-content">

          <strong>Bem vindo {props && props.name } !</strong>
        </div>
      </header>
    );
  }

// }

export default PageHeader;