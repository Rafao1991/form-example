import React, { useContext, useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import ValidadeContext from "../../context/ValidateContext.js";

function PersonalData({ nextStep }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCPF] = useState("");
  const [sales, setSales] = useState(true);
  const [news, setNews] = useState(true);
  const [error, setError] = useState({ cpf: { valid: true, message: "" } });

  const validate = useContext(ValidadeContext);

  function validateFields(event) {
    event.stopPropagation();
    const { name, value } = event.target;
    const newState = { ...error };
    newState[name] = validate[name](value);
    setError(newState);
  }

  function validateSubmit() {
    for (let field in error) {
      if (!error[field].valid) {
        return false;
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        if (validateSubmit()) {
          nextStep({ firstName, lastName, cpf, sales, news });
        }
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
        name="cpf"
        onBlur={validateFields}
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
      <Button type="submit" id="previous" variant="contained" color="primary">
        Previous
      </Button>
      <Button type="submit" id="next" variant="contained" color="primary">
        Next
      </Button>
    </form>
  );
}

export default PersonalData;
