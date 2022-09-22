const phoneValidator = phoneNumber => {
  if (!phoneNumber) {
    return 'Can Not Be Empty';
  }
  const phoneNumberRegex = /(6|7|8|9)\d{9}/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    return 'Invalid';
  }
  return '';
};

export default phoneValidator;
