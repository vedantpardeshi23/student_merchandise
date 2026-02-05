import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, Heart, Search, ChevronDown, Plus } from "lucide-react";
import Footer from "@/components/Footer";
import "@/styles/homepage.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  discount?: number;
  isnew?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "College Hoodie",
    description: "Cozy and stylish hoodie",
    price: 1499,
    image: "https://images.unsplash.com/photo-1556821840-108801ae4e8f?w=600&h=600&fit=crop&q=80",
    rating: 4.8,
    isnew: true,
  },
  {
    id: 2,
    name: "College T-Shirt",
    description: "Classic cotton tee",
    price: 699,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=80",
    rating: 4.6,
  },
  {
    id: 3,
    name: "College Cap",
    description: "Structured embroidered cap",
    price: 399,
    image: "https://images.unsplash.com/photo-1564564244526-a46f66d6c5a3?w=600&h=600&fit=crop&q=80",
    rating: 4.5,
  },
  {
    id: 4,
    name: "College Tote Bag",
    description: "Spacious canvas bag",
    price: 499,
    image: "https://images.unsplash.com/photo-1595777707802-5b140b63a205?w=600&h=600&fit=crop&q=80",
    rating: 4.7,
  },
];

const categories = [
  { name: "All Products", id: "all" },
  { name: "Hoodies & Jackets", id: "hoodies" },
  { name: "T-Shirts", id: "tshirts" },
  { name: "Caps & Hats", id: "caps" },
  { name: "Bags & Accessories", id: "bags" },
];

const faqs = [
  {
    question: "How do I place an order?",
    answer: "Simply browse our collection, select your size and color, add items to cart, and proceed to checkout. We offer secure payment options and free shipping on orders above ₹999.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee on all products. If you're not satisfied with your purchase, simply reach out to us at merch@college.edu with your order details.",
  },
  {
    question: "Do you offer student discounts?",
    answer: "Yes! We offer 15% off for verified students. Just show your valid student ID during checkout to claim your discount.",
  },
  {
    question: "How long does delivery take?",
    answer: "We dispatch orders placed before 2 PM on the same day. Standard delivery takes 3-5 business days within the city and 5-7 days for other areas.",
  },
  {
    question: "Can I customize my merchandise?",
    answer: "Absolutely! For bulk or custom orders, please contact us at merch@college.edu or fill out our contact form. We'll be happy to help with personalized designs.",
  },
];

export default function Index() {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddToCart = (productId: number) => {
    setCartItems([...cartItems, productId]);
  };

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const newProducts = products.filter(p => p.isnew);
  const allProducts = selectedCategory === "all" ? products : products;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4 mb-4">
            <Link to="/" className="text-2xl font-bold text-primary">
              College Merch
            </Link>
            
            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
                <Search size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6 text-primary" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>

          {/* Category Navigation */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Official College Merchandise
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Wear your campus pride with authentic college apparel designed for students, by students
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all inline-flex items-center gap-2">
            <ShoppingCart size={20} />
            Shop Now
          </button>
        </div>
      </section>

      {/* Just In Section */}
      {newProducts.length > 0 && (
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Just In
                </h2>
                <p className="text-gray-600">Discover new products hot off the press 🔥</p>
              </div>
              <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                View more <ChevronDown size={18} className="rotate-[-90deg]" />
              </Link>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {newProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={() => toggleWishlist(product.id)}
                  onAddToCart={() => handleAddToCart(product.id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Featured Collection
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={() => toggleWishlist(product.id)}
                onAddToCart={() => handleAddToCart(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Offers Banner */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 md:p-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Special Offers
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📦</span>
                  <span><strong>Combo Deal:</strong> Hoodie + T-Shirt for ₹1,798 (Save ₹400)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <span><strong>Student Discount:</strong> 15% off with valid student ID</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🚚</span>
                  <span><strong>Free Shipping:</strong> On orders above ₹999</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary to-blue-700 text-white rounded-lg p-8 text-center">
              <p className="text-lg font-semibold mb-4">Limited Time Offer</p>
              <p className="text-4xl font-bold mb-4">15% Off</p>
              <p className="text-sm opacity-90">Use code COLLEGE15 at checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a question?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Bulk orders? Custom merchandise? Get in touch with us!
          </p>
          <a
            href="#contact"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  onAddToCart: () => void;
}

function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative bg-gray-100 aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.isnew && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            New
          </div>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            onToggleWishlist();
          }}
          className={`absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            isWishlisted
              ? "bg-red-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-1">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.rating})</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between gap-2">
          <p className="text-xl font-bold text-gray-900">₹{product.price}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-all"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </Link>
  );
}
