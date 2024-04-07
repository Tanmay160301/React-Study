
import { useEffect,useState } from 'react';
import authService from './appwrite/auth';
import  './App.css'
import {LoginReducer,LogoutReducer} from './store/AuthSlice/authSlice'
import {useDispatch} from 'react-redux'
import { Footer, Header } from './components'
import {Outlet} from 'react-router-dom'
import './App.css'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // console.log(import.meta.env.DB_PASSWORD);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  

  // Jr component mount hoil tyaveli tyala loading component dakhavla jail ... mg userData ahe ki nahi te bghitla jail jr asel tr tyacha data dila jail

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {

      
      if (userData) {
      
        dispatch(LoginReducer({userData}));
      } else {
      
        dispatch(LogoutReducer())
      }
    })
    .finally( () => setLoading(false))

  } ,[]);

  return !loading? ( 
    <div className='min-h-screen flex flex-wrap content-between bg-slate-200'>
      <div className='block w-full'>
        <Header />
        <main>
          <Outlet /> 
        </main>
        <Footer />
      </div>
    </div>
    )  : null
   
    
  
}

export default App;

