import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 345,
  },
});

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Rose of Cuba"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Rose of Cuba"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            Rose
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Rose of Cuba"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Rose of Cuba"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            Rose
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Rose of Cuba"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Rose of Cuba"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            Rose
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </React.Fragment>
    
  );
}
