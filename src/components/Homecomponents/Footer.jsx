import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#071B2E] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <p className="text-sm leading-relaxed">
            Masters in industrial manufacturing with 25 years of experience and
            10+ awards!
          </p>
          <p className="text-sm leading-relaxed"> Address :- Calgary,Alberta,Canada</p>
          <p>Email: info@candidhaulers.com</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Products</h3>
          <ul className="space-y-1 text-sm">
            <li>Roller Chain Drives</li>
            <li>Gear Couplings</li>
            <li>Conveyor Chains</li>
            <li>Marine Bearings</li>
            <li>Saving investments</li>
            <li>Gear Drives</li>
            <li>Industrial Shafts</li>
            <li>Mechanical Drives</li>
            <li>Conveyor Belts</li>
            <li>Helical Gears</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Features</h3>
          <ul className="space-y-1 text-sm">
            <li>Enterprise</li>
            <li>Customer Service</li>
            <li>Media & Entertainment</li>
            <li>Product</li>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Professional Services</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Careeres</li>
            <li>Legal</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
