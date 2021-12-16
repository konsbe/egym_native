import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  userErr: [],
  resetPasswordSuccess: false,
  users: [],
  user: [],
};

const coursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userErr: [],
      };
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case userTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload,
      };
    case userTypes.USER_ERRORS:
      return {
        ...state,
        userErr: action.payload,
      };
    case userTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case userTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default coursesReducer;
