import React, { useState } from "react";
import { ShoppingCart, Plus, Maximize2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  fullDescription: string;
  features: string[];
}

interface Cart {
  [productId: string]: number;
}

const GPSProductsWithDetails: React.FC = () => {
  const [cart, setCart] = useState<Cart>({});
  const [currentView, setCurrentView] = useState<"products" | "details">(
    "products"
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const gpsProducts: Product[] = [
    {
      id: "gps-1",
      name: "Fleet Tracking System",
      description: "Real-time vehicle tracking and management",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      fullDescription:
        "Advanced fleet tracking system with real-time GPS monitoring, route optimization, and comprehensive reporting dashboard. Perfect for businesses managing multiple vehicles.",
      features: [
        "Real-time GPS tracking",
        "Route optimization",
        "Driver behavior monitoring",
        "Fuel consumption tracking",
        "24/7 customer support",
      ],
    },
    {
      id: "gps-2",
      name: "Navigation Pro",
      description: "Professional navigation and mapping solutions",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop",
      fullDescription:
        "Professional-grade navigation system with offline maps, voice guidance, and advanced routing algorithms. Designed for commercial and personal use.",
      features: [
        "Offline maps",
        "Voice navigation",
        "Traffic updates",
        "Points of interest",
        "Custom route planning",
      ],
    },
    {
      id: "gps-3",
      name: "Asset Tracker",
      description: "Track valuable assets and equipment",
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=300&h=200&fit=crop",
      fullDescription:
        "Compact GPS tracker for valuable assets, equipment, and personal items. Long battery life and weatherproof design.",
      features: [
        "Compact design",
        "Long battery life",
        "Weatherproof",
        "Geofence alerts",
        "Mobile app",
      ],
    },
    {
      id: "gps-4",
      name: "Marine GPS",
      description: "Marine navigation and fish finder",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
      fullDescription:
        "Advanced marine GPS system with integrated fish finder, weather monitoring, and nautical charts. Built for maritime professionals.",
      features: [
        "Fish finder integration",
        "Weather monitoring",
        "Nautical charts",
        "Waterproof design",
        "AIS integration",
      ],
    },
  ];

  const addToCart = (productId: string): void => {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const viewDetails = (product: Product): void => {
    setSelectedProduct(product);
    setCurrentView("details");
  };

  const goBack = (): void => {
    setCurrentView("products");
    setSelectedProduct(null);
  };

  if (currentView === "details" && selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={goBack}
            className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            ← Back to Products
          </button>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProduct.name}
                </h1>

                <p className="text-gray-600 mb-6">
                  {selectedProduct.fullDescription}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Features:
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => addToCart(selectedProduct.id)}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      addToCart(selectedProduct.id);
                      alert(
                        "Product added to cart! Redirecting to checkout..."
                      );
                    }}
                    className="flex-1 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors font-medium"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl text-gray-900 mb-4 font-bold">
            GPS Trading Solutions
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced GPS tracking and navigation systems for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gpsProducts.map((product: Product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-48 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => viewDetails(product)}
                  className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                  title="View Details"
                >
                  <Maximize2 size={16} className="text-gray-600" />
                </button>
              </div>

              {/* Product Info Section */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {product.name}
                  </h4>
                  <button
                    onClick={() => viewDetails(product)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Details
                  </button>
                </div>

                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {Object.keys(cart).length > 0 && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-lg">
              <ShoppingCart size={20} className="mr-2 text-blue-600" />
              <span className="text-blue-800 font-medium">
                Cart:{" "}
                {Object.values(cart).reduce(
                  (sum: number, qty: number) => sum + qty,
                  0
                )}{" "}
                items
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GPSProductsWithDetails;
