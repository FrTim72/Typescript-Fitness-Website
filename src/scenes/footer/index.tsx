// src/scenes/footer/index.tsx
import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 gap-16 md:flex md:justify-between">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            At Evogym, we're dedicated to helping you achieve your fitness goals with state-of-the-art equipment, 
            expert trainers, and a supportive community. Join us today and transform your life through fitness.
          </p>
          <p>© Luvano Zaal All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <p className="my-5">
            <a href="#home" className="hover:text-primary-500 transition duration-300">Home</a>
          </p>
          <p className="my-5">
            <a href="#benefits" className="hover:text-primary-500 transition duration-300">Benefits</a>
          </p>
          <p className="my-5">
            <a href="#ourclasses" className="hover:text-primary-500 transition duration-300">Our Classes</a>
          </p>
          <p>
            <a href="#contactus" className="hover:text-primary-500 transition duration-300">Contact Us</a>
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">123 Fitness Street, Gym City, GC 12345</p>
          <p className="my-5">(555) 123-4567</p>
          <p className="my-5">info@evogym.com</p>
          <p>Mon-Sun: 5:00 AM - 11:00 PM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;