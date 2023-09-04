import { useState } from 'react';
import './App.css';
import UserList from './Components/UserList';

function App() {
  //유저 항목을 나타내는 앱
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'green',
      enail: 'green@naver.com'
    },
    {
      id: 2,
      username: 'blue',
      enail: 'blue@naver.com'
    },
    {
      id: 3,
      username: 'red',
      enail: 'red@naver.com'
    },
  ])
  return (
    <div className="App">
      {/*    키 : 값 */}
      {/* {users: []} */}
      <UserList users={users} />
    </div>
  );
}

export default App;
