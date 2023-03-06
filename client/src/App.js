import './App.css';
import Navigation from './Components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register/Register';
import Error from './Pages/Error/Error';
import Footer from './Components/Footer';
import Panier from './Pages/Panier/Panier';
import Profile from './Pages/Profile/Profile';
import Contact from './Pages/Contact/Contact';
import PlantsOrnemen from './Pages/plants ornementaux/PlantsOrnemen';
import Arbresfruitiers from './Pages/arbres fruitiers/Arbresfruitiers';
import Aménagements from './Pages/aménagements des jardins/Aménagements';
import ArbresInterieurs from './Pages/arbres intérieurs/ArbresInterieurs';
import Services from './Pages/Services/Services';
import Add from './Pages/Add product/Add';
import Products from './Pages/Products/Products';
import Info from './Components/Info';
import Admin from './Pages/Admin/Admin';
import UserList from './Pages/Utilisateurs/UserList';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'; 
import { current } from './JS/Actions/user';
import Editproduct from './Pages/Edit product/Editproduct';
import { currentAdmin } from './JS/Actions/admin';
import FilterProduct from './Components/FilterProduct';



function App() {
  
  // const isAuth= useSelector((state) => state.adminReducer.isAuth);
  // const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const [inputSearch, setInputSearch] = useState('');
  
  
  

  
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(current());
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(currentAdmin());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Info/>
      <Navigation />
      <FilterProduct  inputSearch={inputSearch}
        setInputSearch={setInputSearch}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/plantsornements" element={<PlantsOrnemen />} />
        <Route path="/arbres_fruitiers" element={<Arbresfruitiers />} />
        <Route path="/aménagements" element={<Aménagements />} />
        <Route path="/interieurs" element={<ArbresInterieurs />} />

      
       
          <Route path="/panier" element={<Panier />} />
        

          
        
        
        <Route path="/profile" element={<Profile />} />
        
        <Route path="/add" element={<Add/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/users" element={<UserList />} />
        

        <Route path="/editproduct/:_id" element={<Editproduct />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
