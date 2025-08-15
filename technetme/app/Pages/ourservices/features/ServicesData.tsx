// servicesData.ts
import { Shield, Globe, Code } from "lucide-react";

export interface ServiceData {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText?: string;
  buttonColor?: 'blue' | 'green' | 'red' | 'purple' | 'orange';
}

export const servicesData: ServiceData[] = [
  {
    id: "software-trading",
    icon: <Code className="w-12 h-12 text-blue-600" />,
    title: "Software Services",
    description: "Cutting-edge software solutions for businesses of all sizes. From custom applications to enterprise systems.",
    features: [
      "Custom Development",
      "Enterprise Solutions",
      "System Integration",
      "Technical Support",
    ],
    buttonText: "Learn More",
    buttonColor: "blue"
  },
  {
    id: "gps-trading",
    icon: <Globe className="w-12 h-12 text-green-600" />,
    title: "GPS Devices & Services",
    description: "We offer a complete range of GPS hardware solutions from basic models to advanced.",
    features: [
      "Fleet Tracking Hardware",
      "IOT Accessories & Sensors",//https://www.sparkerrsolutions.com/internet-of-things
      "Fuel Monitoring Hardware",
      // "Navigation Systems Hardware",//
      "GPS consultant services"
    
    ],
    buttonText: "Explore GPS",
    buttonColor: "green"
  },
  {
    id: "security-services",
    icon: <Shield className="w-12 h-12 text-red-600" />,
    title: "Security Devices & Services",
    description: "Comprehensive security solutions including surveillance, access control, and monitoring systems.",
    features: [
      "CCTV Systems",
      "Access Control",
      "Alarm Systems",
      "24/7 Monitoring",
    ],
    buttonText: "Get Secured",
    buttonColor: "red"
  },
];

// You can easily add more services here
export const additionalServices: ServiceData[] = [
  // Add future services here
];