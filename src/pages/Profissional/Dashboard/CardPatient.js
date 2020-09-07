import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: 345,
        boxshadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', /* this adds the "card" effect */
        padding: '16px',
        textAlign: 'center',
        boxsizing: 'border-box',

    },


    row: {
        content: "",
        display: 'table',
        clear: 'both',
        padding: '10px',
    },
    column: {
        float: 'left',
        // width (minWidth: '700px'): '25%',
        padding: '0 10px',

        width: "100%",
        '@media (min-width: 600px)': {
          width: "25%"
        }
      },

   
}));

export default function CardPatient() {
    const classes = useStyles();

    return (


        <div className={classes.row}>
            <div className={classes.column}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2976316.png"
                            title="Michael Thomas"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Michael T.

          </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Paciente que sofre de dor crônica na perna esquerda. Está seguindo o tratamento a X dias.
          </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Avaliação Diária
        </Button>
                        <Button size="small" color="primary">
                            Entrar em contato
        </Button>
                    </CardActions>
                </Card>
            </div>

            <div className={classes.column}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2330.png"
                            title="Tom Brady"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Tom B.
          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Paciente que sofre de dor crônica na perna direita. Está seguindo o tratamento a X dias.
          </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Avaliação Diária

        </Button>
                        <Button size="small" color="primary">
                            Entrar em contato
        </Button>
                    </CardActions>
                </Card>
            </div>

            <div className={classes.column}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="https://s.yimg.com/it/api/res/1.2/eB0HBjYAtPwWUDcCfcF4Rg--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nfl_cutout/players_l/08212019/5479.png"
                            title="Drew Brees"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Drew Brees
          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Paciente que sofre de dor crônica na perna esquerda. Está seguindo o tratamento a X dias.
          </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Avaliação Diária

        </Button>
                        <Button size="small" color="primary">
                            Entrar em contato
        </Button>
                    </CardActions>
                </Card>
            </div>

            <div className={classes.column}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="https://a.espncdn.com/i/headshots/nfl/players/full/13229.png"
                            title="Rob Gronkowski"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Rob G.
          </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Paciente que sofre de dor crônica na perna esquerda. Está seguindo o tratamento a X dias.
          </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Avaliação Diária

        </Button>
                        <Button size="small" color="primary">
                            Entrar em contato
        </Button>
                    </CardActions>
                </Card>

            </div>
        </div>


    );
}