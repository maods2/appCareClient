import React, { useState, useEffect, useContext } from 'react';
import PageHeader from '../../../components/PageHeader';

// import './styles.css';
import AuthService from '../../../services/auth.service'




export default function Perfil() {



  const [userData, setUserData] = useState();

  useEffect(() => {
    const { user: { firstName } } = AuthService.getCurrentUser()
    setUserData(firstName);
  }, []);




  return (


    <div align="center">
      { userData && <div id="page-cuidadores" className="container">
      <PageHeader name={userData} />

      </div>}



    </div>

  );
}