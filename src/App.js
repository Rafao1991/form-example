import './App.css';
import { Container, Typography } from "@mui/material";
import React, { Component } from 'react';
import SignUpForm from './components/signUpForm';

class App extends Component {
  render() {
    return <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Sign-up Form
      </Typography>
      <SignUpForm signUp={signUp} />
    </Container>;
  }
}

function signUp(data) {
  console.log(data);
}

export default App;