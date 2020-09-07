import React from 'react';
import {Link} from 'react-router-dom';


import PageHeader from '../../../components/PageHeader';

import './styles.css';

function AppMenu() {
    return (
        <div id="page-menu-list" className="container">
            <PageHeader/>
            <main>         
                <div className="all-buttons"> 
                    <div className="buttons-container">
                        <Link to="/dashboard" className="study">
                            Meu perfil
                        </Link>
                        </div>
                        <div className="buttons-container">
                        <Link to="/Avaliacao" className="study">
                            Avaliação Diária
                        </Link>
                        </div>
                        <div className="buttons-container">
                        <Link to="/metas" className="study">
                            Minhas Metas
                        </Link>
                        </div>
                        <div className="buttons-container">
                        <Link to="/educacao" className="study">
                            Educação em dor
                        </Link>
                        </div>
                        <div className="buttons-container">
                        <Link to="/dashboard" className="study">
                            Meu desempenho
                        </Link>
                        </div>
                        <div className="buttons-container">
                        <Link to="/dashboard" className="study">
                            Chatbot
                        </Link>
                        </div>
                        <div className="buttons-container">
                        <Link to="/cuidadores" className="study">
                            Cuidadores
                        </Link>
                        </div>
                    </div>
                 
                </main>
                <span className="total-connections">
                Produzido por: E-brains Team
                </span>    
        </div>
    )
}

export default AppMenu;