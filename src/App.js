import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import  Home  from './components/home/Home';
import Layout from './components/Layout';

function App() {
  
  const [routes, setRoutes] = useState()
  
  const getRoutes = async () => {
    try {
        const response = await api.get("/routes/topten")
        setRoutes(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=> {
    getRoutes ()
  },[])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/' element={<Home routes={routes}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
