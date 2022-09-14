
import Cpenel from './Admin/Cpenel';
import './App.css';
import Header from './Components/Header/Header';
import Product from './Screens/Products/Product';
import Home from './Screens/Home/Home';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Footer from './Components/Footer/Footer';
import Productdetails from './Screens/Productdetail/Productdetails';
import Registeration from './Screens/Register/Registeration';
import Login from './Screens/Login/Login';
import Payment from "./Screens/Payment/Payment"
import ProtectedRoutes from "./Protected/ProtectedRoutes";
import Cartpage from './Screens/Cartpage/Cartpage';
import store from './Store/Store';
import {persistor} from "./Store/Store"
import {PersistGate} from "redux-persist/integration/react";




function App() {
 
   


  return (
   <>
  <BrowserRouter>
  <Provider store={store}>
  <PersistGate loading={null}  persistor={persistor} >
  <Header/>
  <Routes>
  <Route exact path="/"  element={<Home/>} />
  <Route  exact path="/product/:rout/:gender/:Categore"  element={<Product/>} />
  <Route  exact path="/details/:rout/:id"  element={<Productdetails/>} />
  <Route  exact path="/registration"  element={<Registeration/>} />
  <Route  exact path="/login"  element={<Login/>} />
  <Route  exact path="/cart"  element={<Cartpage />} />
  <Route  exact path="/payment"  element={<ProtectedRoutes Component={Payment}/>} />
  <Route  exact path="/admin"  element={<ProtectedRoutes Component={Cpenel}/>} />
  <Route  path="*" element={<Home/>}/>
  </Routes>
  <Footer/>
  </PersistGate>
  </Provider>
  </BrowserRouter>
   </>
  );
}

export default App;
