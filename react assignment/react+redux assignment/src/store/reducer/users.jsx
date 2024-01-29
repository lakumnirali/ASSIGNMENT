import { RETRIVE_ALL_LOGIN, RETRIVE_ALL_USERS ,RETRIVE_ALL_REGISTER,DELETE_USER,PATCH_USER,PUT_USER,USERS,FAKE_API} from '../action/type.jsx'
const initialState = {};
const usersReducer = (users = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case RETRIVE_ALL_USERS:
            console.log("RETRIVE_ALL_USERS");
            return { ...payload }
        case USERS:
            console.log("USERS");
            return { ...payload }
        case RETRIVE_ALL_LOGIN:
            console.log("RETRIVE_ALL_LOGIN");
            return { ...payload }
        case RETRIVE_ALL_REGISTER:
            console.log("RETRIVE_ALL_REGISTER");
            return { ...payload }
        case DELETE_USER:
            console.log("DELETE_USER");
            return { ...payload }
        case PATCH_USER:
            console.log("PATCH_USER called");
            return { ...payload }
        case PUT_USER:
            console.log("PUT_USER");
            return { ...payload }
        case FAKE_API:
            console.log("FAKE_API");
            return { ...payload }
        default:
            return users
    }
}
export const selectUsers = (state) => state.users
export default usersReducer