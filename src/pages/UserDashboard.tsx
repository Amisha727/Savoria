import React, { useState } from 'react';
import { User, Clock, Heart, Settings } from 'lucide-react';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState('profile');

  const orderHistory = [
    { id: '1', date: '2024-03-15', items: ['Margherita Pizza', 'Caesar Salad'], total: '₹1,398' },
    { id: '2', date: '2024-03-10', items: ['Pasta Carbonara', 'Tiramisu'], total: '₹1,298' },
  ];

  const favorites = [
    { name: 'Margherita Pizza', price: '₹749' },
    { name: 'Pasta Carbonara', price: '₹849' },
    { name: 'Chocolate Lava Cake', price: '₹549' },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* Sidebar */}
            <div className="p-6 border-r border-gray-200">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                    activeTab === 'profile' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                    activeTab === 'orders' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Clock className="h-5 w-5" />
                  <span>Order History</span>
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                    activeTab === 'favorites' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Heart className="h-5 w-5" />
                  <span>Favorites</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                    activeTab === 'settings' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="col-span-3 p-6">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Profile</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        defaultValue="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        defaultValue="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <input
                        type="tel"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        defaultValue="+91 98765 43210"
                      />
                    </div>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Order History</h2>
                  <div className="space-y-4">
                    {orderHistory.map((order) => (
                      <div key={order.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">Order #{order.id}</p>
                            <p className="text-gray-600">{order.date}</p>
                            <ul className="mt-2">
                              {order.items.map((item, index) => (
                                <li key={index} className="text-gray-600">{item}</li>
                              ))}
                            </ul>
                          </div>
                          <p className="font-semibold">{order.total}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'favorites' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Favorites</h2>
                  <div className="space-y-4">
                    {favorites.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b pb-4">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-600">{item.price}</p>
                        </div>
                        <button className="text-red-600 hover:text-red-700">
                          <Heart className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Settings</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-orange-600 focus:ring-orange-500" />
                        <span className="ml-2">Email notifications</span>
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-orange-600 focus:ring-orange-500" />
                        <span className="ml-2">SMS notifications</span>
                      </label>
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-orange-600 focus:ring-orange-500" />
                        <span className="ml-2">Newsletter subscription</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

