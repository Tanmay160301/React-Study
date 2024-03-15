/* eslint-disable react/prop-types */
import {useDispatch} from "react-redux"
import { deleteProduct } from "../store/ProductSlice/ProductSlice";
import { useState } from "react";
import LogoFinalImage from '../assets/LogoFinalImage.png' 
import DeleteIconFinalImage from '../assets/DeleteIconFinalImage.png' 

export default function ProductCard(props) {
  // console.log(props);
  const [editable, setEditable] = useState(true);

  const [title, setTitle] = useState(props.title?props.title:"");
  const [rating, setRating] = useState(props.rating?props.rating.rate:"")
  const [price, setPrice] = useState(props.price?props.price:"")


  const dispatch = useDispatch();
  
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(props.id))
  }

  const handleEdit =(e) => {
    e.preventDefault();
    setEditable((prev) => !prev);
    
  }


  return (
    <>
      <div
       
        className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
      >
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="object-cover"
            src={props.image ? props.image : "Wait please"}
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {props.id}
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          {/* <a href="#" className="h-16 overflow-hidden"> */}
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  className="text-xl tracking-tight text-slate-900" readOnly ={editable}/>
              {/* {props.title} */}
            
          {/* </a> */}
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <input value={price} onChange={(e) => setPrice(e.target.value)} className="text-3xl font-bold text-slate-900 w-32" readOnly ={editable}/>
                {/* ${props.price} */}
              
              <span className="text-sm text-slate-900 line-through">$699</span>
            </p>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} className="mr-2 ml-3 w-10 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold" readOnly ={editable}/>
                {/* {props.rating ? props.rating.rate : ""} */}
              {/* </span> */}
            </div>
          </div>
          <button
            onClick={handleDelete}
            className="flex items-center justify-center rounded-md w-32 bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <div className="flex space-x-2">
            <img src={DeleteIconFinalImage} height={20} width={20} alt="" />
             <span>Delete</span> 
            </div>
           
          </button>
          <button
            onClick={handleEdit}
            className=" mt-4 w-32 flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >

            {(editable)? (
              <div className="flex flex-row space-x-3 justify-center items-center" >
            <div className="text-sm">✏️</div>
            <label htmlFor="edit">Edit</label> </div>)  : (
              <div className="flex flex-row space-x-5" >
               <img src={LogoFinalImage} height={20} width={20} alt="" />
              <label htmlFor="edit">Save</label>
              </div>
            )}
            
          </button>
        </div>
      </div>

    </>
  );
}
