import {useState} from "react";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from 'uuid';

const Additem = () => {
    const [item,setitem] = useState('')
    const dispatch = useDispatch()
    const addTodo = () =>{
        console.log(item)
        dispatch({
            type:"ADD_ITEM",
            payload:{
                id:uuidv4(),
                text:item
            }
        })
    }
    return (
        <div>
            <input onChange= {(e)=> {setitem(e.target.value)}} type ="text" /><button onClick={addTodo}>Add</button>
        </div>
    );
}
export default Additem;
