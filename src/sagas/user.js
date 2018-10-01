import { all ,fork ,call, put, takeEvery, takeLatest,cancel, select } from 'redux-saga/effects'
import { USER_API_1,ACC_API_1,USER_DATA_FAILED, ACC_DATA_FAILED, receiveUserData2,receiveAccData2 } from '../actions'
import { fetchData1,fetchAData1} from '../api';

// worker Saga: will be fired on USER_API_1 actions
function* userData1(action) {
   try {
      const data = yield call(fetchData1); // call runs a funtion ( here fetch ) and pauses the saga if it returns a promise unitl the promise is resolved.
      console.log('data in saga:::::',data)
      const state = yield select();
      console.log('state::::',state);

     // yield cancel();
  //    assert.deepEqual(
  //   gen.next(chooseColor(color)).value,
  //   put(changeUI(color)),
  //   'it should dispatch an action to change the ui'
  // );
      yield put(receiveUserData2(data.results)); // put dispatches an action
   } catch (e) {
     yield put({type: USER_DATA_FAILED})
     console.log('error::',e);
   }
}
function* accountData1(action) {
  try {
     const data = yield call(fetchAData1);
     console.log('acc data in saga :::::',data);
    yield put(receiveAccData2(data.results));
  } catch (e) {
    yield put({type: ACC_DATA_FAILED})
    console.log('error::',e);
  }
}
/*
  Allows concurrent fetches of user.
*/
// watcher saga 
export default function* mySaga() {
  try{
  yield takeLatest(USER_API_1, userData1);
  yield takeEvery(ACC_API_1, accountData1);
  }catch(e){
    console.log('error in mysaga:::',e)
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// export default function* userSaga1(){
//   yield takeLatest("USER_API_1", userData1);
// }

//export default mySaga;
