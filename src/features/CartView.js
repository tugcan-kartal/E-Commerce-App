import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';

const CartView = () => {

    const dispatch = useDispatch();
    const carts=useSelector((state)=>state.cartReducer).value;     //storeda cartReducer olarak adlandırdık bu şekilde alıyoruz carttaki itemleri
    console.log(carts)
  return (
    <div>
            <h3 className='text-2xl ml-5'>Carts</h3>
            <div className="">
                {carts && carts.map((product) => (
                    <div key={product.id} className="flex justify-between w-[80vw] h-[25vh] ml-[10vw] mt-10 bg-white text-center rounded-full shadow-lg">
                        <img src={product.image} alt="not found" className='ml-[6vw]'/>
                        <h5 className='font-bold  text-xl flex items-center'>{product.title}</h5>
                        <h5 className='font-extrabold text-2xl flex items-center'>{product.price}$</h5>
                        <button
                            className="bg-purple-600 rounded-full h-[8vh] px-1 mt-[8vh] mr-4"
                            onClick={()=>dispatch(removeFromCart(product.id))}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default CartView