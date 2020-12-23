const authReducer = (state=null,action)=>{
    switch(action.type)
    {
        case 'FETCH_USER':
            return action.payload=== ""?false:action.payload;
        default:
            return state;
    }
}
export default authReducer;