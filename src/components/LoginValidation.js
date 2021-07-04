const LoginValidation = (values) => {
  let errors = {};

  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Podany email jest nieprawidłowy!';
  }
  if (values.password.length < 6) {
    errors.password = 'Podane hasło jest za krótkie!';
  }
  return errors;
};

export default LoginValidation;
