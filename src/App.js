import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/sign In/SignIn';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
