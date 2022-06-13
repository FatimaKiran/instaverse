import React from "react";
import { Container , AppBar, Typography , Grow , Grid} from '@material-ui/core';
import instaverse from './images/Instaverse.png';

import Posts from "./components/Posts/Posts.js";
import Form from './components/Form/Form';
import useStyles from './styles'
import { useDispatch } from "react-redux";
import { useEffect , useState } from "react";

import {getPosts} from './actions/posts'

const App = () => {
  const [currentId , setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getPosts());
},[dispatch]);

  return (
   <Container maxWidth='lg'>
     <AppBar className={classes.appBar} position ='static' color='inherit'>
        <Typography className={classes.heading} variant ='h2' align='center'>Instaverse</Typography> 
        <img className={classes.image} src={instaverse} alt='instverse' height='60' />
     </AppBar>
     <Grow in>
       <Container>
         <Grid container justifyContent="space-between" alignItems='stretch' spacing={4}>
           <Grid items xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
           </Grid>

           <Grid items xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
           </Grid>
           

         </Grid>
       </Container>
     </Grow>

   </Container>
  )
}

export default App;
