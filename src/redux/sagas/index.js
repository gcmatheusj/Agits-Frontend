import { takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { Types } from '../actions/tutor';

function* createTutor(action) {
  const tutor = yield axios.post('http://localhost:3001/tutores', {
    tutor: action.tutor,
  });
  console.log(tutor);
}

export default function* rootSaga() {
  yield all([
    takeLatest(Types.CREATETUTOR_REQUEST, createTutor),
  ]);
}
