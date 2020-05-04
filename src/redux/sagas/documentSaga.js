import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchDocuments() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/documents', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_DOCUMENTS', payload: response.data });
  } catch (error) {
    console.log('Documents get request failed', error);
  }
}

function* documentSaga() {
  yield takeLatest('FETCH_DOCUMENTS', fetchDocuments);
}

export default documentSaga;