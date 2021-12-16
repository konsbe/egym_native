import { auth } from "../../firebase/utils";
import { takeLatest, put, all, call } from "redux-saga/effects";

import weekTrainingTypes from "./weekTraining.types";

import {
  handleAddTrainingSchedule,
  handleFetchTrainingSchedules,
  handleFetchUserTrainingSchedule,
  handleAddWeekTraining,
  handleFetchUserTrainingWeeks,
  handleUpdateReminder,
  handleUpdateShowHide,
  handleDeleteWeek,
} from "./weekTraining.helpers";

import {
  setTainingSchedules,
  setUserTrainingSchedule,
  setUserTrainingWeeks,
  updateUserReminder,
  goBackSuccess,
  fetchUserTrainingWeeksStart,
} from "./weekTraining.actions";

export function* addTrainingSchedule({ payload: { email } }) {
  try {
    const timestamp = new Date();
    yield handleAddTrainingSchedule({
      email,
      createdDate: timestamp,
    });
    // yield put(fetchTrainingScheduleStart());
  } catch (err) {
    //
  }
}

export function* onAddTrainingScheduleStart() {
  yield takeLatest(
    weekTrainingTypes.ADD_NEW_TRAINING_SCHEDULE,
    addTrainingSchedule
  );
}

export function* fetchTrainingSchedules() {
  try {
    const trainingSchedules = yield handleFetchTrainingSchedules();
    yield put(setTainingSchedules(trainingSchedules));
  } catch (err) {
    //
  }
}

export function* onFetchTrainingSchedulesStart() {
  yield takeLatest(
    weekTrainingTypes.FETCH_TRAINING_SCHEDULES_START,
    fetchTrainingSchedules
  );
}
//////////////////////////////////////////////////////////////////////

export function* fetchUserTrainingSchedule({ payload }) {
  try {
    const userScheduleData = yield handleFetchUserTrainingSchedule(payload);
    yield put(setUserTrainingSchedule(userScheduleData));
  } catch (err) {}
}

export function* onFetchUserTrainingScheduleStart() {
  yield takeLatest(
    weekTrainingTypes.FETCH_USER_TRAINING_SCHEDULE,
    fetchUserTrainingSchedule
  );
}
////////////////////////////////////////////////////////////////////

export function* addWeekTraining({ payload: { weekProgram, scheduleID } }) {
  try {
    const timestamp = new Date();
    const createdDate = timestamp;
    weekProgram[0].createdDate = createdDate;
    console.log(weekProgram[0], "loolololloolloololololol");
    // console.log(weekProgram, 'loolololloolloololololol')
    // weekProgram[0].push(createdDate)
    // const createdDate = timestamp;
    // weekProgram.push(createdDate);
    const v = timestamp;
    yield handleAddWeekTraining(weekProgram, scheduleID, createdDate);

    // yield put(fetchCalendarsStart());
  } catch (err) {}
}

export function* onAddWeekTrainingStart() {
  yield takeLatest(
    weekTrainingTypes.ADD_NEW_TRAINING_WEEK_START,
    addWeekTraining
  );
}
///////////////////////////////////////////////////////////////////////////////
export function* fetchUserTrainingWeeks({ payload }) {
  try {
    const trainingWeeks = yield handleFetchUserTrainingWeeks(payload);
    yield put(setUserTrainingWeeks(trainingWeeks));
  } catch (err) {}
}
export function* onFetchUserTrainingWeeksStart() {
  yield takeLatest(
    weekTrainingTypes.FETCH_USER_TRAINING_WEEKS_START,
    fetchUserTrainingWeeks
  );
}
///////////////////////////////////////////////////////////////

export function* updateReminder({
  payload: { reminder, scheduleID, documenID, dayNum, exerciseID, list, week },
}) {
  try {
    yield handleUpdateReminder({
      reminder,
      scheduleID,
      documenID,
      dayNum,
      exerciseID,
      list,
      week,
    });
  } catch (err) {}
}

export function* onUpdateUserPayment() {
  yield takeLatest(weekTrainingTypes.UPDATE_USER_REMINDER, updateReminder);
}

export function* updateShowHide({
  payload: { reminder, scheduleID, documenID, dayNum, exerciseID, list, week },
}) {
  try {
    yield handleUpdateShowHide({
      reminder,
      scheduleID,
      documenID,
      dayNum,
      exerciseID,
      list,
      week,
    });
  } catch (err) {}
}

export function* onUpdateUserShowHide() {
  yield takeLatest(weekTrainingTypes.UPDATE_USER_SHOW_HIDE, updateShowHide);
}

export function* goBackToUsers() {
  try {
    yield put(goBackSuccess());
  } catch (err) {
    // console.log(err);
  }
}

export function* onGoBackToUsersStart() {
  yield takeLatest(weekTrainingTypes.GO_BACK_USERS_START, goBackToUsers);
}

export function* deleteWeek({ payload: { scheduleID, documenID } }) {
  try {
    yield handleDeleteWeek({ scheduleID, documenID });
    yield put(fetchUserTrainingWeeksStart());
  } catch (err) {
    //
  }
}

export function* onDeleteExerciseStart() {
  yield takeLatest(weekTrainingTypes.DELETE_EXERCISE_START, deleteWeek);
}

export default function* weekTrainingSagas() {
  yield all([
    call(onAddTrainingScheduleStart),
    call(onFetchTrainingSchedulesStart),
    call(onFetchUserTrainingScheduleStart),
    call(onAddWeekTrainingStart),
    call(onFetchUserTrainingWeeksStart),
    call(onUpdateUserPayment),
    call(onUpdateUserShowHide),
    call(onDeleteExerciseStart),
  ]);
}
