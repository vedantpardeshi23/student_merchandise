import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, Heart, Truck, Shield, Check } from "lucide-react";
import Footer from "@/components/Footer";
import { useState } from "react";
import "@/styles/homepage.css";

interface Product {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
  rating: number;
  colors: { name: string; hex: string }[];
  sizes: string[];
}

const products: { [key: number]: Product } = {
  1: {
    id: 1,
    name: "College Hoodie",
    description: "Cozy and stylish hoodie",
    fullDescription: "Our premium college hoodie is made from 100% cotton with a soft fleece lining. Perfect for staying warm on campus. Features embroidered college logo and comfortable fit.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1556821840-108801ae4e8f?w=800&h=800&fit=crop&q=80",
    rating: 4.8,
    colors: [
      { name: "Navy Blue", hex: "#1a3a5c" },
      { name: "White", hex: "#ffffff" },
      { name: "Gray", hex: "#808080" },
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  2: {
    id: 2,
    name: "College T-Shirt",
    description: "Classic cotton tee",
    fullDescription: "A timeless classic, our college t-shirt is made from premium quality cotton. Comfortable, durable, and perfect for everyday wear. Features classic college branding on the front.",
    price: 699,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&q=80",
    rating: 4.6,
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Navy Blue", hex: "#1a3a5c" },
      { name: "Black", hex: "#000000" },
      { name: "Cream", hex: "#fffdd0" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  3: {
    id: 3,
    name: "College Cap",
    description: "Structured embroidered cap",
    fullDescription: "Stay stylish and protected from the sun with our embroidered college cap. Adjustable strap for perfect fit. Premium fabric with excellent durability.",
    price: 399,
    image: "https://images.unsplash.com/photo-1564564244526-a46f66d6c5a3?w=800&h=800&fit=crop&q=80",
    rating: 4.5,
    colors: [
      { name: "Navy Blue", hex: "#1a3a5c" },
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["One Size"],
  },
  4: {
    id: 4,
    name: "College Tote Bag",
    description: "Spacious canvas bag",
    fullDescription: "Our spacious college tote bag is perfect for carrying books, laptops, and daily essentials. Made from durable canvas with comfortable handles and college branding.",
    price: 499,
    image: "https://images.unsplash.com/photo-1595777707802-5b140b63a205?w=800&h=800&fit=crop&q=80",
    rating: 4.7,
    colors: [
      { name: "Navy Blue", hex: "#1a3a5c" },
      { name: "Natural", hex: "#e8dcc4" },
      { name: "Black", hex: "#000000" },
    ],
    sizes: ["One Size"],
  },
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products[parseInt(id || "1")];
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link to="/" className="text-2xl font-bold text-primary">
              College Merch
            </Link>
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Product not found</p>
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-block"
            >
              Back to Shop
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            College Merch
          </Link>
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ShoppingCart className="w-6 h-6 text-primary" />
          </button>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>
      </div>

      {/* Product Details */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex flex-col">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center sticky top-24">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-start">
            {/* Title and Rating */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">
                {product.rating} · (128 reviews)
              </span>
            </div>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Price Section */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <p className="text-5xl font-bold text-gray-900">₹{product.price}</p>
              <p className="text-sm text-gray-600 mt-2">Inclusive of all taxes</p>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Color: <span className="text-gray-700">{selectedColor?.name}</span>
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-14 h-14 rounded-lg border-3 transition-all ${
                      selectedColor?.name === color.name
                        ? "border-primary shadow-lg scale-110"
                        : "border-gray-300 hover:border-primary"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Size: <span className="text-gray-700">{selectedSize}</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all border-2 ${
                      selectedSize === size
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-gray-900 border-gray-300 hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 text-lg font-semibold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-lg font-bold text-gray-700 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 text-lg">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={() => setWishlist(!wishlist)}
                className={`px-8 py-4 rounded-lg font-bold transition-all border-2 ${
                  wishlist
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-gray-900 border-gray-300 hover:border-red-500"
                }`}
              >
                <Heart size={20} fill={wishlist ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Benefits */}
            <div className="space-y-4 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <Check size={24} className="text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Free shipping</p>
                  <p className="text-sm text-gray-600">On orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={24} className="text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">30-day guarantee</p>
                  <p className="text-sm text-gray-600">Money-back guarantee</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check size={24} className="text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Fast dispatch</p>
                  <p className="text-sm text-gray-600">Same day shipping for orders before 2 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
