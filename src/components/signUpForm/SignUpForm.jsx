import { Button, FormControlLabel, Switch, TextField } from "@mui/material";

function SignUpForm() {
  return (
    <form>
      <TextField
        id="firstName"
        label="First name"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="lastName"
        label="Last name"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="cpf"
        label="CPF"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <FormControlLabel
        control={<Switch id="sales" defaultChecked />}
        label="Sales"
      />
      <FormControlLabel
        control={<Switch id="news" defaultChecked />}
        label="News"
      />
      <Button type="submit" variant="contained" color="primary">
        Sign-up
      </Button>
    </form>
  );
}

export default SignUpForm;
