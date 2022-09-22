const a = value => {
  var regExp = /[a-zA-Z]/g;
  if (/(^\d{6}$)/.test(value)) {
    console.log('1');
    /* do something if letters are found in your string */
  } else {
    console.log('2');
    /* do something if letters are not found in your string */
  }
};
a('123302');
