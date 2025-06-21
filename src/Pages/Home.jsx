import { Swiper, SwiperSlide } from "swiper/react";
//  Import modules from their specific paths
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Card from "../components/UI/Card";

import Items from "../API/Items.json";
import { useNavigate } from "react-router-dom";
import useTypewriter from "../hooks/useTypeWriter";
import Contact from "./Contact";
import ContactCard from "../components/Layout/ContactCard";

const Home = () => {
  const navigate = useNavigate();

  const typedText = useTypewriter("Redefining the way you shop smarter.", 75);
  const typedTitle = useTypewriter("Inventoria", 75);

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <main id="home" className="bg-white text-gray-800">
      {/* Hero */}
    <section className="relative bg-gradient-to-br from-blue-700 to-blue-500 text-white py-28">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight animate-fade-in">
      {typedTitle}
    </h1>
    <p className="mt-6 text-lg md:text-xl text-blue-100 animate-fade-in delay-150">
      {typedText}
    </p>
    <div className="mt-10 flex justify-center gap-4 animate-fade-in delay-300">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition"
      >
        Shop Now
      </button>
      
    </div>
  </div>
</section>



      {/* About */}

      <section id="about" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2  gap-12 items-center">
          {/* Text Section */}
          <div className="flex flex-col md:gap-8">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              About <span className="text-gray-900">us</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to our online store — a passion project built to bring
              everyday essentials and tech treasures right to your fingertips.
              From electronics to lifestyle accessories, we carefully curate
              categories to make shopping smarter, easier, and more enjoyable.
              Whether you're upgrading your gadgets or finding that perfect
              gift, we're here to deliver quality and simplicity through every
              click.
            </p>
          </div>

          {/* Image Collage */}
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <img
              src="/images/electronics.jpg"
              alt="Electronics category"
              className="rounded-lg shadow-md col-span-2 row-span-2 object-cover"
            />
            <img
              src="/images/accessiores.jpg"
              alt="Accessories category"
              className="rounded-lg shadow-md object-cover"
            />
            <img
              src="/images/gadgets.jpg"
              alt="Cool gadgets"
              className="rounded-lg shadow-md object-cover"
            />
            <img
              src="/images/delivery.jpg"
              alt="Fast delivery"
              className="rounded-lg shadow-md object-cover"
            />
            <img
              src="/images/customer.jpg"
              alt="Happy customer shopping"
              className="rounded-lg shadow-md col-span-2 object-cover w-[14em]"
            />
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Top Tech Picks
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            className="custom-swiper"
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 1500 }}
            pagination={{ clickable: true }}
          >
            {Items.map((product) => (
              <SwiperSlide key={product.id}>
                <Card
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
          <section className="bg-gray-50 flex flex-col items-center px-4 sm:px-8 lg:px-20 py-12">
           
      <ContactCard phone={"+92 311679910"} email={"sumit8444061@gmail.com"} address={"H#05 Talpur Colony Tandojam Disct: Hyderabad"}/>
          </section>
      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">{useTypewriter("Elevate Your Lifestyle",75)}</h2>
          <p className="mt-4 text-lg">
            Shop the latest tech trends and accessories that inspire.
          </p>
          <button onClick={handleClick} className="mt-6 px-6 py-3 bg-white text-blue-600 rounded hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
