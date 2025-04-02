import React from 'react';

export default function Menu() {
  const menuCategories = [
    {
      name: 'Appetizers',
      items: [
        { name: 'Bruschetta', description: 'Grilled bread with tomatoes, garlic, and basil', price: '₹449' },
        { name: 'Calamari', description: 'Crispy fried squid with marinara sauce', price: '₹649' },
        { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil', price: '₹549' }
      ]
    },
    {
      name: 'Main Courses',
      items: [
        { name: 'Grilled Salmon', description: 'Atlantic salmon with lemon butter sauce', price: '₹1,249' },
        { name: 'Filet Mignon', description: '8oz beef tenderloin with red wine reduction', price: '₹1,749' },
        { name: 'Mushroom Risotto', description: 'Creamy arborio rice with wild mushrooms', price: '₹949' }
      ]
    },
    {
      name: 'Desserts',
      items: [
        { name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert', price: '₹449' },
        { name: 'Crème Brûlée', description: 'Rich custard with caramelized sugar', price: '₹499' },
        { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with molten center', price: '₹549' }
      ]
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
        
        <div className="space-y-12">
          {menuCategories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-orange-600">{category.name}</h2>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start border-b border-gray-200 pb-4">
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="text-lg font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}