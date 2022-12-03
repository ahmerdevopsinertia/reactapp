import logo from './logo.svg';
import Add from './components/add';
import List from './components/list';
import Search from './components/search';
import './App.css';
import { useState } from 'react';

function App() {

  let [userList, setUserList] = useState([]);

  let populateUserList = (data) => {
    setUserList(array => [...array, data]);
  };

  let filterUserList = (data) => {
    setUserList([data]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Add populateUserList={populateUserList} />
        <Search userData={userList} filterUserList={filterUserList}/>
        <List userData={userList} />
      </header>
    </div>
  );
}

export default App;
