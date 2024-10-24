import logo from './logo.svg';
import './App.css';
import { Portfolio } from './Component/Portfolio';
import {Home} from './Component/Home'
import { Resume } from './Component/Resume';
function App() {
  return (
    <div className="App">
      {/* <Portfolio/> */}
      {/* <Home/> */}
      <Resume/>
    </div>
  );
}

export default App;
