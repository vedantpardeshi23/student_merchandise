import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, Heart, ArrowRight, Truck, Shield, Zap } from "lucide-react";
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
      "https://images.unsplash.com/photo-1556821840-108801ae4e8f?w=600&h=600&fit=crop&q=80",
    rating: 4.8,
  },
  {
    id: 2,
    name: "College T-Shirt",
    description: "Classic cotton tee with college branding",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=80",
    rating: 4.6,
  },
  {
    id: 3,
    name: "College Cap",
    description: "Structured cap with embroidered logo",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1564564244526-a46f66d6c5a3?w=600&h=600&fit=crop&q=80",
    rating: 4.5,
  },
  {
    id: 4,
    name: "College Tote Bag",
    description: "Spacious canvas bag for books and essentials",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1595777707802-5b140b63a205?w=600&h=600&fit=crop&q=80",
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
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(32, 76, 150, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(32, 76, 150, 0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slide-down {
          animation: slideDown 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #1a3a5c 0%, #2d5a8c 50%, #1a3a5c 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 157, 77, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255, 157, 77, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .product-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(26, 58, 92, 0.15);
        }

        .product-image-wrapper {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f0f4f8 0%, #e8eef8 100%);
        }

        .product-image-wrapper img {
          transition: transform 0.4s ease-out;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-card:hover .product-image-wrapper img {
          transform: scale(1.08) rotate(1deg);
        }

        .badge-new {
          position: absolute;
          top: 12px;
          right: 12px;
          background: linear-gradient(135deg, #ff9d4d 0%, #ff8c2f 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          z-index: 10;
          box-shadow: 0 4px 15px rgba(255, 157, 77, 0.3);
        }

        .wish-btn {
          position: absolute;
          top: 12px;
          left: 12px;
          background: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .wish-btn:hover {
          background: #1a3a5c;
          transform: scale(1.1);
        }

        .wish-btn.active {
          background: #ff9d4d;
        }

        .wish-btn.active svg {
          fill: currentColor;
          color: white;
        }

        .offer-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #fff9f5 0%, #fff0e6 100%);
          border: 2px solid rgba(255, 157, 77, 0.2);
          transition: all 0.3s ease;
        }

        .offer-card:hover {
          border-color: rgba(255, 157, 77, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(255, 157, 77, 0.15);
        }

        .offer-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255, 157, 77, 0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .rating-stars {
          display: flex;
          gap: 2px;
        }

        .section-title {
          position: relative;
          display: inline-block;
          padding-bottom: 12px;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #ff9d4d 0%, #ff8c2f 100%);
          border-radius: 2px;
          width: 60px;
        }

        .input-field {
          position: relative;
        }

        .input-field input,
        .input-field textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e8eef8;
          border-radius: 8px;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .input-field input:focus,
        .input-field textarea:focus {
          outline: none;
          border-color: #ff9d4d;
          box-shadow: 0 0 0 4px rgba(255, 157, 77, 0.1);
        }

        .cta-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .cta-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(26, 58, 92, 0.1) 0%, rgba(255, 157, 77, 0.1) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a3a5c;
        }
      `}