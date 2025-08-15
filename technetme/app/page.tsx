
'use client';
import About from "./Pages/about/About";
import ContactUs from "./Pages/contactus/ContactUs";
import Footer from "./Pages/footer/Footer";
import Home from "./Pages/home/Home";
import OurServices from "./Pages/ourservices/OurServices";


export default function Page() {
  return (
    <div>
      <Home />
      <About />
      <OurServices />
      <ContactUs />
      <Footer />
    </div>
  );
}
