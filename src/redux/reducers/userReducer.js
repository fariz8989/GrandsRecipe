import { GET_STATUS } from "../action/action-list";
const initialState = {
    username:"",
    status:false
}
const userReducer = (state = initialState,action)=>{
    const{type,payload}=action;
    switch (type){
        case GET_STATUS:
            return{
                ...state,
                username:payload.username,
                status:payload.status
            }
            break;
        default:
            return{
                ...state
            }
            break;
    }
}
export default userReducer