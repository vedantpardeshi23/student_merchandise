import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import Footer from "@/components/Footer";

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
    image:
      "https://images.unsplash.com/photo-1556821840-108801ae4e8f?w=500&h=500&fit=crop",
    rating: 4.8,
  },
  {
    id: 2,
    name: "College T-Shirt",
    description: "Classic cotton tee with college branding",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    rating: 4.6,
  },
  {
    id: 3,
    name: "College Cap",
    description: "Structured cap with embroidered logo",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c106e89b?w=500&h=500&fit=crop",
    rating: 4.5,
  },
  {
    id: 4,
    name: "College Tote Bag",
    description: "Spacious canvas bag for books and essentials",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleAddToCart = (productId: number) => {
    setCartItems([...cartItems, productId]);
    // Visual feedback could be added here
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic (UI only)
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            College Merch
          </Link>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6 text-primary" />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24 px-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full -ml-36 -mb-36"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Official College Merchandise
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
                Wear your campus pride with style. Shop authentic college
                apparel and accessories designed for students, by students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#products"
                  className="inline-block px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
                >
                  Shop Now
                </a>
                <a
                  href="#offers"
                  className="inline-block px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all text-center"
                >
                  View Collection
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529148482759-b8ffc8d8e59d?w=600&h=600&fit=crop"
                alt="Students wearing college merchandise"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Featured Products
            </h2>
            <p className="text-gray-600">
              Explore our collection of premium college merchandise
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 md:p-5">
                  <h3 className="font-semibold text-lg text-primary mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    <div className="flex items-center">
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
                    <span className="text-sm text-gray-600">
                      {product.rating}
                    </span>
                  </div>

                  {/* Price */}
                  <p className="text-2xl font-bold text-primary mb-4">
                    ₹{product.price}
                  </p>

                  {/* Buttons */}
                  <div className="space-y-2">
                    <Link
                      to={`/product/${product.id}`}
                      className="block w-full px-4 py-2 bg-slate-100 text-primary font-medium rounded-lg hover:bg-slate-200 transition-colors text-center"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className="w-full px-4 py-2 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
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
      <section id="offers" className="py-16 md:py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Special Offers
            </h2>
            <p className="text-gray-600">
              Limited-time deals and exclusive discounts
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-xl shadow-md p-6 md:p-8 border-2 border-accent/20 hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-3xl font-bold text-accent">
                      {offer.discount}
                    </p>
                  </div>
                </div>

                {offer.description && (
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                )}

                {offer.originalPrice && (
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-500 line-through">
                      {offer.originalPrice}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {offer.comboPrice}
                    </p>
                  </div>
                )}

                <button className="w-full mt-6 px-4 py-2 bg-accent text-accent-foreground font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Shop Offer
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Get In Touch
            </h2>
            <p className="text-gray-600">
              Questions about bulk orders or custom merchandise? Contact us!
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleFormSubmit}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8"
          >
            {/* Name */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-primary mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-primary mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                placeholder="Tell us about your inquiry or bulk order needs..."
              ></textarea>
              <p className="text-xs text-gray-500 mt-2">
                Please mention bulk orders or custom merchandise requests
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Or email us directly at{" "}
              <a
                href="mailto:merch@college.edu"
                className="text-accent font-semibold hover:underline"
              >
                merch@college.edu
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
