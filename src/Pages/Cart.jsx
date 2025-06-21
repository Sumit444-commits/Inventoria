import React, { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Items from "../API/Items.json"
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {

  const {cart,cartCount,handleDeleteCart,currUser} = useAppContext()

      const matchedItems = Items.filter((item)=> cart.some((c)=> c.id === item.id))
    
      const totalPrice = matchedItems.reduce(
        (a,b) => {
          const matchingcount = cart.find((item)=> item.id == b.id)
          return a + (b.price * matchingcount.count) 
        } , 0
      )
      
      const handleDelete = (id)=> {
        handleDeleteCart(id)
      }

    if(currUser?.status === false){
      return <div className="flex justify-center flex-col gap-14 items-center text-4xl">
        <p>You need to login first to access the carts!</p>
        <p className="text-2xl">For login <Link to={"/login"} className="text-gray-500 font-bold hover:underline hover:text-white transition tracking-normal">Click Here</Link></p>
      </div>
    }
      
  return (
   <div className="text-white p-6 max-w-7xl mx-auto">
  <h1 className="text-2xl font-bold mb-6">Added Carts: <b className="text-green-500">{cartCount}</b></h1>

  <div className="overflow-x-auto">
    <table className="min-w-full bg-gray-800 rounded-lg shadow-md overflow-hidden ">
      <thead>
        <tr className="bg-gray-700 text-left text-sm uppercase text-gray-300 ">
          <th className="px-4 py-3">Product Name</th>
          <th className="px-4 py-3">Category</th>
          <th className="px-4 py-3">Price</th>
          <th className="px-4 py-3">Count Added</th>
          {/* <th className="px-4 py-3">View</th> */}
          <th className="px-4 py-3"></th>
        </tr>
      </thead>
      <tbody className="text-sm text-gray-100 divide-y divide-gray-700">
        {matchedItems.map((item, index) => (
          <tr key={index} className="hover:bg-gray-700 transition duration-150">
            <td className="px-4 py-3">{item.name}</td>
            <td className="px-4 py-3">{item.category}</td>
            <td className="px-4 py-3">${item.price}</td>
            <td className="px-4 py-3">{cart[index].count}</td>
            <td className="px-4 py-3">
            <div className="flex gap-5 text-2xl">

              <NavLink
                to={`/product/${item.id}`}
                className="text-blue-400 hover:text-blue-200 transition"
                aria-label={`View ${item.name}`}
                >
                <FaEye />
              </NavLink>
              <button
                onClick = {()=> handleDelete(item.id)}
                className="text-blue-400 hover:text-blue-200 transition"
                aria-label={`View ${item.name}`}
                >
                <MdDelete />
              </button>
             </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <p className="mt-6 text-xl font-semibold">Total Price: <b className="text-green-500">${totalPrice.toFixed(2)}</b></p>
</div>

  );
};

export default Cart;
