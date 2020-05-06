import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchDocuments(action) {
  try {
    console.log(action.payload);
    let id = action.payload.user;
    const response = yield axios.get(`/api/documents/${id}`);

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