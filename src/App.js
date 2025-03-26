import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import SignIn from './components/SignIn';
import AddProduct from './components/AddProduct';
import GetProduct from './components/GetProduct';
import SingleProduct from './components/SingleProduct';
import './App.css'; // This assumes App.css is in the same folder as App.js
import AboutUs from './components/AboutUs';
import "bootstrap-icons/font/bootstrap-icons.min.css";



function App() {
  return (
    <Router>
    <div>
    <header className="App-header">
        <h1>Ritchie & Co - Drive Greatness.</h1>
      </header>
      <Routes>
        <Route path="/signup" element = {< SignUp/>}/>
        <Route path="/signin" element={< SignIn/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
        <Route path="/" element={<GetProduct/>}/>
        <Route path="/singleproduct" element={<SingleProduct/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
