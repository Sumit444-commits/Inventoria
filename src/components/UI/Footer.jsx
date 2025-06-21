
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import useTypewriter from "../../hooks/useTypeWriter";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-5 sm:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Logo Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-4xl font-bold mb-4">{useTypewriter("Inventoria",75)}</h2>
            <p className="text-sm mb-4">
              Your go-to platform for managing and tracking inventory with ease.
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              <Link to="https://www.facebook.com/sumit.sharma.65463" target="_blank" className="text-xl hover:text-blue-300">
                <FaFacebookF />
              </Link>
              <Link to="https://www.instagram.com/codes.software?igsh=bXE2a3d0cnZqc3Fr" target="_blank" className="text-xl hover:text-blue-300">
                <FaInstagram />
              </Link>
              <Link to="https://www.linkedin.com/in/sumit-sharma-a0b2c7/" target="_blank"  className="text-xl hover:text-blue-300">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <HashLink to="/#home" className="hover:text-blue-300">Home</HashLink>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-300">Products</Link>
              </li>
              <li>
                <HashLink to="/#about" className="hover:text-blue-300">About Us</HashLink>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-4">Feel free to reach out with any inquiries!</p>
            <ul>
              <li>
                <Link to="mailto:sumit8444061@gmail.com" className="hover:text-blue-300">sumit8444061@gmail.com</Link>
              </li>
              <li>
                <Link to="tel:+923116799190" className="hover:text-blue-300">+92 3116799190</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Inventoria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
