import logo from './logo.svg';
import './App.css';
import { SiblingsOne } from './Siblings1';
import { SiblingsTwo } from './Siblings2';
import { useState } from 'react';

function App() {
  const [data, setData] = useState();

  return (
    <div className="App">
        <SiblingsOne setData={setData}/>
        <SiblingsTwo data={data}/>
    </div>
  );
}

export default App;
