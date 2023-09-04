import React from "react";
function Hello({color, age, name, isSpecial}){
    //let {color, age, name} = {color="blue", age="20", name="jeje"}
    return(
        //밖에있는 게 자바스트립트 중괄호, 안에는 객체 중괄호
        <div style={{color:color}}>
            { isSpecial ? <b>***</b> : null }
            안녕하세요 {name} 
            <h2>{age}</h2>
        </div>
    )
}
//디폴트 props 지정
Hello.defaultProps = {
    name: "월요일",
    age: "10",
    color: "blue"
}
//컴포넌트 내보내기
export default Hello;

