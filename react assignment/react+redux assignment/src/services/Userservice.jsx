import jsonapi from './http-comman.jsx'
import FakeProduct from './Product.jsx'
const getUserlogin=(username,password)=>{
    console.log("called inside user services");
return jsonapi.get(`users?username=${username}&password=${password}`)
}
const Userregis=(registerationwithRollid)=>{
    console.log("called inside user services");
return jsonapi.post("users",registerationwithRollid)
}
const getAll=()=>{
return jsonapi.get("users")
}
const Users=(id)=>{
    console.log("users",Users);
return jsonapi.get(`users/${id}`)
}
const deleteUserbyid=(id)=>{
    console.log("deleteUser",deleteUserbyid);
return jsonapi.delete(`users/${id}`)
}
const patchUsersbyid=(id)=>{
    console.log("patch from action",patchUsersbyid);
return jsonapi.patch(`users/${id}`)
}
const PutUsersbyid=(id,inp)=>{
    console.log("put from action",PutUsersbyid);
return jsonapi.put(`users/${id}`,inp)
}
const trialProduct=()=>{
return FakeProduct.get("products")
}
const UserService ={
    getAll,
    getUserlogin,
    Userregis,
    deleteUserbyid,
    patchUsersbyid,
    PutUsersbyid,
    Users,
    trialProduct,
}
export default  UserService 