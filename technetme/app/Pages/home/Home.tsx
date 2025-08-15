// Home.tsx
import { ChevronRight } from "lucide-react";

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "50+", label: "Projects Completed" },
  { number: "10+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" },
];

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Partner in
              <span className="text-blue-600"> Technology Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We specialize in software trading, GPS systems, and
              comprehensive security solutions. Empowering businesses with
              cutting-edge technology and reliable services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Get Started <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;