const mailReducer = (state=[], action) => {
    switch(action.type)
    {
        case 'FETCH_MAILS':
            return action.payload;
        default: 
            return state;
    }
        
}

export default mailReducer;