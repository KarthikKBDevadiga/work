const nameValidator = value => {
  if (!value) {
    return 'Can Not Be Empty';
  }
  if (value.length <= 3) {
    return 'Should Be More Than 3 Character';
  }
  if (!/^[a-zA-Z ]+$/.test(value)) {
    return 'Should Contain Only Character';
  }
  return '';
};
export default nameValidator;
