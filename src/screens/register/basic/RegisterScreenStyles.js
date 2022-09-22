import {StyleSheet} from 'react-native';

export default RegisterScreenStyles = StyleSheet.create({
  container: {
    // paddingVertical: 16,
    paddingHorizontal: 32,

    // flexDirection: 'row',
    // flex: 1,
    // backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'darkblue',
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: 96,
    height: 96,
    alignSelf: 'center',
  },
  image: {
    width: 86,
    height: 86,
  },
  inputHeading: {
    fontWeight: 'bold',
    color: 'black',
  },
  inputError: {
    color: 'red',
    alignSelf: 'flex-end',
    fontSize: 12,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
  },
  inputField: {
    flex: 1,
    padding: 0,
    paddingRight: 12,
    color: 'black',
    paddingLeft: 12,
  },
});
