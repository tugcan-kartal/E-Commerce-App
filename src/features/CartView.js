import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';


const CartView = () => {

    const dispatch = useDispatch();
    const carts=useSelector((state)=>state.cartReducer).value;     //storeda cartReducer olarak adlandırdık bu şekilde alıyoruz carttaki itemleri
    console.log(carts)
  return (
    <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {carts && carts.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn"
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