import {useCallback, useReducer} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import {RadioGroup} from 'react-native-radio-buttons-group';
import EditIcon from '../../../../icons/EditIcon';
import LockIcon from '../../../../icons/LockIcon';
import MailIcon from '../../../../icons/MailIcon';
import PhoneIcon from '../../../../icons/PhoneIcon';
import ProfileIcon from '../../../../icons/ProfileIcon';
import UserIcon from '../../../../icons/UserIcon';
import VisibilityIcon from '../../../../icons/VisibilityIcon';
import VisibilityOffIcon from '../../../../icons/VisibilityOffIcon';
import emailValidator from '../../../validator/emailValidator';
import genderValidator from '../../../validator/genderValidator';
import nameValidator from '../../../validator/nameValidator';
import passwordValidator from '../../../validator/passwordValidator';
import phoneValidator from '../../../validator/phoneValidator';
import {registerReducer, REGISTER_ACTIONS} from './RegisterRedux';
import styles from './RegisterScreenStyles';

const genders = [
  {
    id: '1',
    label: 'Male',
    value: 'male',
    size: 18,
    color: 'darkblue',
  },
  {
    id: '2',
    label: 'Female',
    value: 'female',
    size: 18,
    color: 'darkblue',
  },
];

const RegisterScreen = ({navigation}) => {
  const [register, dispatch] = useReducer(registerReducer, {error: {}});

  const nextStep = () => {
    const firstNameError = nameValidator(register.firstName);
    const lastNameError = nameValidator(register.lastName);
    const phoneNumberError = phoneValidator(register.phoneNumber);
    const emailError = emailValidator(register.email);
    const genderError = genderValidator(register.gender);
    const passwordError = passwordValidator(register.password);
    const confirmPasswordError = passwordValidator(register.confirmPassword);

    const error = {
      firstName: firstNameError ? firstNameError : null,
      lastName: lastNameError ? lastNameError : null,
      phoneNumber: phoneNumberError ? phoneNumberError : null,
      email: emailError ? emailError : null,
      gender: genderError ? genderError : null,
      password: passwordError ? passwordError : null,
      confirmPassword: confirmPasswordError ? confirmPasswordError : null,
    };

    if (
      error.confirmPassword == null &&
      register.password != register.confirmPassword
    ) {
      error.confirmPassword = 'Does Not Match';
    }

    if (
      error.firstName == null &&
      error.lastName == null &&
      error.phoneNumber == null &&
      error.email == null &&
      error.gender == null &&
      error.password == null &&
      error.confirmPassword == null
    ) {
      navigation.navigate('PersonalScreen', register);
    } else {
      dispatch({
        type: REGISTER_ACTIONS.SET_ERROR,
        payload: {
          error,
        },
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={{paddingVertical: 16}}>
          <Text style={styles.heading}>Register</Text>
          <View style={styles.imageContainer}>
            <View style={{}}>
              <ProfileIcon />
            </View>

            <View
              style={{
                position: 'absolute',
                alignSelf: 'flex-end',
                width: 24,
                height: 24,
                borderRadius: 12,
                overflow: 'hidden',
              }}>
              <TouchableNativeFeedback
                onPress={() => {}}
                background={TouchableNativeFeedback.Ripple('blue', false)}>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 4,
                  }}>
                  <EditIcon />
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text
              style={[
                styles.inputHeading,
                register.error.firstName && {color: 'red'},
              ]}>
              First Name *
            </Text>
            {register.error?.firstName && (
              <Text style={styles.inputError}>{register.error?.firstName}</Text>
            )}
          </View>

          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.firstName && {borderColor: 'red'},
            ]}>
            <UserIcon color={register.error.firstName ? 'red' : 'darkblue'} />
            <TextInput
              editable
              keyboardType="default"
              placeholder="Enter Your First Name Here"
              style={[
                styles.inputField,
                register.error.firstName && {color: 'red'},
              ]}
              onChangeText={text => {
                dispatch({
                  type: REGISTER_ACTIONS.UPDATE_FIRST_NAME,
                  payload: {
                    firstName: text,
                  },
                });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text
              style={[
                styles.inputHeading,
                register.error.lastName && {color: 'red'},
              ]}>
              Last Name *
            </Text>
            {register.error?.lastName && (
              <Text style={styles.inputError}>{register.error?.lastName}</Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.lastName && {borderColor: 'red'},
            ]}>
            <UserIcon color={register.error.lastName ? 'red' : 'darkblue'} />
            <TextInput
              editable
              keyboardType="default"
              placeholder="Enter Your Last Name Here"
              style={[
                styles.inputField,
                register.error.lastName && {color: 'red'},
              ]}
              onChangeText={text => {
                dispatch({
                  type: REGISTER_ACTIONS.UPDATE_LAST_NAME,
                  payload: {
                    lastName: text,
                  },
                });
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text
              style={[
                styles.inputHeading,
                register.error.phoneNumber && {color: 'red'},
              ]}>
              Phone Number *
            </Text>
            {register.error?.phoneNumber && (
              <Text style={styles.inputError}>
                {register.error?.phoneNumber}
              </Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.phoneNumber && {borderColor: 'red'},
            ]}>
            <PhoneIcon
              color={register.error.phoneNumber ? 'red' : 'darkblue'}
            />
            <TextInput
              editable
              keyboardType="phone-pad"
              placeholder="Enter Your 10 Digit Phone Number"
              style={[
                styles.inputField,
                register.error.phoneNumber && {color: 'red'},
              ]}
              onChangeText={text => {
                dispatch({
                  type: REGISTER_ACTIONS.UPDATE_PHONE_NUMBER,
                  payload: {
                    phoneNumber: text,
                  },
                });
              }}
              value={register.phoneNumber}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text
              style={[
                styles.inputHeading,
                register.error.email && {color: 'red'},
              ]}>
              Email *
            </Text>
            {register.error?.email && (
              <Text style={styles.inputError}>{register.error?.email}</Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.email && {borderColor: 'red'},
            ]}>
            <MailIcon color={register.error.email ? 'red' : 'darkblue'} />
            <TextInput
              editable
              keyboardType="email-address"
              placeholder="Enter Email Goes Here"
              style={styles.inputField}
              onChangeText={text => {
                dispatch({
                  type: REGISTER_ACTIONS.UPDATE_EMAIL,
                  payload: {
                    email: text,
                  },
                });
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text
              style={[
                styles.inputHeading,
                register.error.gender && {color: 'red'},
              ]}>
              Gender *
            </Text>
            {register.error?.gender && (
              <Text style={styles.inputError}>{register.error?.gender}</Text>
            )}
          </View>
          <RadioGroup
            size={12}
            layout="row"
            radioButtons={genders}
            onPress={value => {
              dispatch({
                type: REGISTER_ACTIONS.UPDATE_GENDER,
                payload: {
                  gender: value.find(item => item.selected).value,
                },
              });
            }}
            // onPress={onPressRadioButton}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text
              style={[
                styles.inputHeading,
                register.error.password && {color: 'red'},
              ]}>
              Password *
            </Text>
            {register.error?.password && (
              <Text style={styles.inputError}>{register.error?.password}</Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.password && {borderColor: 'red'},
            ]}>
            <LockIcon color={register.error.password ? 'red' : 'darkblue'} />
            <TextInput
              secureTextEntry={register.passwordVisibility}
              editable
              keyboardType="password"
              placeholder="Password"
              style={styles.inputField}
              onChangeText={text => {
                dispatch({
                  type: REGISTER_ACTIONS.UPDATE_PASSWORD,
                  payload: {
                    password: text,
                  },
                });
              }}
            />
            <View
              style={{
                borderRadius: 6,
                overflow: 'hidden',
              }}>
              <TouchableNativeFeedback
                onPress={() => {
                  dispatch({
                    type: REGISTER_ACTIONS.UPDATE_PASSWORD_VISIBILITY,
                    payload: {
                      passwordVisibility: register.passwordVisibility
                        ? false
                        : true,
                    },
                  });
                }}
                background={TouchableNativeFeedback.Ripple('gray', false)}>
                <View style={{padding: 2}}>
                  {register.passwordVisibility ? (
                    <VisibilityOffIcon
                      color={register.error.phoneNumber ? 'red' : 'darkblue'}
                    />
                  ) : (
                    <VisibilityIcon
                      color={register.error.phoneNumber ? 'red' : 'darkblue'}
                    />
                  )}
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text
              style={[
                styles.inputHeading,
                register.error.confirmPassword && {color: 'red'},
              ]}>
              Confirm Password *
            </Text>
            {register.error?.confirmPassword && (
              <Text style={styles.inputError}>
                {register.error?.confirmPassword}
              </Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.confirmPassword && {borderColor: 'red'},
            ]}>
            <LockIcon
              color={register.error.confirmPassword ? 'red' : 'darkblue'}
            />
            <TextInput
              editable
              secureTextEntry={register.confirmPasswordVisibility}
              placeholder="Password"
              style={styles.inputField}
              onChangeText={text => {
                dispatch({
                  type: REGISTER_ACTIONS.UPDATE_CONFIRM_PASSWORD,
                  payload: {
                    confirmPassword: text,
                  },
                });
              }}
            />
            <View
              style={{
                borderRadius: 6,
                overflow: 'hidden',
              }}>
              <TouchableNativeFeedback
                onPress={() => {
                  dispatch({
                    type: REGISTER_ACTIONS.UPDATE_CONFIRM_PASSWORD_VISIBILITY,
                    payload: {
                      confirmPasswordVisibility:
                        register.confirmPasswordVisibility ? false : true,
                    },
                  });
                }}
                background={TouchableNativeFeedback.Ripple('gray', false)}>
                <View style={{padding: 2}}>
                  {register.confirmPasswordVisibility ? (
                    <VisibilityOffIcon
                      color={register.error.phoneNumber ? 'red' : 'darkblue'}
                    />
                  ) : (
                    <VisibilityIcon
                      color={register.error.phoneNumber ? 'red' : 'darkblue'}
                    />
                  )}
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View
            style={{
              borderRadius: 6,
              backgroundColor: 'darkblue',
              marginTop: 16,
              overflow: 'hidden',
            }}>
            <TouchableNativeFeedback
              onPress={() => nextStep()}
              style={{overflow: 'hidden'}}
              background={TouchableNativeFeedback.Ripple('blue', false)}>
              <View
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Next
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
