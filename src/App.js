import './styles/App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Tasks from './pages/Tasks';
import Navbar from './components/UI/Navbar';
import Button from './components/UI/Button';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Button padding as={Link} to='/login'>Войти</Button>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasks/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
