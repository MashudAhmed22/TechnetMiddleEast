import { useState } from "react";
import { servicesData } from "./features/ServicesData";
import ServiceCard from "../../Component/cards/ServicesCard";
import ServicesProduct from "./features/serviceproduct/ServicesProduct";

const OurServices = () => {
  // State to track which service is selected (default to 'software-trading')
  const [selectedService, setSelectedService] =
    useState<string>("software-trading");

  const handleServiceClick = (serviceId: string, title: string) => {
    console.log(`Clicked on ${title} with ID: ${serviceId}`);
    setSelectedService(serviceId);
  };

  // Helper function to convert color to Tailwind classes
  const getButtonColorClasses = (
    color?: "blue" | "green" | "red" | "purple" | "orange"
  ): string => {
    switch (color) {
      case "blue":
        return "bg-blue-600 text-white hover:bg-blue-700";
      case "green":
        return "bg-green-600 text-white hover:bg-green-700";
      case "red":
        return "bg-red-600 text-white hover:bg-red-700";
      case "purple":
        return "bg-purple-600 text-white hover:bg-purple-700";
      case "orange":
        return "bg-orange-600 text-white hover:bg-orange-700";
      default:
        return "bg-blue-600 text-white hover:bg-blue-700";
    }
  };

  return (
    <div>
      <section id="services" className="py-20 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to meet your business
              needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                buttonText={service.buttonText || "Learn More"}
                buttonColor={getButtonColorClasses(service.buttonColor)}
                onButtonClick={() =>
                  handleServiceClick(service.id, service.title)
                }
                isSelected={selectedService === service.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Products Section */}
      <ServicesProduct selectedService={selectedService} />
    </div>
  );
};

export default OurServices;
