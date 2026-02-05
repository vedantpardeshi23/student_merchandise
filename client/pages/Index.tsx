import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, Heart, Truck, Shield, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import "@/styles/homepage.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "College Hoodie",
    description: "Cozy and stylish hoodie perfect for campus",
    price: 1499,
    image: "https://images.unsplash.com/photo-1556821840-108801ae4e8f?w=600&h=600&fit=crop&q=80",
    rating: 4.8,
  },
  {
    id: 2,
    name: "College T-Shirt",
    description: "Classic cotton tee with college branding",
    price: 699,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=80",
    rating: 4.6,
  },
  {
    id: 3,
    name: "College Cap",
    description: "Structured cap with embroidered logo",
    price: 399,
    image: "https://images.unsplash.com/photo-1564564244526-a46f66d6c5a3?w=600&h=600&fit=crop&q=80",
    rating: 4.5,
  },
  {
    id: 4,
    name: "College Tote Bag",
    description: "Spacious canvas bag for books and essentials",
    price: 499,
    image: "https://images.unsplash.com/photo-1595777707802-5b140b63a205?w=600&h=600&fit=crop&q=80",
    rating: 4.7,
  },
];

const offers = [
  {
    id: 1,
    title: "Hoodie + T-Shirt Combo",
    discount: "Save ₹400",
    originalPrice: "₹2,198",
    comboPrice: "₹1,798",
  },
  {
    id: 2,
    title: "Student Discount",
    discount: "15% off",
    description: "Valid with student ID",
  },
  {
    id: 3,
    title: "Limited Time Offer",
    discount: "Free shipping",
    description: "On orders above ₹999",
  },
];

export default function Index() {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
            College Merch
          </Link>
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ShoppingCart className="w-6 h-6 text-primary" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-32 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="animate-slide-down">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Official College Merchandise
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
                Wear your campus pride with style. Shop authentic college apparel and accessories designed for students, by students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#products"
                  className="btn-accent inline-flex justify-center md:justify-start"
                >
                  <ShoppingCart size={20} />
                  Shop Now
                </a>
                <a
                  href="#offers"
                  className="btn-secondary inline-flex justify-center md:justify-start"
                >
                  View Collection
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1529148482759-b8ffc8d8e59d?w=600&h=600&fit=crop&q=80"
                alt="Students wearing college merchandise"
                className="w-full h-full object-cover animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="feature-icon">
                <Truck size={28} />
              </div>
              <div>
                <p className="font-semibold text-primary">Free Shipping</p>
                <p className="text-sm text-gray-600">On orders above ₹999</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="feature-icon">
                <Shield size={28} />
              </div>
              <div>
                <p className="font-semibold text-primary">100% Authentic</p>
                <p className="text-sm text-gray-600">Official college merch</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <div className="feature-icon">
                <Zap size={28} />
              </div>
              <div>
                <p className="font-semibold text-primary">Fast Dispatch</p>
                <p className="text-sm text-gray-600">Order before 2 PM for today</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked collection of premium college merchandise designed for the modern student
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                {/* Product Image */}
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`wish-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
                  >
                    <Heart size={20} />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="rating-badge mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < Math.floor(product.rating)
                              ? "fill-accent text-accent"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {product.rating}
                    </span>
                  </div>

                  {/* Price */}
                  <p className="text-3xl font-bold text-primary mb-4">
                    ₹{product.price}
                  </p>

                  {/* Buttons */}
                  <div className="space-y-3">
                    <Link
                      to={`/product/${product.id}`}
                      className="btn-secondary block text-center w-full"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className="btn-accent w-full justify-center"
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-20 md:py-28 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Special Offers
            </h2>
            <p className="text-lg text-gray-600">
              Limited-time deals and exclusive discounts for students
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div key={offer.id} className="offer-card p-8">
                <div className="offer-badge">
                  {offer.discount}
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3">
                  {offer.title}
                </h3>

                {offer.description && (
                  <p className="text-gray-600 mb-6">{offer.description}</p>
                )}

                {offer.originalPrice && (
                  <div className="space-y-2 mb-6">
                    <p className="text-gray-500 line-through text-sm">
                      {offer.originalPrice}
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      {offer.comboPrice}
                    </p>
                  </div>
                )}

                <button className="btn-accent w-full justify-center">
                  Shop Offer
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Questions about bulk orders or custom merchandise? We're here to help!
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleFormSubmit}
            className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl shadow-lg p-8 border border-blue-100"
          >
            {/* Name */}
            <div className="mb-6 input-field">
              <label className="block text-sm font-semibold text-primary mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="mb-6 input-field">
              <label className="block text-sm font-semibold text-primary mb-3">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div className="mb-6 input-field">
              <label className="block text-sm font-semibold text-primary mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Message */}
            <div className="mb-8 input-field">
              <label className="block text-sm font-semibold text-primary mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                rows={5}
                placeholder="Tell us about your inquiry or bulk order needs..."
              ></textarea>
              <p className="text-xs text-gray-500 mt-2">
                💡 Tip: Mention bulk orders or custom merchandise requests for faster response
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">
              Or email us directly:
            </p>
            <a
              href="mailto:merch@college.edu"
              className="text-2xl font-bold text-accent hover:opacity-80 transition-opacity"
            >
              merch@college.edu
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
