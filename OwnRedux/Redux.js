// initial state.
const initState={ count:0 };

//reducer
const reducer=(state,action)=>({
    ...state, ...action.payload
});
//create class
class store{
    constructor(reducer,initState){
        this.reducer=reducer;
        this.state=initState;
    }

    getState(){
        return this.state;
    }

    dispatch(action){
        this.state=this.reducer(this.state, action);
    }
}
var Alldata=new store(reducer,initState)
console.log(Alldata.getState());
Alldata.dispatch({type:'UPDATE',payload:{counter:10}});
console.log(Alldata.getState());
