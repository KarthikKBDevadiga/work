const experienceValidator = value => {
  if (!value) {
    return 'Cant Be Empty';
  }
  if (!/^[0-9]+$/.test(value)) {
    return 'Must Be Integer';
  }
  const year = parseInt(value);
  if (year > 50 || year < 0) {
    return '0 - 50';
  }
  return '';
};
export default experienceValidator;
