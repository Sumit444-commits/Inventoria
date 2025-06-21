import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Items from "../../API/Items.json"
import { useAppContext } from '../../context/AppContext';
import { FaArrowLeft } from 'react-icons/fa';

const ItemDetails = () => {
  const params = useParams()    
  const product = Items.filter((item)=> item.id === params.id)
    const {handleCart} = useAppContext()
    const handleClick = ()=> {
            handleCart(params.id)
        }

  if (!product) 
      return (
        <div className="text-white p-10 text-center text-2xl">
          Product not found.
          <NavLink to="/products" className="block mt-4 text-blue-400 underline">
            Go back to products
          </NavLink>
        </div>
      );
    


  return (
    <div  className=' flex flex-col items-end gap-5 p-4'>
    
     <div className='  text-white border-1 border-gray-500  rounded-lg shadow-2xl bg-gradient-to-br from-blue-900 to-gray-800 flex flex-col md:flex-row px-5 w-full items-center gap-16 p-4'>
        <div>
            <img src={product[0].image} className='w-[600px] rounded-lg' alt="" />
        </div>
        <div className='text-xl flex flex-col gap-2 h-full'>
              
             <h2 className='text-gray-100 text-4xl font-semibold pb-10'>{product[0].name}</h2>
              
             <p><b>Sku: </b>{product[0].sku}</p>
             <p><b>Category: </b>{product[0].category}</p>
             <p><b>Price: </b>${product[0].price}</p>
             <p><b>Available: </b>{product[0].quantity}</p>
             <p><b>Status: </b>{product[0].status}</p>

        {/* <button className='w-full border px-2 py-1 bg-blue-700 hover:bg-blue-900 rounded-lg'>Buy Now</button> */}
        <button onClick={handleClick}
         className='w-full border px-2 py-1 bg-green-700 hover:bg-green-900 rounded-lg mt-4'>Add to cart</button>
        </div>
    </div>
       <NavLink
        to="/products"
        className="flex items-center gap-2 text-white border border-gray-400 rounded-full px-4 py-2 hover:border-dashed hover:text-gray-400 transition"
      >
        <FaArrowLeft />
        Go Back
      </NavLink>
    </div>
  )
}

export default ItemDetails



// import React from 'react';
// import { NavLink, useParams } from 'react-router-dom';
// import Items from '../../API/Items.json';
// import { useAppContext } from '../../context/AppContext';
// import { FaArrowLeft } from 'react-icons/fa';

// const ItemDetails = () => {
//   const params = useParams();
//   const product = Items.find((item) => item.id === params.id);
//   const { handleCart } = useAppContext();

//   const handleClick = () => {
//     handleCart(params.id);
//   };

//   if (!product) {
//     return (
//       <div className="text-white p-10 text-center text-2xl">
//         Product not found.
//         <NavLink to="/products" className="block mt-4 text-blue-400 underline">
//           Go back to products
//         </NavLink>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col gap-6 p-4 md:p-10 text-white">
//       <div className="border border-gray-700 rounded-lg shadow-2xl bg-gradient-to-br from-blue-900 to-gray-800 flex flex-col md:flex-row items-center gap-6 p-6">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full max-w-md rounded-lg object-cover"
//         />

//         <div className="flex flex-col gap-3 w-full">
//           <h2 className="text-3xl md:text-4xl font-bold">{product.name}</h2>

//           <p><span className="font-semibold">Sku:</span> {product.sku}</p>
//           <p><span className="font-semibold">Category:</span> {product.category}</p>
//           <p><span className="font-semibold">Price:</span> ${product.price}</p>
//           <p><span className="font-semibold">Available:</span> {product.quantity}</p>
//           <p><span className="font-semibold">Status:</span> {product.status}</p>

//           <button
//             onClick={handleClick}
//             className="w-full md:w-auto mt-4 bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded transition duration-200"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       <NavLink
//         to="/products"
//         className="flex items-center gap-2 text-white border border-gray-400 rounded-full px-4 py-2 hover:border-dashed hover:text-gray-400 transition self-start"
//       >
//         <FaArrowLeft />
//         Go Back
//       </NavLink>
//     </div>
//   );
// };

// export default ItemDetails;
