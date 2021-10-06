import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@mui/material";

function SignUpForm({ signUp, validateCPF }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCPF] = useState("");
  const [sales, setSales] = useState(true);
  const [news, setNews] = useState(true);
  const [error, setError] = useState({ cpf: { valid: true, message: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        signUp({ firstName, lastName, cpf, sales, news });
      }}
    >
      <TextField
        id="firstName"
        label="First name"
        margin="normal"
        onChange={(event) => {
          event.stopPropagation();
          setFirstName(event.target.value);
        }}
        value={firstName}
        variant="outlined"
        fullWidth
      />
      <TextField
        id="lastName"
        label="Last name"
        margin="normal"
        onChange={(event) => {
          event.stopPropagation();
          setLastName(event.target.value);
        }}
        value={lastName}
        variant="outlined"
        fullWidth
      />
      <TextField
        id="cpf"
        error={!error.cpf.valid}
        helperText={error.cpf.message}
        label="CPF"
        margin="normal"
        onBlur={(event) => {
          event.stopPropagation();
          const result = validateCPF(cpf);
          setError({ cpf: result });
        }}
        onChange={(event) => {
          event.stopPropagation();
          setCPF(event.target.value);
        }}
        value={cpf}
        variant="outlined"
        fullWidth
      />
      <FormControlLabel
        control={
          <Switch
            id="sales"
            checked={sales}
            onChange={(event) => {
              event.stopPropagation();
              setSales(event.target.checked);
            }}
          />
        }
        label="Sales"
      />
      <FormControlLabel
        control={
          <Switch
            id="news"
            checked={news}
            onChange={(event) => {
              event.stopPropagation();
              setNews(event.target.checked);
            }}
          />
        }
        label="News"
      />
      <Button type="submit" variant="contained" color="primary">
        Sign-up
      </Button>
    </form>
  );
}

export default SignUpForm;
