export const USER_API_1 = 'USER_API_1';
export const USER_API_2 = 'USER_API_2';
export const ACC_API_1 = 'ACC_API_1';
export const ACC_API_2 = 'ACC_API_2';


export const receiveUserData1 = () => ({ type: USER_API_1 })
export const receiveUserData2 = (data) => ({ type: USER_API_2, data })
export const receiveAccData1 = () => ({ type:ACC_API_1 })
export const receiveAccData2 = (data) => ({ type:ACC_API_2, data })