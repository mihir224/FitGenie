import './App.css';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Workout from './components/Workout';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/workout' element={<Workout/>}/>
      </Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
