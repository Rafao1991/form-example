import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function AddressData({ nextStep }) {
  const [cep, setCEP] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        nextStep({ cep, address, number, state, city });
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        margin="normal"
        onChange={(event) => {
          event.stopPropagation();
          setCEP(event.target.value);
        }}
        value={cep}
        type="number"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="address"
        label="Address"
        margin="normal"
        onChange={(event) => {
          event.stopPropagation();
          setAddress(event.target.value);
        }}
        value={address}
        variant="outlined"
        fullWidth
      />
      <TextField
        id="number"
        label="Number"
        margin="normal"
        onChange={(event) => {
          event.stopPropagation();
          setNumber(event.target.value);
        }}
        value={number}
        type="number"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="state"
        label="State"
        margin="normal"
        onChange={(event) => {
          event.stopPropagation();
          setState(event.target.value);
        }}
        value={state}
        variant="outlined"
      />
      <TextField
        id="city"
        label="City"
        margin="normal"
        onChange={(event) => {
          event.stopPropagation();
          setCity(event.target.value);
        }}
        value={city}
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Sign-up
      </Button>
    </form>
  );
}

export default AddressData;
