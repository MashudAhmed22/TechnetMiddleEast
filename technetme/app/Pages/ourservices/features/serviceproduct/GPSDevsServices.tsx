import React, { useState } from "react";
import { ShoppingCart, Plus } from "lucide-react";
import PrimaryButton from "../../../../Component/button/PrimaryButton";
import OutlineButton from "../../../../Component/button/OutlineButton";
import ProductCard from "../../../../Component/cards/ReusableCard";
// Import the JSON data
import gpsData from "../../../../../data/gpsdevices/GPSDevices.json";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  fullDescription: string;
  features: string[];
  price?: number;
  category?: string;
}

interface Cart {
  [productId: string]: number;
}

const GPSDevsServices: React.FC = () => {
  const [cart, setCart] = useState<Cart>({});
  const [currentView, setCurrentView] = useState<"products" | "details">(
    "products"
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Use the imported JSON data
  const gpsProducts: Product[] = gpsData.gpsProducts;

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

  const formatPrice = (price?: number): string => {
    return price ? `$${price.toFixed(2)}` : "Contact for pricing";
  };

  if (currentView === "details" && selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <OutlineButton
            text="← Back to Products"
            onClick={goBack}
            className="mb-6"
          />

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
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {selectedProduct.name}
                  </h1>
                  {selectedProduct.category && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProduct.category}
                    </span>
                  )}
                </div>

                <div className="text-2xl font-bold text-green-600 mb-4">
                  {formatPrice(selectedProduct.price)}
                </div>

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
                  <PrimaryButton
                    text="Add to Cart"
                    onClick={() => addToCart(selectedProduct.id)}
                    className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
                    icon={<Plus size={16} />}
                  />
                  <PrimaryButton
                    text="Buy Now"
                    onClick={() => {
                      addToCart(selectedProduct.id);
                      alert(
                        "Product added to cart! Redirecting to checkout..."
                      );
                    }}
                    className="flex-1 bg-green-600 text-white hover:bg-green-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl text-gray-900 mb-4 font-bold">
           GPS Devices & Services
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           We offer a complete range of GPS hardware solutions from basic models to advanced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gpsProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={viewDetails}
            />
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

export default GPSDevsServices;