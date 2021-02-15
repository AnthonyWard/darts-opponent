import React, { useState } from 'react';

import './App.css';

import Thinker from './thinker'
import Dartboard from './dartboard';
import DartboardUI from './dartboardUI';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addScore } from '../logic/game'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#eeeeee'
  },
  content: {
    margin: 30
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App() {

  const game = useSelector(store => store);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    remaining: 180,
    target: "Let's play",
    aimat: 20,
    multi: 3,
    diff: 30,
    score: {}
  });

  const classes = useStyles();

  const dartboard = new Dartboard();

  const handleChange = name => (event, value) => {
    setState({
      [name]: value ? value : Number(event.target.value)
    });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Title
            </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>


        <Grid container spacing={3}>
          <Grid item md={6}>
            <Paper className={classes.paper}>
              <DartboardUI dartboard={dartboard} />
            </Paper>
          </Grid>

          <Grid item md={6}>
            <Paper className={classes.paper}>
              You have {state.remaining} remaining {game.total}
              <Grid item xs={6}>
                60
                80
                45
              </Grid>
              <Grid item xs={6}>
                140
                26
                3
            </Grid>
            </Paper>

            <input type="number" value={state.remaining} onChange={handleChange("remaining")} />

            <h3>{Thinker.calculate(state.remaining)}</h3>


            <hr />

            <h2>Throw</h2>

            <form>
              Aim At: <input type="number" value={state.aimat} onChange={handleChange("aimat")} /> -
              Multiplier: <input type="number" value={state.multi} onChange={handleChange("multi")} /> -
              Difficulty: <input type="number" value={state.diff} onChange={handleChange("diff")} />
            </form>


            <Button
              variant="contained"
              color="primary"
              onClick={() => handleChange("score")(null, dartboard.throw(state.aimat, state.multi, state.diff))}>
              Throw
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => dispatch(addScore(10))}>
              Test
            </Button>

            <code>{JSON.stringify(state.score, 2, 2) || "Let's Play!"}</code>

          </Grid>
        </Grid>
      </div>
    </div>
  )
}
