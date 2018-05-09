import { all,fork } from 'redux-saga/effects'
import  userSaga1  from './user';
import accSaga1  from './account';
// export default function* rootSaga(){
//   yield all([
//     fork(userSaga1),
//     fork(userSaga2),
//     fork(accSaga1),
//     fork(accSaga2),
//   ])
// }
export default function* rootSaga(){
  yield all([
  fork(userSaga1),
  // fork(accSaga1)
])
}
