import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, Heart, Truck, Shield } from "lucide-react";
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
    description: "Cozy and stylish hoodie perfect for campus",
    fullDescription:
      "Our premium college hoodie is made from 100% cotton with a soft fleece lining. Perfect for staying warm on campus or during outdoor activities. Features embroidered college logo and comfortable fit.",
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
    description: "Classic cotton tee with college branding",
    fullDescription:
      "A timeless classic, our college t-shirt is made from premium quality cotton. Comfortable, durable, and perfect for everyday wear. Features classic college branding on the front.",
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
    description: "Structured cap with embroidered logo",
    fullDescription:
      "Stay stylish and protected from the sun with our embroidered college cap. Adjustable strap for perfect fit. Premium fabric with excellent durability.",
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
    description: "Spacious canvas bag for books and essentials",
    fullDescription:
      "Our spacious college tote bag is perfect for carrying books, laptops, and daily essentials. Made from durable canvas with comfortable handles and college branding.",
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
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
              College Merch
            </Link>
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary mb-4">
              404
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Product not found
            </p>
            <Link
              to="/"
              className="btn-primary inline-block"
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
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
            College Merch
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-blue-700 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          Back to Products
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl overflow-hidden h-96 md:h-[600px] flex items-center justify-center relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button
                onClick={() => setWishlist(!wishlist)}
                className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  wishlist
                    ? 'bg-accent text-white'
                    : 'bg-white text-primary hover:bg-gray-100'
                } shadow-lg`}
              >
                <Heart size={24} fill={wishlist ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-start">
            {/* Title and Rating */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="rating-badge">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-accent text-accent"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-700">
                    {product.rating} · (128 reviews)
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Price */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <p className="text-5xl font-bold text-primary">₹{product.price}</p>
              <p className="text-sm text-gray-600 mt-2">Inclusive of all taxes</p>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="font-bold text-primary mb-4 text-lg">
                Color: <span className="text-gray-700">{selectedColor?.name}</span>
              </h3>
              <div className="flex gap-4">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-3 transition-all ${
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
              <h3 className="font-bold text-primary mb-4 text-lg">
                Size: <span className="text-gray-700">{selectedSize}</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      selectedSize === size
                        ? "bg-gradient-to-r from-primary to-blue-700 text-white shadow-lg"
                        : "bg-gray-100 text-primary hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Quantity */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg w-fit px-2 py-2">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="text-primary font-bold w-10 h-10 hover:bg-gray-200 rounded transition-colors"
                >
                  −
                </button>
                <span className="w-8 text-center font-bold text-primary">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-primary font-bold w-10 h-10 hover:bg-gray-200 rounded transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="btn-accent flex-1 justify-center">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 border-t pt-8">
              <div className="flex items-center gap-3">
                <div className="feature-icon">
                  <Truck size={24} />
                </div>
                <p className="text-gray-700">Free shipping on orders above ₹999</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="feature-icon">
                  <Shield size={24} />
                </div>
                <p className="text-gray-700">30-day money back guarantee</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="feature-icon">
                  <Star size={24} />
                </div>
                <p className="text-gray-700">Same day dispatch for orders before 2 PM</p>
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
