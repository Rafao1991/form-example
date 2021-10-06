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
      <SignUpForm signUp={signUp} validateCPF={validateCPF} />
    </Container>;
  }
}

function signUp(data) {
  console.log(data);
}

function validateCPF(cpf) {
  const result = { valid: true, message: "" };

  if (cpf.length !== 11) {
    result.valid = false;
    result.message = "CPF must have 11 characters."
    return result;
  }

  if (!tryCPF(cpf)) {
    result.valid = false;
    result.message = "Please enter a valid CPF."
    return result;
  }

  return result;
}

function tryCPF(cpf) {
  if (cpf === "00000000000") {
    return false;
  }

  if (_validateCpfChunk(cpf, 9, 11) !== parseInt(cpf.substring(9, 10))) {
    return false;
  }

  if (_validateCpfChunk(cpf, 10, 12) !== parseInt(cpf.substring(10, 11))) {
    return false;
  }

  return true;
}

function _validateCpfChunk(cpf, length, aux) {
  let sum = 0;

  for (let i = 1; i <= length; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (aux - i);
  }

  return _validateRest(sum);
}

function _validateRest(sum) {
  const rest = (sum * 10) % 11;

  if ((rest === 10) || (rest === 11)) {
    return 0;
  }

  return rest;
}

export default App;