const emailValidator = email => {
  const emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  if (!email) {
    return 'Can Not Be Empty';
  }

  if (!emailRegex.test(email)) {
    return 'Invalid';
  }

  return '';
};

export default emailValidator;
