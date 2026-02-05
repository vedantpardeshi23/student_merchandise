import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import Footer from "@/components/Footer";
import { useState } from "react";

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
    image:
      "https://images.unsplash.com/photo-1556821840-108801ae4e8f?w=800&h=800&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c106e89b?w=800&h=800&fit=crop",
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
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=800&fit=crop",
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
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link to="/" className="text-2xl font-bold text-primary">
              College Merch
            </Link>
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">
              Product Not Found
            </h1>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            College Merch
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:opacity-75 transition-opacity mb-8"
        >
          <ArrowLeft size={20} />
          Back to Products
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="flex flex-col">
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 md:h-[500px] flex items-center justify-center">
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
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center">
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
                <span className="text-lg font-semibold text-gray-700">
                  {product.rating} · (128 reviews)
                </span>
              </div>
              <p className="text-gray-600 text-lg">
                {product.fullDescription}
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="text-4xl font-bold text-primary">₹{product.price}</p>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-primary mb-3">
                Color: {selectedColor.name}
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor.name === color.name
                        ? "border-primary shadow-lg scale-110"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-primary mb-3">
                Size: {selectedSize}
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2 rounded-lg font-medium transition-all ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground"
                        : "bg-gray-200 text-primary hover:bg-gray-300"
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
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg w-fit px-4 py-2">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="text-primary font-bold"
                >
                  −
                </button>
                <span className="w-8 text-center font-semibold text-primary">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-primary font-bold"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="flex-1 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>

            {/* Additional Info */}
            <div className="space-y-3 border-t pt-6">
              <p className="text-sm text-gray-600">
                ✓ Free shipping on orders above ₹999
              </p>
              <p className="text-sm text-gray-600">
                ✓ 30-day money back guarantee
              </p>
              <p className="text-sm text-gray-600">
                ✓ Same day dispatch for orders before 2 PM
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
