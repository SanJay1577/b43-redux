
import { useSelector } from 'react-redux';
import './App.css';
import LoginForm from './Component/LoginForm';
import NavBar from './Component/NavBar';
import Theme from './Component/Theme';

function App() {
  const {color} = 
  useSelector(state =>state.themeInfo.data)
  return (
    <div className={color}>
      <Theme/>
      <NavBar/>
      <LoginForm/>
    </div>
  );
}

export default App;
