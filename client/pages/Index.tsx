import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, Heart, Truck, Shield, Zap } from "lucide-react";
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
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-slide-down { animation: slideDown 0.6s ease-out; }
        .animate-slide-up { animation: slideUp 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        
        .product-card {
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          background: white;
        }
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(26, 58, 92, 0.15);
        }

        .product-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 16px 16px 0 0;
          aspect-ratio: 1;
          background: linear-gradient(135deg, #f5f7fa 0%, #e8f0f8 100%);
        }

        .product-image-wrapper img {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-card:hover .product-image-wrapper img {
          transform: scale(1.1);
        }

        .wish-btn {
          position: absolute;
          top: 12px;
          left: 12px;
          background: white;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .wish-btn:hover {
          background: #1a3a5c;
          transform: scale(1.15);
        }

        .wish-btn.active {
          background: linear-gradient(135deg, #ff9d4d 0%, #ff8c2f 100%);
          color: white;
        }

        .wish-btn.active svg {
          fill: currentColor;
        }

        .offer-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #fff9f5 0%, #fff0e6 100%);
          border: 2px solid rgba(255, 157, 77, 0.15);
          border-radius: 16px;
          transition: all 0.3s ease;
          padding: 2rem;
        }

        .offer-card:hover {
          border-color: rgba(255, 157, 77, 0.4);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(255, 157, 77, 0.12);
        }

        .offer-badge {
          display: inline-block;
          background: linear-gradient(135deg, #ff9d4d 0%, #ff8c2f 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 12px;
          box-shadow: 0 4px 15px rgba(255, 157, 77, 0.3);
        }

        .input-field input,
        .input-field textarea {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid #e8f0f8;
          border-radius: 10px;
          font-family: inherit;
          font-size: 14px;
          transition: all 0.3s ease;
          background: #f8fafb;
        }

        .input-field input:focus,
        .input-field textarea:focus {
          outline: none;
          border-color: #ff9d4d;
          background: white;
          box-shadow: 0 0 0 4px rgba(255, 157, 77, 0.1);
        }

        .btn-primary {
          background: linear-gradient(135deg, #1a3a5c 0%, #2d5a8c 100%);
          color: white;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(26, 58, 92, 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(26, 58, 92, 0.3);
        }

        .btn-accent {
          background: linear-gradient(135deg, #ff9d4d 0%, #ff8c2f 100%);
          color: white;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(255, 157, 77, 0.2);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-accent:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 157, 77, 0.3);
        }

        .btn-secondary {
          background: #f5f7fa;
          color: #1a3a5c;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 10px;
          border: 2px solid #e8f0f8;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          display: inline-block;
        }

        .btn-secondary:hover {
          border-color: #1a3a5c;
          background: #1a3a5c;
          color: white;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(26, 58, 92, 0.1) 0%, rgba(255, 157, 77, 0.1) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a3a5c;
        }

        .hero-section {
          background: linear-gradient(135deg, #1a3a5c 0%, #2d5a8c 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 157, 77, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255, 157, 77, 0.04) 0%, transparent 50%);
          pointer-events: none;
        }

        .rating-stars {
          display: flex;
          gap: 3px;
        }
      `}