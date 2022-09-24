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
import designationValidator from '../../../validator/designationValidator';
import domainValidator from '../../../validator/domainValidator';
import experienceValidator from '../../../validator/experienceValidator';
import genericValidator from '../../../validator/generalValidator';
import gradeValidator from '../../../validator/gradeValidator';
import nameValidator from '../../../validator/nameValidator';
import yearValidator from '../../../validator/yearValidator';
import {personalReducer, PERSONAL_ACTIONS} from './PersonalRedux';
import styles from './PersonalScreenStyles';

const educations = [
  {label: 'Post Graduate', value: 'POST_GRADUATE'},
  {label: 'Graduate', value: 'GRADUTE'},
  {label: 'HSC/Diploma', value: 'HSC_DIPLOMA'},
  {label: 'SSC', value: 'SSC'},
];

const PersonalScreen = ({route, navigation}) => {
  const savedRegister = route.params;

  console.log(savedRegister);
  const [selectedEducation, setSelectedEducation] = useState();

  const [register, dispatch] = useReducer(personalReducer, {
    ...savedRegister,
    education: {},
    professional: {},
    error: {},
  });
  const nextStep = () => {
    const educationError = genericValidator(register.education.education);
    const yearOfPassingError = yearValidator(register.education.yearOfPassing);
    const universityError = nameValidator(register.education.university);
    const gradeError = gradeValidator(register.education.grade);
    const experienceError = experienceValidator(
      register.professional.experience,
    );
    const designationError = designationValidator(
      register.professional.designation,
    );
    const domainError = domainValidator(register.professional.domain);

    const error = {
      education: educationError ? educationError : null,
      yearOfPassing: yearOfPassingError ? yearOfPassingError : null,
      university: universityError ? universityError : null,
      grade: gradeError ? gradeError : null,
      experience: experienceError ? experienceError : null,
      designation: designationError ? designationError : null,
      domain: domainError ? domainError : null,
    };
    if (
      error.education == null &&
      error.yearOfPassing == null &&
      error.university == null &&
      error.grade == null &&
      error.experience == null &&
      error.designation == null &&
      error.domain == null
    ) {
      navigation.navigate('AddressScreen');
    } else {
      dispatch({
        type: PERSONAL_ACTIONS.SET_ERROR,
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
          <Text style={styles.heading}>Your Info</Text>
          <Text
            style={[
              styles.heading,
              {fontSize: 18, textAlign: 'left', marginTop: 16},
            ]}>
            Educational Info
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text
              style={[
                styles.inputHeading,
                register.error.education && {color: 'red'},
              ]}>
              Education *
            </Text>
            {register.error?.education && (
              <Text style={styles.inputError}>{register.error?.education}</Text>
            )}
          </View>
          <Dropdown
            style={[
              styles.dropdownContainer,
              {marginTop: 4},
              register.error.education && {borderColor: 'red'},
            ]}
            selectedTextStyle={{color: 'black', fontWeight: 'bold'}}
            data={educations}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Select Your Education'}
            searchPlaceholder="Search..."
            value={selectedEducation}
            onChange={item => {
              setSelectedEducation(item.value);
              dispatch({
                type: PERSONAL_ACTIONS.UPDATE_EDUCATION,
                payload: {
                  education: item.value,
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
                register.error.yearOfPassing && {color: 'red'},
              ]}>
              Year Of Passing *
            </Text>
            {register.error?.yearOfPassing && (
              <Text style={styles.inputError}>
                {register.error?.yearOfPassing}
              </Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.yearOfPassing && {borderColor: 'red'},
            ]}>
            <TextInput
              editable
              keyboardType="number-pad"
              placeholder="Enter Year Of Passing"
              maxLength={4}
              style={[styles.inputField, {paddingLeft: 0, paddingRight: 0}]}
              onChangeText={text => {
                dispatch({
                  type: PERSONAL_ACTIONS.UPDATE_YEAR_OF_PASSING,
                  payload: {
                    yearOfPassing: text,
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
                register.error.university && {color: 'red'},
              ]}>
              University *
            </Text>
            {register.error?.university && (
              <Text style={styles.inputError}>
                {register.error?.university}
              </Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.university && {borderColor: 'red'},
            ]}>
            <TextInput
              editable
              placeholder="Enter Your University"
              style={[styles.inputField, {paddingLeft: 0, paddingRight: 0}]}
              onChangeText={text => {
                dispatch({
                  type: PERSONAL_ACTIONS.UPDATE_UNIVERSITY,
                  payload: {
                    university: text,
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
                register.error.grade && {color: 'red'},
              ]}>
              Grade *
            </Text>
            {register.error?.grade && (
              <Text style={styles.inputError}>{register.error?.grade}</Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.grade && {borderColor: 'red'},
            ]}>
            <TextInput
              editable
              placeholder="Enter Your Grade Or Percentage"
              style={[styles.inputField, {paddingLeft: 0, paddingRight: 0}]}
              onChangeText={text => {
                dispatch({
                  type: PERSONAL_ACTIONS.UPDATE_GRADE,
                  payload: {
                    grade: text,
                  },
                });
              }}
            />
          </View>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: 'lightgray',
              marginVertical: 16,
            }}
          />
          <Text style={[styles.heading, {fontSize: 18, textAlign: 'left'}]}>
            Professional Info
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Text
              style={[
                styles.inputHeading,
                register.error.experience && {color: 'red'},
              ]}>
              Experience *
            </Text>
            {register.error?.experience && (
              <Text style={styles.inputError}>
                {register.error?.experience}
              </Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.experience && {borderColor: 'red'},
            ]}>
            <TextInput
              editable
              keyboardType="number-pad"
              placeholder="Enter The Years Of Experience"
              style={[styles.inputField, {paddingLeft: 0, paddingRight: 0}]}
              onChangeText={text => {
                dispatch({
                  type: PERSONAL_ACTIONS.UPDATE_EXPERIENCE,
                  payload: {
                    experience: text,
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
                register.error.designation && {color: 'red'},
              ]}>
              Designation *
            </Text>
            {register.error?.designation && (
              <Text style={styles.inputError}>
                {register.error?.designation}
              </Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.designation && {borderColor: 'red'},
            ]}>
            <TextInput
              editable
              placeholder="Enter Your Designation"
              style={[styles.inputField, {paddingLeft: 0, paddingRight: 0}]}
              onChangeText={text => {
                dispatch({
                  type: PERSONAL_ACTIONS.UPDATE_DESIGNATION,
                  payload: {
                    designation: text,
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
                register.error.domain && {color: 'red'},
              ]}>
              Domain *
            </Text>
            {register.error?.domain && (
              <Text style={styles.inputError}>{register.error?.domain}</Text>
            )}
          </View>
          <View
            style={[
              styles.inputContainer,
              {
                marginTop: 4,
              },
              register.error.domain && {borderColor: 'red'},
            ]}>
            <TextInput
              editable
              placeholder="Enter Your Domain"
              style={[styles.inputField, {paddingLeft: 0, paddingRight: 0}]}
              onChangeText={text => {
                dispatch({
                  type: PERSONAL_ACTIONS.UPDATE_DOMAIN,
                  payload: {
                    domain: text,
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
                  nextStep();
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
                    Next
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

export default PersonalScreen;
