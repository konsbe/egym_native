import weekTrainingTypes from "./weekTraining.types";

export const addTrainingScheduleStart = (trainingData) => ({
  type: weekTrainingTypes.ADD_NEW_TRAINING_SCHEDULE,
  payload: trainingData,
});

export const fetchTrainingSchedulesStart = () => ({
  type: weekTrainingTypes.FETCH_TRAINING_SCHEDULES_START,
});

export const setTainingSchedules = (trainingSchedules) => ({
  type: weekTrainingTypes.SET_TRAINING_SCHEDULES,
  payload: trainingSchedules,
});
export const fetchUserTrainingScheduleStart = (email) => ({
  type: weekTrainingTypes.FETCH_USER_TRAINING_SCHEDULE,
  payload: email,
});

export const setUserTrainingSchedule = (userScheduleData) => ({
  type: weekTrainingTypes.SET_USER_TRAINING_SCHEDULE,
  payload: userScheduleData,
});

export const addWeekTrainingStart = (weekProgram) => ({
  type: weekTrainingTypes.ADD_NEW_TRAINING_WEEK_START,
  payload: weekProgram,
});

////////////////////////////////////////////////////////

export const fetchUserTrainingWeeksStart = (documentID) => ({
  type: weekTrainingTypes.FETCH_USER_TRAINING_WEEKS_START,
  payload: documentID,
});
export const setUserTrainingWeeks = (trainingWeeks) => ({
  type: weekTrainingTypes.SET_USER_TRAINING_WEEKS,
  payload: trainingWeeks,
});


export const updateUserReminder = (upData) => ({
  type: weekTrainingTypes.UPDATE_USER_REMINDER,
  payload: upData,
});

export const updateUserShowHide = (upData) => ({
  type: weekTrainingTypes.UPDATE_USER_SHOW_HIDE,
  payload: upData,
});


export const goBackSuccess = () => ({
  type: weekTrainingTypes.SIGN_OUT_USER_SUCCESS,
});


export const deleteWeekStart = (upData) => ({
  type: weekTrainingTypes.DELETE_EXERCISE_START,
  payload: upData,
});
