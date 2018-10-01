import { USER_API_2, ACC_API_2, USER_DATA_FAILED, ACC_DATA_FAILED } from '../actions';
export default (state={ data1:[], data2: [], error: '' }, {type, data })=>{
    switch(type){
        case USER_API_2:
            return { 
                ...state,
                data1: data, 
            };
         case ACC_API_2:
         console.log('data 2 :::: in reducer',data)
            return { 
                ...state,
                data2: data, 
            };
            case USER_DATA_FAILED:
                return { 
                    ...state,
                    data1: [],
                    error: 'error in fetching user data'
                };
            case ACC_DATA_FAILED:
                return {
                    ...state,
                    data2: [],
                    error: 'error in fetching account data'

                }

        default:
            return state;

    }
};  