const yearValidator = value => {
  if (!value) {
    return 'Cant Be Empty';
  }
  if (!/^[0-9]+$/.test(value)) {
    return 'Must Be Integer';
  }
  const year = parseInt(value);
  if (year > 2022 || year < 1960) {
    return '1960 - 2022';
  }
  return '';
};
export default yearValidator;
