import './App.css';
import Header from './components/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductBrowser from './components/Product';
import CartPage from './components/CartPage';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        
        <Header/>
       <ProductBrowser/>
<CartPage/>
     
    
         
 
      </div>
  );
}

export default App;
