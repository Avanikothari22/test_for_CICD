import { all ,fork ,call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { ACC_API_2, ACC_API_1, receiveAccData1,  receiveAccData2} from '../actions'
import { fetchAData1 } from '../api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* accountData1(action) {
   try {
      const data = yield call(fetchAData1);
      console.log('acc data in saga :::::',data);
     yield put(receiveAccData2(data));
   } catch (e) {
     console.log('error::',e);
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* accSaga1(){
  yield takeLatest("ACC_API_1", accountData1);
}

