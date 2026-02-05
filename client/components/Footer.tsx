import { Mail, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-blue-800 text-primary-foreground py-16 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              College Merch
            </h3>
            <p className="text-sm mt-3 opacity-90">Made by students, for students</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <nav className="space-y-2 text-sm text-center">
              <Link to="/" className="hover:text-accent transition-colors">
                Shop
              </Link>
              <a href="#contact" className="hover:text-accent transition-colors block">
                Contact
              </a>
              <a href="#products" className="hover:text-accent transition-colors block">
                Products
              </a>
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-bold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:merch@college.edu"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Contact Email */}
          <div className="text-center text-sm mb-4">
            <p>
              Questions?{" "}
              <a
                href="mailto:merch@college.edu"
                className="text-accent hover:opacity-80 transition-opacity font-semibold"
              >
                merch@college.edu
              </a>
            </p>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs opacity-75">
            © 2024 College Merch. All rights reserved. | Made with ❤️ by students
          </p>
        </div>
      </div>
    </footer>
  );
}
