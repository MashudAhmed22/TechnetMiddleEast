import React from "react";
import { Maximize2 } from "lucide-react";
import OutlineButton from "../button/OutlineButton";
import { Product } from "../types/ProductsTypes";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onImageClick?: (product: Product) => void;
  className?: string;
  showExpandButton?: boolean;
  imageHeight?: string;
  detailsButtonText?: string;
  detailsButtonSize?: "small" | "medium" | "large";
}

const ReusableCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onImageClick,
  className = "",
  showExpandButton = true,
  imageHeight = "h-48",
  detailsButtonText = "Details",
  detailsButtonSize = "small"
}) => {
  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(product);
    } else {
      onViewDetails(product);
    }
  };

  const getButtonSizeClasses = () => {
    switch (detailsButtonSize) {
      case "small":
        return "!px-3 !py-1 !text-xs";
      case "medium":
        return "!px-4 !py-2 !text-sm";
      case "large":
        return "!px-6 !py-3 !text-base";
      default:
        return "!px-3 !py-1 !text-xs";
    }
  };

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden ${className}`}
    >
      {/* Image Section */}
      <div className={`relative ${imageHeight} bg-gray-100`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleImageClick}
        />
        {showExpandButton && (
          <button
            onClick={() => onViewDetails(product)}
            className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
            title="View Details"
          >
            <Maximize2 size={16} className="text-gray-600" />
          </button>
        )}
      </div>

      {/* Product Info Section */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h4 className="font-semibold text-gray-900 text-sm flex-1 mr-2">
            {product.name}
          </h4>
          <OutlineButton
            text={detailsButtonText}
            onClick={() => onViewDetails(product)}
            className={getButtonSizeClasses()}
          />
        </div>

        <p className="text-gray-600 text-xs mb-3 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ReusableCard;