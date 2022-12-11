import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import AddUser from './pages/AddUser'
import Header from './components/Header';
import axios from 'axios'
import { useState,useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";
const override= {
  display: "block",
  position:"absolute",
  top:"50%",
  left:"50%",
  transform:"translate(-50%,-50%)"
};
function App() {
  const[users,setUsers]=useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
const getUsers=async()=> {
const response=await axios.get('https://jsonplaceholder.typicode.com/users'); 
setUsers(response.data)
setLoading(false);

}
getUsers();
  },[])
 

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      {
        loading ? <RingLoader
        color=' rgb(162, 61, 77)'
        loading={loading}
        cssOverride={override}
        size={150}
        
      /> : <Routes>
      <Route path='/'element={<IndexPage userList={users}/>} />
      <Route path='/add' element={<AddUser/>} />
    </Routes>
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
