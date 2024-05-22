import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Footer from'./Component/Footer';
import RouteNav from './Router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
     <Header/>
     <RouteNav />
     
     <Footer/>
     </BrowserRouter>

  
    </>
  );
}

export default App;
