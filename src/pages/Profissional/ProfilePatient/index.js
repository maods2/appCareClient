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
import Tasks from "../../../components/Tasks/TasksDoc.js";
import CustomTabs from "../../../components/CustomTabs/CustomTabs.js"
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import './styles.css';

import { Link } from 'react-router-dom';

import logoImg from '../../../assets/images/logoAppWhite.svg';
import backIcon from '../../../assets/images/icons/back.svg';
// import './styles.css';


import { PatientTask } from "../../Patient/Metas/general.js";


// import styles from "assets/jss/dashboardStyle.js";

// const useStyles = makeStyles(styles);
const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",

    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
    cardStyless: {
        fontSize: "1.5rem",
        alignContent: "center",
      },
    
};
const useStyles = makeStyles(styles);

export default function ProfilePatient() {
    const classes = useStyles();


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
                    <strong>Perfil do Paciente</strong>
                </div>
            </header>
            <main>
                <div className="cuidador-item">
                    <GridContainer>
                        <GridItem xs={11} sm={6} md={6}>
                            <Card className={classes.cardStyless} profile>
                                <CardBody profile>
                                    <h6 className={classes.cardCategory}>PACIENTE 01</h6>
                                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                                    <p className={classes.description}>
                                        Paciente sofre de dor crônica aguda na perna esquerda.
                                        Dor começou há cerca de 2 anos.
                                        Tratamentos feitos atualmente: Caminhadas moderadas, alongamentos.
              </p>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={11} sm={6} md={6}>
                            <CustomTabs
                                title="Tasks:"
                                headerColor="info"
                                tabs={[
                                    {
                                        tabName: "Atividades",
                                        tabIcon: Cloud,
                                        tabContent: (
                                            <Tasks
                                                checkedIndexes={[0, 3]}
                                                tasksIndexes={[0, 1, 2, 3]}
                                                tasksdoc={PatientTask}

                                            />
                                        )
                                    }
                                ]}
                            />
                        </GridItem>
                    </GridContainer>
                </div>
            </main>
        </div>

    );
}