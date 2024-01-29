import UserService from '../../services/Userservice.jsx'
export const retriveUsers = () => async (dispatch) => {
    const ResData=await UserService.getAll()
    return dispatch ({type : "RETRIVE_ALL_USERS",payload: ResData })
} 
export const Users = (id) => async (dispatch) => {
    const ResData = await UserService.Users(id);
    return dispatch ({type : "USERS",payload: ResData })
} 
export const loginUsers = (uname,pass)=>async (dispatch)=>{
    const ResData = await UserService.getUserlogin(uname,pass);
    console.log("action :", ResData);
    return dispatch({type : "RETRIVE_LOGIN_ USERS" , payload : ResData})
}
export const RegisterUsers = (registerationwithRollid)=>async (dispatch)=>{
    const ResData = await UserService.Userregis(registerationwithRollid);
    console.log("action :", ResData);
    return dispatch({type : "RETRIVE_ALL_REGISTER" , payload : ResData})
}
export const DeleteUserinadmin = (id)=>async (dispatch)=>{
    const ResData = await UserService.deleteUserbyid(id);
    console.log("deleteuser :", ResData);
    return dispatch({type : "DELETE_USER" , payload : ResData})
}
export const PatchUser = (id)=>async (dispatch)=>{
    const ResData = await UserService.patchUsersbyid(id);
    console.log("patch user:", ResData);
    return dispatch({type : "PATCH_USER" , payload : ResData})
}
export const PutUser = (id,inp)=>async (dispatch)=>{
    const ResData = await UserService.PutUsersbyid(id,inp);
    console.log("put user:", ResData.data);
    return dispatch({type : "PUT_USER" , payload : ResData})
}
export const trialProduct = ()=>async (dispatch)=>{
    const ResData = await UserService.trialProduct();
    console.log("trialProduct:", ResData.data);
    return dispatch({type : "FAKE_API" , payload : ResData})
}
