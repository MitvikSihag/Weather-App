import React, {useState} from "react";

function Input(props)
{
    const [currName, setName] = useState("");

    function handleChange(event)
    {
        let temp = event.target.value;
        setName(temp);
    }

    return (
        <div class="Input">
            <input onChange = {handleChange} type="text" placeholder="Enter City Name" value = {currName} />
            <button onClick = {(event) =>
            {
                // props.onclick(currName);
                props.onclick(currName);
                event.preventDefault();
                setName("");
            }}
                
            >Search</button>
        </div>
    );
}

export default Input;