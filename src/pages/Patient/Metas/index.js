import React from 'react';

// react plugin for creating charts
// @material-ui/core
// import { makeStyles } from "@material-ui/core/styles";

// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../../components/Grid/GridItem.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import Tasks from "../../../components/Tasks/Tasks.js";
import CustomTabs from "../../../components/CustomTabs/CustomTabs.js"


import { Link } from 'react-router-dom';

import logoImg from '../../../assets/images/logoAppWhite.svg';
import backIcon from '../../../assets/images/icons/back.svg';
import './styles.css';


import PatientTask from "./general.js";


// import styles from "assets/jss/dashboardStyle.js";

// const useStyles = makeStyles(styles);

export default function Metas() {
   
    
    return (
        <div id="page-cuidadores" className="container"> 
            <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src={logoImg} alt="Metas" />
        </div>

        <div className="header-content">
          <strong>Metas</strong>
        </div>
      </header>
       
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomTabs
                        title="Tasks:"
                        headerColor= "info"
                        tabs={[
                            {
                                tabName: "Atividades",
                                tabIcon: Cloud,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 3]}
                                        tasksIndexes={[0, 1, 2, 3]}
                                        tasks={PatientTask}

                                    />
                                )
                            }                            
                        ]}
                    />
                </GridItem>
            </GridContainer>

        </div>

);
}