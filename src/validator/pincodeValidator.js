const pincodeValidator = value => {
  if (!value) {
    return 'Cant Be Empty';
  }
  if (!/(^\d{6}$)/.test(value)) {
    return 'Invalid';
  }
  return '';
};
export default pincodeValidator;
