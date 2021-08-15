
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { useState } from 'react';
import ImageModal from './ImageModal';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 600,
    margin: 20,
  },
});


export default function ImgMediaCard(props) {
  const classes = useStyles();
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function openModal(){
      console.log(modalIsOpen);
      setModalIsOpen(true);
  }
  function closeModal(){
      setModalIsOpen(false);
  }

  return (
      <div>
          
    <Card className={classes.root}>
      <CardActionArea onClick={openModal}>
        <CardMedia
          component="img"
          alt={props.alt}
          height="140"
          image={props.src}
          title={props.imageTitle}
          
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={openModal}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    
    {modalIsOpen && <ImageModal open="true" src={props.src} onClose={closeModal}/>}
        {modalIsOpen && <ImageModal /> }
    </div>
  );
}



