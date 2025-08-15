
'use client';
import Carousel from "./Pages/carousel/Carousel";
import ContactUs from "./Pages/contactus/ContactUs";
import Footer from "./Pages/footer/Footer";
import Home from "./Pages/home/Home";
import OurServices from "./Pages/ourservices/OurServices";


export default function Page() {
  return (
    <div>
      <Home />
      <Carousel />
      <OurServices />
      <ContactUs />
      <Footer />
    </div>
  );
}
