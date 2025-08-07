import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#B0E4F4] text-black py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          {/* Know */}
          <div>
            <h4 className=" mb-3 border-b border-gray-500 inline-block">
              KNOW
            </h4>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">About Earthbubs Store</a></li>
              <li><a href="#" className="hover:underline">Bulk Purchase & Corporate Gifts</a></li>
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h4 className=" mb-3 border-b border-gray-500 inline-block">
              TERMS & CONDITIONS
            </h4>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="hover:underline">Shipping & Return Policies</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">FAQ's</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <a href ="/contact"><h4 className=" mb-3 border-b border-gray-500 inline-block">
              CONTACT US
            </h4>
            <ul className="space-y-2 mt-2 text-sm">
              <li>For Sale: Earthbubs@co.in</li>
              <li>Call: +91 1234567890</li>
              <li>For Complaints: 1800 202 2222</li>
              <li>
                Chat Time: Our Team is Available Mon–Sat from 9.00AM to 8.00PM
              </li>
              <li>For Complaints: Ebcustomercare.com</li>
            </ul></a>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className=" mb-3 border-b border-gray-500 inline-block">
              FOLLOW US
            </h4>
            <div className="flex space-x-4 mt-2">
              <a href="#"><FaInstagram className="hover:text-gray-700" /></a>
              <a href="#"><FaFacebookF className="hover:text-gray-700" /></a>
              <a href="#"><FaTwitter className="hover:text-gray-700" /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-500" />

        {/* Bottom Footer */}
        <div className="text-center text-sm text-gray-700 mt-4">
          Copyright © 2025 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
