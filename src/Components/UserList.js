import React from "react";
function User({user}) {
    return (
        <div>
            {user.username} <span>({user.email})</span>
        </div>
    )
}
function UserList(){
    const users = [
    {
        id: 1,
        username: "jeje",
        email:"jeje@naver.com"
    },
    {
        id: 2,
        username: "blue",
        email:"blue@naver.com"
    },
    {
        id: 3,
        username: "red",
        email:"red@naver.com"
    }
]
    return (
        <div>
            {users.map(user=>(
                <User user={user} />
            ))}
            <p />
            ***************************
            <p />
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
    )
}
export default UserList;