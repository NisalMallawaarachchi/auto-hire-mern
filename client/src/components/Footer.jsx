import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b">
        <div>
          <img src={assets.logo} alt="logo" className="h-8 md:h-9" />
          <p className="max-w-80 mt-3">
            We provide reliable and affordable car rental services across Sri
            Lanka. Whether you need a vehicle for business, leisure, or long
            trips, our wide range of well-maintained cars ensures comfort,
            safety, and convenience. Enjoy hassle-free booking, transparent
            pricing, and 24/7 support for a smooth travel experience.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {/* Instagram */}
            <a href="#">
              <img src={assets.instagram_logo} alt="inteagram_logo" />
            </a>
            {/* Facebook */}
            <a href="#">
              <img src={assets.facebook_logo} alt="facebook_logo" />
            </a>

            {/* Twitter */}
            <a href="#">
              <img src={assets.twitter_logo} alt="twitter_logo" />
            </a>

            {/* Gmail */}
            <a href="#">
              <img src={assets.gmail_logo} alt="gmail_logo" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Quick Links
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Brows Cars</a>
            </li>
            <li>
              <a href="#">List Your Cars</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Resources
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privace Policy</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Contact
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>Mahawatta, Ampegama</li>
            <li>Galle, Sri Lanka</li>
            <li>+94 77 123 4567</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://prebuiltui.com">AutoHire</a>. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>

          <li>|</li>

          <li>
            <a href="#">Terms</a>
          </li>

          <li>|</li>
          
          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
