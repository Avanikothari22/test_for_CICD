import { USER_API_2, ACC_API_2 } from '../actions';
export default (state={ data1:{}, data2: {} }, {type, data })=>{
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

        default:
            return state;

    }
};  