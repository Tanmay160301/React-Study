
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

//Always create an object for the state
const initialVal = {
    value: 0
};

//createSlice() is used for setting states and reducers which will manipulate the states
export const counterSlice = createSlice({
    name: "counter",
    initialState : initialVal,//usually an object which has a value

    // reducers is an property which accepts case reducer functions as an object
    reducers: {
        //These are case reducer functions-- Also observe that these actions are synchronous
        //Redux toolkit will automatically give them names internally as counter/increment,
        //counter/decrement, counter/incrementByValue
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByValue: (state, action) => {
            state.value += action.payload; //payload cha use karun aapn message gheu shakto
        }

    }, 
    //In case of creating asynchronous reducers.. we need to create actions first and then we need to create a reducer for that
    extraReducers: (builder) => {
        //You can chain as many cases as you want
        builder
        .addCase(incrementAsync.fulfilled, (state,action) => {
            state.value += action.payload;
        })
        .addCase(incrementAsync.pending, () => console.log("increment Action is in Pending State"))
    }

})

//For handling asynchronous actions we need to make use of createAsyncThunk
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount) => {
        await new Promise((resolve) => setTimeout(() => resolve() ,1000))
        return amount;
    }
)// Later on we will get access to lifecycle states... like pending, fulfilled, rejected



//actions creators export karyche so that components useDispatch cha use karun states update karu shaktat
//Here observe action creator and reducers have the same name 
//Here action creators are being produced for the corresponding case reducer functions 
export const {increment, decrement, incrementByValue} = counterSlice.actions;

// export default counterSlice.reducer kelay so that store madhe reducer chi ek property thevta yeil
//observe that ithe aapn counterSlice.reducer lihilay but store madhe import kartana counterReducer ghetlay
export default  counterSlice.reducer;