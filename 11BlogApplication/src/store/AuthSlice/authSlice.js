import {createSlice} from '@reduxjs/toolkit'

// Things to do ://User data I think aapn appwrite madhun ghenar and initialize karun taknar tyacha ekda data console.log karun bghuyat.

//The main point of this slice is to check whether the user is authenticated or not
//User data I think aapn appwrite madhun ghenar and initialize karun taknar tyacha ekda data console.log karun bghuyat
const initialState = {
    status:false,
    userData:null//IDK which form is userData yet
}
// Ha data maybe aapn frontend through set karnar ...
/* 
    Maybe pahila aapn login form fill karnar and then 
    authservice through login karavnar ...
    and then i guess initialState aapn dispatch karnar
*/

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        LoginReducer: (state,action) => {
            
            state.status = true;
            state.userData = action.payload.userData;
            // console.log(state.userData)
        },
        LogoutReducer: (state) => {
            state.status = false;
            state.userData = null;
        },
    }
});

export const {LoginReducer, LogoutReducer } = authSlice.actions;

export default authSlice.reducer;