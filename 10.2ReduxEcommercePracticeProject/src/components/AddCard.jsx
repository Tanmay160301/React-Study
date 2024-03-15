/* eslint-disable no-unused-vars */
import { useState } from "react";
import {useDispatch} from "react-redux"
import { addProduct } from "../store/ProductSlice/ProductSlice";


export default function AddCard(props) {
    //title, price, rating , image
    const dispatch = useDispatch();

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    // const [dakhav, setDakhav] = useState(false)
    // const [image, setImage] = useState(null)

    const handleSubmit = (e) => {
      e.preventDefault();
        console.log({title, price, rating});
        // console.log(image.name);
        // console.log(URL.createObjectURL(image));
         
        // setDakhav((prev) => !prev)

        dispatch(addProduct({id:Date.now(),title,price,rating}));
    }

    // const handleImage =(e) => {
    //     setImage(e.target.files[0]);
    // }
  return (
    <div className=""> 
      <div className="min-h-screen w-full flex items-center justify-center  dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
            Add Product 
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder=""
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Pricing
              </label>
              <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder=""
                required
              />
             
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Rating
              </label>
              <input
                type="text"
                id="price"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder=""
                required
              />
             
            </div>

            {/* <input type="file" className="mb-4"  onChange={handleImage} name="" id="" /> */}
            
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
        {/* {image && dakhav && (<img src={URL.createObjectURL(image)} width={250} height={100} alt="" />)} */}

      
    </div>
  );
}
