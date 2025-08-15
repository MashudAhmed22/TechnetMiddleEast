// ContactUs.tsx
// import { Phone, Mail, MapPin } from "lucide-react";

// const ContactUs = () => {
//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Contact Us
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Ready to transform your business? Get in touch with our experts
//             today.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">
//               Get in Touch
//             </h3>
//             <div className="space-y-6">
//               <div className="flex items-center">
//                 <Phone className="w-6 h-6 text-blue-600 mr-4" />
//                 <div>
//                   <p className="font-semibold text-gray-900">Phone</p>
//                   <p className="text-gray-600">+(971) 563011732</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <Mail className="w-6 h-6 text-blue-600 mr-4" />
//                 <div>
//                   <p className="font-semibold text-gray-900">Email</p>
//                   <p className="text-gray-600">info@TechNetME.com</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <MapPin className="w-6 h-6 text-blue-600 mr-4" />
//                 <div>
//                   <p className="font-semibold text-gray-900">Address</p>
//                   <p className="text-gray-600">
//                     Compass Building, AL Hamra Indutrial Zone-FZ
//                     <br />
//                     Ras AI Khaimah,UAE
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gray-50 p-8 rounded-xl">
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Your Name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Service Interest
//                 </label>
//                 <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                   <option>Select a service</option>
//                   <option>Software Trading</option>
//                   <option>GPS Trading</option>
//                   <option>Security Devices & Services</option>
//                   <option>All Services</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Tell us about your project..."
//                 ></textarea>
//               </div>
//               <button
//                 type="button"
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//                 onClick={() =>
//                   alert("Message sent! We will get back to you soon.")
//                 }
//               >
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
//-----MAIN COMPONENT--------------------------------------------------------------------------

// import { useState } from "react";
// import { Phone, Mail, MapPin, AlertCircle, CheckCircle } from "lucide-react";

// interface ContactFormErrors {
//   name?: string;
//   email?: string;
//   service?: string;
//   message?: string;
// }
// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     service: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState<ContactFormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState("");

//   const validateForm = () => {
//     const newErrors: ContactFormErrors = {};

//     // Name validation
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }

//     // Email validation
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(formData.email)) {
//         newErrors.email = "Please enter a valid email address";
//       }
//     }

//     // Service validation
//     if (!formData.service || formData.service === "Select a service") {
//       newErrors.service = "Please select a service";
//     }

//     // Message validation
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error when user starts typing
//     if (name in errors) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus("");
//   };

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Ready to transform your business? Get in touch with our experts
//             today.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">
//               Get in Touch
//             </h3>
//             <div className="space-y-6">
//               <div className="flex items-center">
//                 <Phone className="w-6 h-6 text-blue-600 mr-4" />
//                 <div>
//                   <p className="font-semibold text-gray-900">Phone</p>
//                   <p className="text-gray-600">+(971) 563011732</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <Mail className="w-6 h-6 text-blue-600 mr-4" />
//                 <div>
//                   <p className="font-semibold text-gray-900">Email</p>
//                   <p className="text-gray-600">info@TechNetME.com</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <MapPin className="w-6 h-6 text-blue-600 mr-4" />
//                 <div>
//                   <p className="font-semibold text-gray-900">Address</p>
//                   <p className="text-gray-600">
//                     Compass Building, AL Hamra Indutrial Zone-FZ
//                     <br />
//                     Ras AI Khaimah,UAE
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-gray-50 p-8 rounded-xl">
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                     errors.name ? "border-red-500 bg-red-50" : "border-gray-300"
//                   }`}
//                   placeholder="Your Name"
//                 />
//                 {errors.name && (
//                   <div className="flex items-center mt-1">
//                     <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
//                     <p className="text-sm text-red-600">{errors.name}</p>
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                     errors.email
//                       ? "border-red-500 bg-red-50"
//                       : "border-gray-300"
//                   }`}
//                   placeholder="your@email.com"
//                 />
//                 {errors.email && (
//                   <div className="flex items-center mt-1">
//                     <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
//                     <p className="text-sm text-red-600">{errors.email}</p>
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Service Interest *
//                 </label>
//                 <select
//                   name="service"
//                   value={formData.service}
//                   onChange={handleInputChange}
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                     errors.service
//                       ? "border-red-500 bg-red-50"
//                       : "border-gray-300"
//                   }`}
//                 >
//                   <option value="">Select a service</option>
//                   <option value="Software Trading">Software Trading</option>
//                   <option value="GPS Trading">GPS Trading</option>
//                   <option value="Security Devices & Services">
//                     Security Devices & Services
//                   </option>
//                   <option value="All Services">All Services</option>
//                 </select>
//                 {errors.service && (
//                   <div className="flex items-center mt-1">
//                     <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
//                     <p className="text-sm text-red-600">{errors.service}</p>
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   name="message"
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                     errors.message
//                       ? "border-red-500 bg-red-50"
//                       : "border-gray-300"
//                   }`}
//                   placeholder="Tell us about your project..."
//                 />
//                 {errors.message && (
//                   <div className="flex items-center mt-1">
//                     <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
//                     <p className="text-sm text-red-600">{errors.message}</p>
//                   </div>
//                 )}
//               </div>

//               {/* Status Messages */}
//               {submitStatus === "success" && (
//                 <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
//                   <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
//                   <p className="text-green-700">
//                     Message sent successfully! We'll get back to you soon.
//                   </p>
//                 </div>
//               )}

//               {submitStatus === "error" && (
//                 <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
//                   <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
//                   <p className="text-red-700">
//                     Failed to send message. Please try again or contact us
//                     directly.
//                   </p>
//                 </div>
//               )}

//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className={`w-full py-3 rounded-lg font-semibold transition-colors ${
//                   isSubmitting
//                     ? "bg-gray-400 text-gray-200 cursor-not-allowed"
//                     : "bg-blue-600 text-white hover:bg-blue-700"
//                 }`}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

//-----------------------------------------

import { useState } from "react";
import { Phone, Mail, MapPin, AlertCircle, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactFormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const validateForm = () => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // 1. Send message to your email
      await emailjs.send(
        "service_h66q34a",
        "template_pkusty8", // template for YOU
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        },
        "WKqL1gFySB6daKLik"
      );

      // 2. Send confirmation email to user
      await emailjs.send(
        "service_h66q34a",
        "template_nxlqgys", // template for USER reply
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        },
        "WKqL1gFySB6daKLik"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });
      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our experts
            today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+(971) 563011732</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">info@TechNetME.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">
                    Compass Building, AL Hamra Indutrial Zone-FZ
                    <br /> Ras AI Khaimah,UAE
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.name ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <div className="flex items-center mt-1">
                    <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
                    <p className="text-sm text-red-600">{errors.name}</p>
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <div className="flex items-center mt-1">
                    <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
                    <p className="text-sm text-red-600">{errors.email}</p>
                  </div>
                )}
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.service
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="Software Trading">Software Trading</option>
                  <option value="GPS Trading">GPS Trading</option>
                  <option value="Security Devices & Services">
                    Security Devices & Services
                  </option>
                  <option value="All Services">All Services</option>
                </select>
                {errors.service && (
                  <div className="flex items-center mt-1">
                    <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
                    <p className="text-sm text-red-600">{errors.service}</p>
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.message
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <div className="flex items-center mt-1">
                    <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
                    <p className="text-sm text-red-600">{errors.message}</p>
                  </div>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <p className="text-green-700">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <p className="text-red-700">
                    Failed to send message. Please try again or contact us
                    directly.
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  isSubmitting
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
