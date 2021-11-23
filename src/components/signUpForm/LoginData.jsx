import React, { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import ValidadeContext from "../../context/ValidateContext.js";

function LoginData({ nextStep }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    password: { valid: true, message: "" },
  });

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
          nextStep({ email, password });
        }
      }}
    >
      <TextField
        id="email"
        label="Email"
        margin="normal"
        onChange={(event) => {
          event.stopPropagation();
          setEmail(event.target.value);
        }}
        value={email}
        type="email"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        id="password"
        error={!error.password.valid}
        helperText={error.password.message}
        label="Password"
        margin="normal"
        name="password"
        onBlur={validateFields}
        onChange={(event) => {
          event.stopPropagation();
          setPassword(event.target.value);
        }}
        value={password}
        type="password"
        variant="outlined"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Next
      </Button>
    </form>
  );
}

export default LoginData;
