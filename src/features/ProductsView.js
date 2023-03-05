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
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6'>
        {productsData.loading && "fetching data"}
        {productsData.error && "fetching error"}
        {productsData.products.length>0 && 
            productsData.products.map((val,key)=>(
                <div key={key}>
                    <div> <img src={val.image}/> </div>
                    <div>{val.title}</div>
                    <div>{val.price}</div>
                </div>
            ))
        }
    </div>
  )
}

export default ProductsView