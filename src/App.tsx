import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Netflix from './pages/Netflix';
import SignUpComp from './components/SignUp';
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Netflix />} />
        <Route path='/comp'element ={<SignUpComp />} />
      </Routes>
    </Router>
  );
}


export default App;