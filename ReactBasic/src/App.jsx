import { useState } from 'react';
import './App.css';
import Card from './components/card';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   
     <Card username = "ajeet kumar "  btntext = "clickd me" />
     <Card username = "ajeet" />

      <h1 className="bg-green-400 text-red-500 rounded-xl p-2">Tailwind Test</h1>
    </>
  );
}

export default App;
