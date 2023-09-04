import React, { useState } from "react";
function Counter(){
    //useState(상태초기값)
    //--> 배열 [상태, setter함수]
    // const stateArray = useState(0);
    // console.log(stateArray);
    // const number = stateArray[0];
    // const setNumber = stateArray[1];
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number+1);
        console.log("number값은 :"+number);
    }
    const onDecrease = () => {
        setNumber(number-1);
        console.log("number값은 :"+number);
    }
    return(
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default Counter;
