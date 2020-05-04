import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_INFO" actions
function* fetchInfo() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/userInfo', config);

    yield put({ type: 'GET_USER_INFO', payload: response.data });
  } catch (error) {
    console.log('User Info get request failed', error);
  }
}

function* infoSaga() {
  yield takeLatest('FETCH_INFO', fetchInfo);
}

export default infoSaga;
