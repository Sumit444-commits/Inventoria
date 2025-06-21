import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { FaEye, FaShoppingCart, FaTag } from 'react-icons/fa'
const Card = ({id,name,category,price,image}) => {
    // const {cart,setCart,cartCount,setCartCount} = useAppContext()\
    const {handleCart} = useAppContext()
    const handleClick = ()=> {
        handleCart(id)
    }
  return (
 
<div className="text-white rounded-xl shadow-xl bg-gradient-to-br from-blue-900 to-gray-800 flex flex-col items-center justify-between p-6 w-full max-w-sm gap-4 transition-transform hover:scale-[1.02]">
  <div className="w-full flex justify-center">
    <img
      src={image}
      alt={name}
      className="w-48 h-48 object-cover rounded-lg shadow-md"
    />
  </div>

  <div className="text-center space-y-1">
    <h2 className="text-xl font-bold text-gray-100">
      {name.length < 16 ? name : name.slice(0, 16) + "..."}
    </h2>
    <p className="text-sm text-gray-300">{category}</p>
    <p className="text-lg font-semibold text-green-400 flex items-center justify-center gap-1">
      <FaTag className="text-green-300" /> ${price}
    </p>
  </div>

  <div className="w-full flex gap-2">
    <NavLink
      to={`/product/${id}`}
      className="flex-1 flex items-center justify-center gap-2 text-sm bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md transition duration-200"
      title="View Product"
    >
      <FaEye />
      <span className="hidden sm:inline">View</span>
    </NavLink>

    <button
      onClick={handleClick}
      className="flex-1 flex items-center justify-center gap-2 text-sm bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition duration-200"
      title="Add to Cart"
    
    >
      <FaShoppingCart />
      <span className="hidden sm:inline">Add</span>
    </button>
  </div>
</div>
  )

}
export default Card;