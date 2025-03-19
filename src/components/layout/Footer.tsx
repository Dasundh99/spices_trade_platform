import img4 from "../../assets/GSGreenLogo.png";
import { FaMapMarkerAlt, FaEnvelope, FaInstagram, FaTiktok, FaFacebook, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-300 p-10 text-black">
      <div className="flex flex-wrap gap-10 text-black">
        <div className="flex-1 w-full sm:w-auto">
          <div className="flex gap-5">
            <div className="flex-1">
              <div>
                <img
                  className=""
                  src={img4}
                  alt="Logo"
                  style={{ width: "100px", height: "auto" }}
                />
                {/* <p className="mt-4 text-xs">
                  Simply about what you do!
                </p> */}
                <div className="mt-4 text-xs space-y-2">
                  <p className="flex items-center text-[10px] hover:text-gray-300 text-gray-400">
                    <FaMapMarkerAlt className="mr-2 text-xs hover:text-gray-300 text-gray-400" />
                    38/18, Sri Bimbarama Road, Kolamunna, Piliyandala.
                  </p>
                  
                  <p className="flex items-center text-[10px] hover:text-gray-300 text-gray-400">
                    <FaEnvelope className="mr-2 text-xs hover:text-gray-300 text-gray-400" />
                    gsgreenlanka.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="pl-10">
                <h3 className="text-[18px] text-black">Top Clients</h3>
                <div className="flex gap-x-5 mt-3 w-full ">
                  <ul className="flex flex-col space-y-2 text-xs">
                    <li><a href="#" className="hover:text-gray-300 text-gray-400">Germany</a></li>
                    <li><a href="#" className="hover:text-gray-300 text-gray-400">India</a></li>
                    <li><a href="#" className="hover:text-gray-300 text-gray-400">Maldives</a></li>
                  </ul>
                  <ul className="flex flex-col space-y-2 text-xs">
                    {/* <li><a href="#" className="hover:text-gray-300 text-gray-400">Africa</a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full sm:w-auto">
          <div className="flex gap-5">
            <div className="flex-1">
              <div className="">
                <h3 className="text-[18px] text-black">Information</h3>
                <ul className="mt-3 space-y-2 text-xs">
                  <li>
                    <a href="/about" className="hover:text-gray-300 text-gray-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-gray-300 text-gray-400">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-full pl-10">
                <div className="flex flex-col gap-y-2">
                  <div className="flex-1">
                    <h3 className="text-[18px] text-black">Follow Us</h3>
                    <div className="flex gap-2 mt-3">
                      <FaInstagram size={20} />
                      <FaTiktok size={20} />
                      <FaFacebook size={20} />
                      <FaXTwitter size={20} />
                    </div>
                  </div>
                  <div className="flex-1">
                    {/* <h3 className="text-[18px] text-white">Payment Channels</h3>
                    <div className="flex gap-4 text-4xl mt-3">
                      <FaCcVisa style={{ color: "#1A1F71" }} />
                      <FaCcMastercard style={{ color: "#EB001B" }} />
                      <FaCcPaypal style={{ color: "#003087" }} />
                    </div> */}
                  </div>
                  <div className="flex">
                    <div className="flex items-center text-black border border-black px-2 py-2 rounded-lg gap-2">
                      <FaGlobe className="text-l" />
                      <h3 className="text-[12px]">English | USD</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs">
        <p className="text-gray-400">
          Copyright © {new Date().getFullYear()} GSGreen Lanka. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
