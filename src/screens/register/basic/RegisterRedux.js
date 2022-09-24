import {genericValidator} from '../helpers/validator';

export const REGISTER_ACTIONS = {
  UPDATE_FIRST_NAME: 'update_first_name',
  UPDATE_LAST_NAME: 'update_last_name',
  UPDATE_EMAIL: 'update_email',
  UPDATE_PHONE_NUMBER: 'update_phone_number',
  UPDATE_GENDER: 'update_gender',
  UPDATE_PASSWORD: 'update_password',
  UPDATE_CONFIRM_PASSWORD: 'update_confirm_password',
  UPDATE_PASSWORD_VISIBILITY: 'update_password_visibility',
  UPDATE_CONFIRM_PASSWORD_VISIBILITY: 'update_confirm_password_visibility',
  SET_ERROR: 'set_error',
};

export const registerReducer = (register, action) => {
  switch (action.type) {
    case REGISTER_ACTIONS.UPDATE_FIRST_NAME:
      return {
        ...register,
        firstName: action.payload.firstName,
        error: {
          ...register.error,
          firstName: null,
        },
      };
    case REGISTER_ACTIONS.UPDATE_LAST_NAME:
      return {
        ...register,
        lastName: action.payload.lastName,
        error: {
          ...register.error,
          lastName: null,
        },
      };
    case REGISTER_ACTIONS.UPDATE_EMAIL:
      return {
        ...register,
        email: action.payload.email,
        error: {
          ...register.error,
          email: null,
        },
      };
    case REGISTER_ACTIONS.UPDATE_PHONE_NUMBER:
      return {
        ...register,
        phoneNumber: action.payload.phoneNumber,
        error: {
          ...register.error,
          phoneNumber: null,
        },
      };
    case REGISTER_ACTIONS.UPDATE_GENDER:
      return {
        ...register,
        gender: action.payload.gender,
        error: {
          ...register.error,
          gender: null,
        },
      };
    case REGISTER_ACTIONS.UPDATE_PASSWORD:
      return {
        ...register,
        password: action.payload.password,
        error: {
          ...register.error,
          password: null,
        },
      };
    case REGISTER_ACTIONS.UPDATE_CONFIRM_PASSWORD:
      return {
        ...register,
        confirmPassword: action.payload.confirmPassword,
        error: {
          ...register.error,
          confirmPassword: null,
        },
      };
    case REGISTER_ACTIONS.UPDATE_PASSWORD_VISIBILITY:
      return {
        ...register,
        passwordVisibility: action.payload.passwordVisibility,
      };
    case REGISTER_ACTIONS.UPDATE_CONFIRM_PASSWORD_VISIBILITY:
      return {
        ...register,
        confirmPasswordVisibility: action.payload.confirmPasswordVisibility,
      };
    case REGISTER_ACTIONS.SET_ERROR:
      return {
        ...register,
        error: action.payload.error,
      };
    default:
      return register;
  }
};
