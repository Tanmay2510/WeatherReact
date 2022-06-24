import logo from './logo.svg';
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Forecast from './components/Forecast';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path ="/" element={      <Mainpage/>   }>    </Route>

    <Route exact path ="/forecaste" element={      <Forecast/>   }> </Route>

         </Routes>

      </div>
  );
}

export default App;
