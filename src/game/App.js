import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

import Thinker from './thinker'
import Dartboard from './dartboard';
import DartboardUI from './dartboardUI';

import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  card: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      remaining: 180,
      target: "Let's play",
      aimat: 20,
      multi: 3,
      diff: 30,
      score: {}
    };

    this.dartboard = new Dartboard();
  }

  handleChange = name => (event, value) => {
    this.setState({
      [name]: value ? value : Number(event.target.value)
    });
  }

  render() {
    const { classes } = this.props;
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

        <Grid container spacing={24} alignItems={"flex-start"} justify={"center"}>
          <Grid item xs={6}>
              <DartboardUI dartboard={this.dartboard} />
          </Grid>
          <Grid item xs={6}>

              <Typography variant="display2" gutterBottom>
              You have {this.state.remaining} remaining
              </Typography>

                    <Card className={classes.card}>
                      <CardContent>
                        <Typography className={classes.title} color="textSecondary">
                          Word of the Day
                        </Typography>
                        <Typography variant="headline" component="h2">
                          gtrsghrtshgrtshgrtsgh
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                          adjective
                        </Typography>
                        <Typography component="p">
                          well meaning and kindly.<br />
                          {'"a benevolent smile"'}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>


              <input type="number" value={this.state.remaining} onChange={this.handleChange("remaining")} />

              <h3>{Thinker.calculate(this.state.remaining)}</h3>


              <hr />

              <h2>Throw</h2>

              <form>
                Aim At: <input type="number" value={this.state.aimat} onChange={this.handleChange("aimat")} /> -
                Multiplier: <input type="number" value={this.state.multi} onChange={this.handleChange("multi")} /> -
                Difficulty: <input type="number" value={this.state.diff} onChange={this.handleChange("diff")} />
              </form>


              <Button
                variant="contained"
                color="primary"
                onClick={() => this.handleChange("score")(null, this.dartboard.throw(this.state.aimat, this.state.multi, this.state.diff))}>
                Throw
              </Button>

              <code>{JSON.stringify(this.state.score, 2, 2) || "Let's Play!"}</code>

          </Grid>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
