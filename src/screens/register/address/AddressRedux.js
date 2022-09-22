import {genericValidator} from '../helpers/validator';

export const ADDRESS_ACTIONS = {
  UPDATE_ADDRESS: 'update_address',
  UPDATE_LANDMARK: 'update_landmark',
  UPDATE_CITY: 'update_city',
  UPDATE_STATE: 'update_state',
  UPDATE_PINCODE: 'update_pincode',
  SET_ERROR: 'set_error',
};

export const addressReducer = (register, action) => {
  console.log(register);
  switch (action.type) {
    case ADDRESS_ACTIONS.UPDATE_ADDRESS:
      return {
        ...register,
        address: {
          ...register.address,
          address: action.payload.address,
        },
        error: {
          ...register.error,
          address: null,
        },
      };
    case ADDRESS_ACTIONS.UPDATE_LANDMARK:
      return {
        ...register,
        address: {
          ...register.address,
          landmark: action.payload.landmark,
        },
        error: {
          ...register.error,
          landmark: null,
        },
      };
    case ADDRESS_ACTIONS.UPDATE_CITY:
      return {
        ...register,
        address: {
          ...register.address,
          city: action.payload.city,
        },
        error: {
          ...register.error,
          city: null,
        },
      };
    case ADDRESS_ACTIONS.UPDATE_STATE:
      return {
        ...register,
        address: {
          ...register.address,
          state: action.payload.state,
        },
        error: {
          ...register.error,
          state: null,
        },
      };
    case ADDRESS_ACTIONS.UPDATE_PINCODE:
      return {
        ...register,
        address: {
          ...register.address,
          pincode: action.payload.pincode,
        },
        error: {
          ...register.error,
          pincode: null,
        },
      };
    case ADDRESS_ACTIONS.SET_ERROR:
      return {
        ...register,
        error: action.payload.error,
      };
    default:
      return register;
  }
};
