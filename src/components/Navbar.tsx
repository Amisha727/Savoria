import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, UtensilsCrossed, CalendarDays, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <UtensilsCrossed className="h-8 w-8 text-orange-600" />
              <span className="text-xl font-bold text-gray-900">Savoria</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/menu" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600">
              <Menu className="h-5 w-5" />
              <span>Menu</span>
            </Link>
            <Link to="/book-table" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600">
              <CalendarDays className="h-5 w-5" />
              <span>Book Table</span>
            </Link>
            <Link to="/order" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600">
              <ShoppingBag className="h-5 w-5" />
              <span>Order Online</span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600">Contact</Link>
            <Link to="/dashboard" className="flex items-center space-x-1 text-gray-700 hover:text-orange-600">
              <User className="h-5 w-5" />
              <span>Account</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}