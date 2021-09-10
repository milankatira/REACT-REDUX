//TODO--REDUCERS
//~Reducer are function that take the CUREENT STATE and an ACTION as arguments 
//~and return new state result


const initialState = 0;  //!CURENT STATE

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        //!ACTION.PAYLOAD IS USE THE ARGUMENTS  EX=5 
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

export default changeTheNumber;

