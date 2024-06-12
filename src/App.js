import logo from './logo.svg';
import './App.css';
import AddUser from './components/SignupUser';
import ViewUser from './components/ViewUser';
import LoginUser from './components/LoginUser';
import SignupUser from './components/SignupUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<LoginUser/>}/>
      <Route path='/signup'element={<SignupUser/>}/>
      <Route path='/view'element={<ViewUser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
