"use client";
import React, { useState } from "react";
import Navbar from "./navbar/page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Footer from "./footer/page";

function Home() {
  const slides = [
    {
      id: 1,
      title: "The Fresh Quality Food Guaranteed!",
      price: "₹149.99",
      buttonText: "Shop Now",
      image: "/banner1.jpg",
    },
    {
      id: 2,
      title: "Best Organic & Healthy Food!",
      price: "₹199.99",
      buttonText: "Explore",
      image: "/banner2.jpg",
    },
  ];
  const products = [
    {
      id: 1,
      title: "Spicy Masala Mixture",
      price: "from ₹199",
      image: "/mixture.jpg",
      bgColor: "bg-yellow-100",
    },
    {
      id: 2,
      title: "Crispy Bhujia Sev",
      price: "from ₹249",
      image: "/bhujiya.jpeg",
      bgColor: "bg-gray-100",
    },
    {
      id: 3,
      title: "Chatpata Moong Dal",
      price: "from ₹149",
      image: "/daal.jpg",
      bgColor: "bg-green-100",
    },
    {
      id: 4,
      title: "Crunchy Mix Farsan",
      price: "from ₹179",
      image: "/makka.jpg",
      bgColor: "bg-blue-100",
    },
  ];
  const sev = [
    { id: 1, name: "Feeki Sev", price: 65, image: "/fikisev.jpg" },
    { id: 2, name: "Barik Sev", price: 65, image: "/bariksev.jpeg" },
    { id: 3, name: "Lahsun Sev", price: 70, image: "/lahsun.jpeg" },
    {
      id: 4,
      name: "Double Long Sev",
      price: 65,
      image: "/doublelong.jpeg",
    },
    { id: 5, name: "Masala Sev", price: 75, image: "/sev.jpeg" },
    { id: 6, name: "Ratlam Sev", price: 80, image: "/ratlamisev.jpeg" },
    { id: 7, name: "Bhujiya Sev", price: 70, image: "/bhujiya sev.jpg" },
    { id: 8, name: "Spicy Mix Sev", price: 85, image: "/mix sev.jpg" },
  ];

  const [quantities, setQuantities] = useState(
    sev.reduce((acc, sev) => ({ ...acc, [sev.id]: 1 }), {})
  );

  const categories = ["All", "Spicy", "Sweet", "Mixed","Plain"];

  const namkeenProducts = [
    {
      id: 1,
      name: "Spicy Nukti",
      price: "₹70.00-₹80.00",
      category: "Spicy",
      image: "/charkhinukti.jpeg",
      badge: "Top",
    },
    {
      id: 2,
      name: "Khatta-mitha mix",
      price: "₹72.00",
      category: "Sweet",
      image: "/khattamitha.jpeg",
      badge: "Top",
    },
    {
      id: 3,
      name: "Tam Tam mix",
      price: "₹72.00",
      category: "Mixed",
      image: "/tamtammix.jpeg",
      badge: "Top",
    },
    {
      id: 4,
      name: "Nukti-sev",
      price: "₹72.00",
      category: "Mixed",
      image: "/nuktisev.jpeg",
      badge: "Top",
    },
    {
      id: 5,
      name: "Lal chana",
      price: "₹60.00",
      category: "Spicy",
      image: "/lalchana.jpeg",
      badge: "Top",
    },
    {
      id: 6,
      name: "Sabudana mix",
      price: "₹190.00 ₹240.00",
      category: "Mixed",
      image: "/sabudana.jpg",
      badge: "Top",
    },
    {
      id: 7,
      name: "jodhpuri mix",
      price: "₹190.00 ₹240.00",
      category: "Spicy",
      image: "/jodhpurimix.jpeg",
      badge: "Top",
    },
    {
      id: 8,
      name: "Tasty Peanuts",
      price: "₹190.00 ₹240.00",
      category: "Spicy",
      image: "/tasty.jpeg",
      badge: "Top",
    },
    {
      id: 9,
      name: "Salted Nukti",
      price: "₹190.00 ₹240.00",
      category: "Plain",
      image: "/fikinukti.jpeg",
      badge: "Top",
    },
    {
      id: 10,
      name: "Masala Chana",
      price: "₹190.00 ₹240.00",
      category: "Spicy",
      image: "/kalachana.jpeg",
      badge: "Top",
    },
    {
      id: 11,
      name: "Fries",
      price: "₹190.00 ₹240.00",
      category: "Spicy",
      image: "/fries.jpg",
      badge: "Top",
    },
    {
      id: 12,
      name: "Makka mix",
      price: "₹190.00 ₹240.00",
      category: "Mixed",
      image: "/makka.jpg",
      badge: "Top",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? namkeenProducts
      : namkeenProducts.filter(
          (product) => product.category === activeCategory
        );

  const handleQuantityChange = (id, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + amount),
    }));
  };
  return (
    <div  className="bg-[url('/background.png')]  bg-center bg-repeat">
      <Navbar />
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen flex items-center justify-start">
              {/* Background Image */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={slide.image}
                  alt="slide"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Content on the left */}
              <div className="relative z-10 max-w-2xl px-8 md:px-16 lg:px-24 text-left">
                <h2 className="text-3xl md:text-6xl font-bold text-white">
                  {slide.title}
                </h2>
                <p className="text-2xl md:text-3xl text-white font-semibold mt-2">
                  {slide.price}
                </p>
                <button className="mt-6 bg-black text-white px-8 py-3 rounded-lg text-lg">
                  {slide.buttonText} →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styling */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          width: 12px;
          height: 12px;
          margin: 0 5px;
          opacity: 0.8;
        }
        .swiper-pagination-bullet-active {
          background: white;
        }
      `}</style>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Delicious Namkeen Deals
        </h2>

        {/* Grid Layout to Match Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First two blocks side by side */}
          {products.slice(0, 2).map((product) => (
            <div
              key={product.id}
              className={`p-4 rounded-lg shadow-md ${product.bgColor} flex flex-col justify-between h-[380px]`}
            >
              <div>
                <p className="text-gray-600 font-medium">Clearance</p>
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.title}
                </h3>
                <p className="text-gray-700 text-sm">{product.price}</p>
              </div>
              <div className="flex justify-center items-center h-[200px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
              <button className="mt-3 px-3 py-2 border border-gray-900 text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition">
                Shop Now →
              </button>
            </div>
          ))}

          {/* Last two blocks in one column (properly aligned) */}
          <div className="grid grid-rows-2 gap-6">
            {products.slice(2, 4).map((product) => (
              <div
                key={product.id}
                className={`p-4 rounded-lg shadow-md ${product.bgColor} flex flex-col justify-between h-[220px]`}
              >
                <div>
                  <p className="text-gray-600 font-medium">Clearance</p>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{product.price}</p>
                </div>
                <div className="flex justify-center items-center h-[120px] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={170}
                    height={120}
                    className="rounded-md object-cover"
                  />
                </div>
                <button className="mt-2 px-3 py-2 border border-gray-900 text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition">
                  Shop Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          ~ Sev Varieties ~
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sev.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white rounded-lg shadow-md border border-red-200 flex flex-col items-center text-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-lg"
              />

              <h3 className="text-lg font-semibold text-gray-900 mt-3">
                {product.name}
              </h3>

              <p className="font-medium text-gray-700 mt-2">
                <span className="font-semibold">Weight:</span>
                <select className="ml-2 border p-1 rounded">
                  <option>250 gm - ₹{product.price}</option>
                  <option>500 gm - ₹{product.price * 2}</option>
                  <option>1 kg - ₹{product.price * 4}</option>
                </select>
              </p>

              <div className="flex items-center gap-4 mt-3">
                <p className="font-medium">Qty:</p>
                <button
                  onClick={() => handleQuantityChange(product.id, -1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  −
                </button>
                <span className="px-4">{quantities[product.id]}</span>
                <button
                  onClick={() => handleQuantityChange(product.id, 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              <button className="mt-4 px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Top Selling Namkeen
        </h2>

        {/* Category Filters */}
        <div className="flex justify-center space-x-6 mb-6 text-gray-700">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium ${
                activeCategory === category
                  ? "text-red-600 border-b-2 border-red-600"
                  : "hover:text-red-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center relative"
            >
              {/* Top Badge */}
              {product.badge && (
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {product.badge}
                </span>
              )}

              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-lg"
              />

              {/* Product Name */}
              <h3 className="text-lg font-semibold text-gray-900 mt-3">
                {product.name}
              </h3>

              {/* Price */}
              <p className="font-medium text-gray-700 mt-2">{product.price}</p>

              {/* Color Indicators (Dummy) */}
              <div className="flex space-x-2 mt-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>

              {/* Add to Cart Button */}
              <button className="mt-4 px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
