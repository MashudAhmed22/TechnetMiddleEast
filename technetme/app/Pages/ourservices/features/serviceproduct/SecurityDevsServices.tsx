




import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface Cart {
  [productId: string]: number;
}

const SecurityDevsServices: React.FC = () => {
  const [cart, setCart] = useState<Cart>({});

  const securityProducts: Product[] = [
    { id: 'sec-1', name: 'CCTV Systems', price: 899, description: 'High-definition surveillance camera systems' },
    { id: 'sec-2', name: 'Access Control', price: 699, description: 'Advanced access control and management' },
    { id: 'sec-3', name: 'Alarm Systems', price: 499, description: 'Intelligent alarm and notification systems' },
    { id: 'sec-4', name: '24/7 Monitoring', price: 299, description: 'Round-the-clock security monitoring' },
    { id: 'sec-5', name: '24/7 Monitoring', price: 299, description: 'Round-the-clock security monitoring' },
    { id: 'sec-6', name: '24/7 Monitoring', price: 299, description: 'Round-the-clock security monitoring' },
    { id: 'sec-7', name: '24/7 Monitoring', price: 299, description: 'Round-the-clock security monitoring' },
    { id: 'sec-8', name: '24/7 Monitoring', price: 299, description: 'Round-the-clock security monitoring' },
    { id: 'sec-9', name: '24/7 Monitoring', price: 299, description: 'Round-the-clock security monitoring' },
    { id: 'sec-10', name: '24/7 Monitoring', price: 299, description: 'Round-the-clock security monitoring' },
    { id: 'sec-11', name: '24/7 Monitoring', price: 299, description: 'Round-the-clock security monitoring' },
    { id: 'sec-12', name: '24/7 Monitoring', price: 299, description: 'Round-the-clock security monitoring' },
  ];

  const updateQuantity = (productId: string, change: number): void => {
    setCart(prev => {
      const currentQty = prev[productId] || 0;
      const newQty = Math.max(0, currentQty + change);
      if (newQty === 0) {
        const { [productId]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [productId]: newQty };
    });
  };

  const addToCart = (productId: string): void => {
    setCart(prev => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const buyNow = (productId: string): void => {
    addToCart(productId);
    alert('Product added to cart! Redirecting to checkout...');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Security Devices & Services
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive security solutions to protect your assets and premises
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityProducts.map((product: Product) => (
            <div key={product.id} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="text-2xl font-bold text-red-600 mb-4">${product.price}</div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(product.id, -1)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50"
                    disabled={!cart[product.id]}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-medium">{cart[product.id] || 0}</span>
                  <button
                    onClick={() => updateQuantity(product.id, 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => addToCart(product.id)}
                  className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => buyNow(product.id)}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {Object.keys(cart).length > 0 && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-red-50 px-4 py-2 rounded-lg">
              <ShoppingCart size={20} className="mr-2 text-red-600" />
              <span className="text-red-800 font-medium">
                Cart: {Object.values(cart).reduce((sum: number, qty: number) => sum + qty, 0)} items
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SecurityDevsServices;