const domainValidator = value => {
  if (!value) {
    return 'Cant Be Empty';
  }
  if (!/^[a-z0-9]+$/i.test(value)) {
    return 'Invalid';
  }

  return '';
};
export default domainValidator;
