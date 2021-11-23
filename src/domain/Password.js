function validatePassword(password) {
    const result = { valid: true, message: "" };

    if (password.length < 4 || password.length > 72) {
        result.valid = false;
        result.message = "Password must have from 4 to 72 characters."
        return result;
    }

    return result;
}

export { validatePassword };