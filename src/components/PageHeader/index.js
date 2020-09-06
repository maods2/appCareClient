import React from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logoAppWhite.svg';
import backIcon from '../../assets/images/icons/back.svg';

//import api from '../../services/api';


function PageHeader () {

  
    return(
            <header className="page-header">
              <div className="top-bar-container">
                <Link to= "/"> 
                <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Cuidador" />      
              </div>

              <div className ="header-content">
                <strong>Bem vindo User =) </strong>
              </div>
            </header> 
    );
}

export default PageHeader;