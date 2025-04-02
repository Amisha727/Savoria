import React from 'react';
import { Award, Users, Clock, Coffee } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Savoria</h1>
          <p className="text-xl text-gray-600">A culinary journey through tradition and innovation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="Restaurant interior"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Savoria has been serving authentic cuisine with a modern twist. Our passion for food and
              commitment to quality has made us one of the most beloved restaurants in the city.
            </p>
            <p className="text-gray-600">
              Every dish at Savoria tells a story - a story of tradition, innovation, and the love for good food. Our
              chefs combine age-old recipes with contemporary techniques to create unforgettable dining experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">Committed to quality in every dish we serve</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team</h3>
            <p className="text-gray-600">Professional staff dedicated to your satisfaction</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tradition</h3>
            <p className="text-gray-600">Years of experience in culinary excellence</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <Coffee className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Atmosphere</h3>
            <p className="text-gray-600">Creating memorable dining experiences</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                alt="Head Chef"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">Head Chef</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                alt="Restaurant Manager"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-gray-600">Restaurant Manager</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                alt="Sous Chef"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">David Smith</h3>
              <p className="text-gray-600">Sous Chef</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}