import React,{useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import { fetchProducts } from './productsSlice';

const ProductsView = () => {

    const dispatch=useDispatch();
    const productsData=useSelector((state)=>state.productReducer);

    useEffect(()=>{
        dispatch(fetchProducts());
    },[]);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5'>
        {productsData.loading && "fetching data"}
        {productsData.error && "fetching error"}
        {productsData.products.length>0 && 
            productsData.products.map((val,key)=>(
                <div className='bg-white shadow-md m-4 h-[80vh] w-[18vw] text-center rounded-full relative' key={key}>
                    <div> 
                        <img className='h-[50vh] w-[20vw] rounded-full' src={val.image}/> 
                    </div>
                    <div className='font-bold mt-4'>{val.title}</div>
                    <div className='text-xl font-extrabold mt-6 '>{val.price}$</div>
                    <button className='text-white bg-purple-800 p-2 rounded-full absolute bottom-5 left-[6vw]'>Add To Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default ProductsView