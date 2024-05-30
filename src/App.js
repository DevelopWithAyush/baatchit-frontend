import './App.css';
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Login from './Pages/Login/Login';
import Chat from './Pages/Chat/Chat';
import AlertState from "../src/Context/Alertcontext/AlertState"
import Alert from './Components/Alert/Alert';
function App() {
  return (
    <>
    <Router>
      <AlertState>
        <Alert/>
    <Routes>
      <Route path='/' element= {<Login/>}/>
      <Route path='/chat' element= {<Chat/>}/>
    </Routes>
    </AlertState>
    </Router>
    </>
  );
}

export default App;
