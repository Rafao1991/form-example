import React from "react";
import { validateCPF } from "../domain/CPF.js"
import { validatePassword } from "../domain/Password.js"

const ValidadeContext = React.createContext(
    { cpf: validateCPF, password: validatePassword }
);

export default ValidadeContext;