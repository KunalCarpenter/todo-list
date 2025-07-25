import React,{useState} from "react";

function TodoInput(props){
    const [inputText,setInputText] = useState('');
    const handleenter = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
    return(
        <div className="input-container">
            <input  
                className="input-box" 
                placeholder="Enter your Task"
                value={inputText}
                onChange={e=>{
                    setInputText(e.target.value)
                }}
                onKeyDown={handleenter}
            />
            <button className="plus-button"
            onClick={()=>{
                props.addList(inputText)
                setInputText("")
            }}>Add</button>
            <br/>
        </div>
        
    )
}
export default TodoInput