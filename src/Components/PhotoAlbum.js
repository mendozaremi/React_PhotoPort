import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Color from 'color';
import Box from '@material-ui/core/Box';

//==============================================================================================

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 345,
  },
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '100px'
  },
  cardGrid: {
    paddingTop: '100px',
    paddingBottom: '100px',
    paddingLeft: '20px',
    paddingRight: '20px',
},
  cardMedia: {
    paddingTop: '100%', // 16:9
    paddingBottom: '40%'
  },
  card: ({ color }) => ({
    minWidth: 256,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
        transition: '0.2s',
        '&:hover': {
          transform: 'scale(1.1)',
      },
    },
    
  }),
  footer: {
    flexGrow: 1,
    fontSize: '2.5rem',
    '@media (min-width:600px)': {
      fontSize: '0.8rem',
    },
    '@media (max-width:599px)': {
      fontSize: '0.1rem',
    }
  }
});

//========================================COPYRIGHT===============================================

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Remi Mendoza '}
      <Link color="inherit" href="https://mendozaremi.github.io/portfolio/">
        Visit My Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
//==========================================ALBUM=============================================

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* FIRST IMG */}
            <Grid container spacing={8}>
        
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/QCRdpZc.jpg"
                    />
                  </Card>
                </Grid>
                {/* SECOND IMG */}
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/yxAq4Bd.jpg"
                    />
                  </Card>
                </Grid>
                {/* THIRD IMG */}
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/0rCL5tW.jpg"
                    />
                  </Card>
                </Grid>
                {/* FOURTH IMG */}
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/ONzJjZ1.jpg"
                    />
                  </Card>
                </Grid>
                {/* FIFTH IMG */}
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/sL5cVmz.jpg"
                    />
                  </Card>
                </Grid>
                {/* SIXTH IMG */}
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/iGuoAbO.jpg"
                    />
                  </Card>
                </Grid>
                   {/* SEVENTH IMG */}
                   <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/BCfyZ3n.jpg"
                    />
                  </Card>
                </Grid>
                   {/* EIGHT IMG */}
                   <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/W6hXRKe.jpg"
                    />
                  </Card>
                </Grid>
                   {/* NINTH IMG */}
                   <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/UcEuEph.jpg"
                    />
                  </Card>
                </Grid>
                    {/* TENTH IMG */}
                    <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/2Bi8OBk.jpg"
                    />
                  </Card>
                </Grid>
                    {/* ELEVENTH IMG */}
                    <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/LrcJl9N.jpg"
                    />
                  </Card>
                </Grid>
                    {/* TWENTH IMG */}
                    <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/tLQIT2f.jpg"
                    />
                  </Card>
                </Grid>
                 {/* THIRTEENTH IMG */}
                 <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/1P8WIBT.jpg"
                    />
                  </Card>
                </Grid>
                 {/* FOURTEENTH IMG */}
                 <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/y1MCgtu.jpg"
                    />
                  </Card>
                </Grid>
                 {/* FIFTHTEENTH IMG */}
                 <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.imgur.com/rTnP5ly.jpg"
                    />
                  </Card>
                </Grid>
            </Grid>
          </Container>
        </main>
    {/* Footer */}	
    <footer className={classes.footer} style={{backgroundColor: "#bdbdbd"}}>	
          <Typography variant="h6" className={classes.title} style={{color: "#494949"}}>
            <Box letterSpacing={10}  m={1}>
              R E M I  M E N D O Z A
            </Box>
          </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">	
        "Your most important gear is your eye, heart, and soul" - Marius Vieth	
        </Typography>	
        <Copyright />	
    </footer>	
      {/* End footer */}
    </React.Fragment>
  );
}
//==============================================================================================