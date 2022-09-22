const passwordValidator = password => {
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

  if (!password) {
    return 'Can Not Be Empty';
  }

  if (!passwordRegex.test(password)) {
    return 'Not Strong Password';
  }

  return '';
};

export default passwordValidator;
