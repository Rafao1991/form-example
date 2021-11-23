import './App.css';
import { Container, Typography } from "@mui/material";
import React, { Component } from 'react';
import SignUpForm from './components/signUpForm';
import { validateCPF } from "./domain/CPF.js"
import { validatePassword } from "./domain/Password.js"
import ValidadeContext from './context/ValidateContext';

class App extends Component {
  render() {
    return <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Sign-up Form
      </Typography>
      <ValidadeContext.Provider value={{ cpf: validateCPF, password: validatePassword }}>
        <SignUpForm signUp={signUp} />
      </ValidadeContext.Provider>
    </Container>;
  }
}

function signUp(data) {
  console.log(data);
}

export default App;