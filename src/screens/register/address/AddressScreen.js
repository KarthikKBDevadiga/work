import {useReducer, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import {RadioGroup} from 'react-native-radio-buttons-group';
import genericValidator from '../../../validator/generalValidator';
import nameValidator from '../../../validator/nameValidator';
import pincodeValidator from '../../../validator/pincodeValidator';
import {addressReducer, ADDRESS_ACTIONS} from './AddressRedux';

import styles from './AddressScreenStyles';

const states = [
  {label: 'Maharastra', value: 'MH'},
  {label: 'Gujrat', value: 'GJ'},
  {label: 'Karnataka', value: 'KA'},
  {label: 'Madya Pradesh', value: 'MP'},
  {label: 'Delhi', value: 'DL'},
  {label: 'Others', value: 'OTHERS'},
];

const AddressScreen = ({route, navigation}) => {
  const [selectedEducation, setSelectedEducation] = useState();

  const savedRegister = route.params;
  const [register, dispatch] = useReducer(addressReducer, {
    ...savedRegister,
    address: {},
    error: {},
  });

  const submit = () => {
    const addressError = genericValidator(register.address.address);
    const landmarkError = genericValidator(register.address.landmark);
    const cityError = genericValidator(register.address.city);
    const stateError = genericValidator(register.address.state);
    const pincodeError = pincodeValidator(register.address.pincode);

    const error = {
      address: addressError ? addressError : null,
      landmark: landmarkError ? landmarkError : null,
      city: cityError ? cityError : null,
      state: stateError ? stateError : null,
      pincode: pincodeError ? pincodeError : null,
    };

    if (
      error.address == null &&
      error.landmark == null &&
      error.city == null &&
      error.state == null &&
      error.pincode == null
    ) {
      navigation.navigate('AddressScreen');
    } else {
      dispatch({
        type: ADDRESS_ACTIONS.SET_ERROR,
        payload: {
          error,
        },
      });
      // navigation.navigate('AddressScreen', register);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={{paddingVertical: 16}}>
          <Text style={styles.heading}> Your Address</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text
              style={[
                styles.inputHeading,
                register.error.address && {color: 'red'},
              ]}>
              Address *
            </Text>
            {register.error?.address && (
              <Text style={styles.inputError}>{register.error?.address}</Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.address && {borderColor: 'red'},
            ]}>
            <TextInput
              editable
              placeholder="Enter The Address"
              style={[styles.inputField, {paddingLeft: 0, paddingRight: 0}]}
              onChangeText={text => {
                dispatch({
                  type: ADDRESS_ACTIONS.UPDATE_ADDRESS,
                  payload: {
                    address: text,
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
                register.error.landmark && {color: 'red'},
              ]}>
              Landmark *
            </Text>
            {register.error?.landmark && (
              <Text style={styles.inputError}>{register.error?.landmark}</Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.landmark && {borderColor: 'red'},
            ]}>
            <TextInput
              editable
              placeholder="Enter The Landmark"
              style={[styles.inputField, {paddingLeft: 0, paddingRight: 0}]}
              onChangeText={text => {
                dispatch({
                  type: ADDRESS_ACTIONS.UPDATE_LANDMARK,
                  payload: {
                    landmark: text,
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
                register.error.city && {color: 'red'},
              ]}>
              City *
            </Text>
            {register.error?.city && (
              <Text style={styles.inputError}>{register.error?.city}</Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.city && {borderColor: 'red'},
            ]}>
            <TextInput
              editable
              placeholder="Enter The City"
              style={[styles.inputField, {paddingLeft: 0, paddingRight: 0}]}
              onChangeText={text => {
                dispatch({
                  type: ADDRESS_ACTIONS.UPDATE_CITY,
                  payload: {
                    city: text,
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
                register.error.state && {color: 'red'},
              ]}>
              State *
            </Text>
            {register.error?.state && (
              <Text style={styles.inputError}>{register.error?.state}</Text>
            )}
          </View>
          <Dropdown
            style={[
              styles.dropdownContainer,
              {marginTop: 4},
              register.error.state && {borderColor: 'red'},
            ]}
            selectedTextStyle={{color: 'black', fontWeight: 'bold'}}
            data={states}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select Your State'}
            searchPlaceholder="Search..."
            value={selectedEducation}
            onChange={item => {
              // setSelectedEducation(item.value);
              dispatch({
                type: ADDRESS_ACTIONS.UPDATE_STATE,
                payload: {
                  state: item.value,
                },
              });
            }}
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
                register.error.pincode && {color: 'red'},
              ]}>
              Pincode *
            </Text>
            {register.error?.pincode && (
              <Text style={styles.inputError}>{register.error?.pincode}</Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.pincode && {borderColor: 'red'},
            ]}>
            <TextInput
              editable
              placeholder="Enter The Pincode"
              style={[styles.inputField, {paddingLeft: 0, paddingRight: 0}]}
              onChangeText={text => {
                dispatch({
                  type: ADDRESS_ACTIONS.UPDATE_PINCODE,
                  payload: {
                    pincode: text,
                  },
                });
              }}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 16}}>
            <View
              style={{
                flex: 1,
                marginRight: 8,
                borderRadius: 6,
                borderColor: 'darkblue',
                borderWidth: 1,
                overflow: 'hidden',
              }}>
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('blue', false)}
                onPress={() => {
                  navigation.goBack();
                  // navigation.navigate('AddressScreen');
                }}>
                <View
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'darkblue',
                      fontWeight: 'bold',
                    }}>
                    Previous
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View
              style={{
                flex: 1,
                marginLeft: 8,
                borderRadius: 6,
                backgroundColor: 'darkblue',
                overflow: 'hidden',
              }}>
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('blue', false)}
                onPress={() => {
                  submit();
                }}>
                <View
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    Submit
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressScreen;
