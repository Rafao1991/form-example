import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddressData from "./AddressData";
import LoginData from "./LoginData";
import PersonalData from "./PersonalData";

function SignUpForm({ signUp }) {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (step === 3) {
      signUp(userData);
    }
  });

  const steps = {
    0: <LoginData nextStep={nextStep} />,
    1: <PersonalData nextStep={nextStep} />,
    2: <AddressData nextStep={nextStep} />,
    3: (
      <Typography align="center" variant="h5" component="h3">
        Thanks for your info...
      </Typography>
    ),
  };

  function nextStep(data) {
    setUserData({ ...userData, ...data });
    setStep(step + 1);
  }

  return (
    <>
      <Stepper activeStep={step} alternativeLabel>
        <Step key="loginData">
          <StepLabel>Login data</StepLabel>
        </Step>
        <Step key="personalData">
          <StepLabel>Personal data</StepLabel>
        </Step>
        <Step key="addressData">
          <StepLabel>Address data</StepLabel>
        </Step>
        <Step key="done">
          <StepLabel>All done!</StepLabel>
        </Step>
      </Stepper>
      {steps[step]}
    </>
  );
}

export default SignUpForm;
