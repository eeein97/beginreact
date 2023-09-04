import React, { useState } from "react";
function InputSample(){
    //객체 형태로 상태관리
    const [Inputs, setInputs] = useState({
        name: "",
        nickname: ""
    });
    //구조분해할당 각각 변수에 할당
    const {name, nickname} = Inputs;
    const onChange = (e) => {
        const  {name, value} = e.target;
        setInputs({
            ...Inputs,    //기존 객체를 그대로 덮어씌움
            [name]:value  //name키를 가진 값을 value로 변경
        })
    }
    const onReset = () => {
        setInputs({
            name: "",
            nickname: ""
        });
    }

    return(
        <div>
            <input onChange={onChange} placeholder="이름" name="name" value={name} />
            <input onChange={onChange} placeholder="닉네임" name="nickname" value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}
export default InputSample;
