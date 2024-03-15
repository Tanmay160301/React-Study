import {useDispatch,useSelector} from "react-redux"
import { productsInfo } from "./store/ProductSlice/ProductSlice";
import ProductCard from "./components/ProductCard";
import AddCard from "./components/AddCard";
import { useEffect } from "react";
import './App.css'


function App() {
  
  const dispatch = useDispatch();
  const val = useSelector((state) => state.product.value);

  useEffect(() => {
    dispatch(productsInfo());
  }, [dispatch ])



  return (
    <>
      <h1 className='text-orange-600 font-bold text-5xl'>Tanmays Basic E-Commerce App</h1>
      
      <br />
      <br />
      
      <AddCard />

      <div className="grid grid-cols-3">
      {
        val.map((item) => (
          <div key={item.id} >
            <ProductCard id={item.id} title={item.title} price={item.price} rating={item.rating} image ={item.image}/>
          </div>
        ))
      }
      </div>
      

      
      
    </>
  )
}

export default App
