import { useSelector } from 'react-redux';
import './App.css'

function App() {
  console.log(useSelector((state) => state.tasks))
  return (
    <div className="App">
     <h1>Hello wolrd</h1>
    </div>
  )
}

export default App
