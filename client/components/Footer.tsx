import { Mail, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold">College Merch</h3>
            <p className="text-sm mt-2 opacity-90">Made by students, for students</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <nav className="space-y-2 text-sm text-center">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                Shop
              </Link>
              <a href="#contact" className="hover:opacity-80 transition-opacity block">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:merch@college.edu"
                className="hover:opacity-80 transition-opacity"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-6">
          {/* Contact Email */}
          <div className="text-center text-sm mb-4">
            <p>Email: <a href="mailto:merch@college.edu" className="hover:opacity-80 transition-opacity">merch@college.edu</a></p>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs opacity-75">
            © 2024 College Merch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
