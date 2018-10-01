import { all,fork, cancel } from 'redux-saga/effects'
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
  try{
 let task =  yield all([
  fork(userSaga1),
  //fork(accSaga1)
]);
//  console.log('taskk::::::', task)
// // task[0].cancel()
// // console.log('taskk cancelled::::::', task[0].isCancelled())
// yield cancel(task[0])
// console.log('taskk cancelled::::::', task[0].isCancelled())
  }catch(e){
    console.log('error in rootSaga:::',e)
  }

}
 