import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-100 border-t-2 border-gray-300">
  <div className="relative z-10 mx-auto max-w-7xl px-4">
    <div className="flex flex-wrap -mx-6">
      {/* Logo and Copyright */}
      <div className="w-full p-6 md:w-1/2 lg:w-5/12">
        <div className="flex h-full flex-col justify-between">
          <div className="mb-6">
            <Logo width="120px" />
          </div>
          <p className="text-sm text-gray-600">
            &copy; 2023 DevUI. All rights reserved.
          </p>
        </div>
      </div>

      {/* Company Links */}
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">Company</h3>
        <ul className="space-y-3">
          <li>
            <Link to="/" className="text-base text-gray-700 hover:text-blue-600">
              Features
            </Link>
          </li>
          <li>
            <Link to="/" className="text-base text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/" className="text-base text-gray-700 hover:text-blue-600">
              Affiliate Program
            </Link>
          </li>
          <li>
            <Link to="/" className="text-base text-gray-700 hover:text-blue-600">
              Press Kit
            </Link>
          </li>
        </ul>
      </div>

      {/* Support Links */}
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">Support</h3>
        <ul className="space-y-3">
          <li>
            <Link to="/" className="text-base text-gray-700 hover:text-blue-600">
              Account
            </Link>
          </li>
          <li>
            <Link to="/" className="text-base text-gray-700 hover:text-blue-600">
              Help
            </Link>
          </li>
          <li>
            <Link to="/" className="text-base text-gray-700 hover:text-blue-600">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/" className="text-base text-gray-700 hover:text-blue-600">
              Customer Support
            </Link>
          </li>
        </ul>
      </div>

      {/* Legal Links */}
      <div className="w-full p-6 md:w-1/2 lg:w-3/12">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">Legals</h3>
        <ul className="space-y-3">
          <li>
            <Link to="/" className="text-base text-gray-700 hover:text-blue-600">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/" className="text-base text-gray-700 hover:text-blue-600">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/" className="text-base text-gray-700 hover:text-blue-600">
              Licensing
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}

export default Footer