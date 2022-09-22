const genericValidator = value => {
  if (!value) {
    return 'Cant Be Empty';
  }
  return '';
};
export default genericValidator;
