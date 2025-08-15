// ServicesProduct.tsx
import GPSDevsServices from "./GPSDevsServices";
import SecurityDevsServices from "./SecurityDevsServices";
import SoftwareServices from "./SoftwareServices";

interface ServicesProductProps {
  selectedService: string;
}

const ServicesProduct = ({ selectedService }: ServicesProductProps) => {
  const renderSelectedService = () => {
    switch (selectedService) {
      case 'software-trading':
        return <SoftwareServices />;
      case 'gps-trading':
        return <GPSDevsServices />;
      case 'security-services':
        return <SecurityDevsServices />;
      default:
        return <SoftwareServices />; // Default fallback
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto">
        {/* Service content */}
        <div className="bg-white rounded-2xl shadow-lg ">
          {renderSelectedService()}
        </div>
        
        {/* Add one button in the bottom right corner "show more" aand also add search functionality */}
        
        {/* Bottom spacing */}
        <div className="h-16"></div>
      </div>
    </div>
  );
};

export default ServicesProduct;