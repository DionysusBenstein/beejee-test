import './styles/App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/actions';
import Tasks from './pages/Tasks';
import Navbar from './components/UI/Navbar';
import Button from './components/UI/Button';
import Flash from './components/Flash';
import Login from './pages/Login';

function App() {
  const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Flash/>
      <BrowserRouter>
        <Navbar>
          {!isAuth && <Button padding as={Link} to='/'>Главная</Button>}
          {isAuth ? 
          <Button padding as={Link} to='/' onClick={() => dispatch(logout())}>Выйти</Button> :
          <Button padding as={Link} to='/login'>Войти</Button>}
        </Navbar>
        <Routes>
          <Route path="/" element={<Tasks/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
