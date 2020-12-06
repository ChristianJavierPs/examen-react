import { MESSAGE } from "../actions/alertAction";


const initialState = {
    alert: new Object({
        status:'',
        message:'',
        show:false
    })
}

export default (state =initialState, action)=>{
    switch(action.type){
        case MESSAGE:
            return {
                ...state,
                alert: action.payload
            }
        	default:
			return state;
    }
}