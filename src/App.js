import './App.css';
import {Comp} from './Comp.js';
import {useEffect} from 'react';
import axios from 'axios';
import Form from "./components/Form";

function App() {

    useEffect(() => {
    axios.get('https://api.github.com/users/minericpark/repos')
      .then((repos) => {
          const allRepos = repos.data;
          console.log(allRepos);
      });
  })


  return (
    <div className = "main">
      <div> Lol </div>
      <Comp name = "yollllo"></Comp>
      <Form />
    </div>
  );
}

export default App;
