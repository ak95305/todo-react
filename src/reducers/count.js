let intialState = 22;

const countUpd = (state = intialState, action) => {
    switch (action.type) {
        case "INC":
            return state = state + 1;

        case "DEC":
            return state = state - 1;
    
        default:
            return state;
    }
}


export default countUpd;