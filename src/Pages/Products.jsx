
import React, { useTransition } from 'react';
import Card from '../components/UI/Card';
import Items from '../API/Items.json';
import SearchBox from '../components/UI/SearchBox';
import { useAppContext } from '../context/AppContext';
import Loader from '../components/UI/Loader';
import useTypewriter from '../hooks/useTypeWriter';

const Products = () => {
  const { search, filter } = useAppContext();
  const [isPending, startTransition] = useTransition();

  const searchProduct = (product) => {
    if (search) {
      return product.name.toLowerCase().includes(search.toLowerCase());
    }
    return product;
  };

  const CategoryFilter = (product) => {
    if (filter === 'All') {
      return product;
    } else {
      return product.category === filter;
    }
  };

  const filteredProducts = Items.filter(
    (product) => searchProduct(product) && CategoryFilter(product)
  );

  if (isPending) return <Loader />;

  return (
    <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 py-10 gap-4">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">{useTypewriter("Products",300)}</h1>
        <SearchBox />
      </div>

      {filteredProducts && filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[40vh]">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-400 text-center">
            No Search Results Found
          </h2>
        </div>
      )}
    </div>
  );
};

export default Products;
