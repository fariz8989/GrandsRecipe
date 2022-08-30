import { GET_STATUS } from "./action-list";
export const getStatus = payload =>{
    return({
        type:GET_STATUS,
        payload:payload
    })
}