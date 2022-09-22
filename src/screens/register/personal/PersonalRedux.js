import {genericValidator} from '../helpers/validator';

export const PERSONAL_ACTIONS = {
  UPDATE_EDUCATION: 'update_education',
  UPDATE_YEAR_OF_PASSING: 'update_year_of_passing',
  UPDATE_UNIVERSITY: 'update_university',
  UPDATE_GRADE: 'update_grade',
  UPDATE_EXPERIENCE: 'update_experience',
  UPDATE_DESIGNATION: 'update_designation',
  UPDATE_DOMAIN: 'update_domain',
  SET_ERROR: 'set_error',
};

export const personalReducer = (register, action) => {
  console.log(register);
  switch (action.type) {
    case PERSONAL_ACTIONS.UPDATE_EDUCATION:
      return {
        ...register,
        education: {
          ...register.education,
          education: action.payload.education,
        },
        error: {
          ...register.error,
          education: null,
        },
      };
    case PERSONAL_ACTIONS.UPDATE_YEAR_OF_PASSING:
      return {
        ...register,
        education: {
          ...register.education,
          yearOfPassing: action.payload.yearOfPassing,
        },
        error: {
          ...register.error,
          yearOfPassing: null,
        },
      };
    case PERSONAL_ACTIONS.UPDATE_UNIVERSITY:
      return {
        ...register,
        education: {
          ...register.education,
          university: action.payload.university,
        },
        error: {
          ...register.error,
          university: null,
        },
      };
    case PERSONAL_ACTIONS.UPDATE_GRADE:
      return {
        ...register,
        education: {
          ...register.education,
          grade: action.payload.grade,
        },
        error: {
          ...register.error,
          grade: null,
        },
      };
    case PERSONAL_ACTIONS.UPDATE_EXPERIENCE:
      return {
        ...register,
        professional: {
          ...register.professional,
          experience: action.payload.experience,
        },
        error: {
          ...register.error,
          experience: null,
        },
      };
    case PERSONAL_ACTIONS.UPDATE_DESIGNATION:
      return {
        ...register,
        professional: {
          ...register.professional,
          designation: action.payload.designation,
        },
        error: {
          ...register.error,
          designation: null,
        },
      };
    case PERSONAL_ACTIONS.UPDATE_DOMAIN:
      return {
        ...register,
        professional: {
          ...register.professional,
          domain: action.payload.domain,
        },
        error: {
          ...register.error,
          domain: null,
        },
      };
    case PERSONAL_ACTIONS.SET_ERROR:
      return {
        ...register,
        error: action.payload.error,
      };
    default:
      return register;
  }
};
