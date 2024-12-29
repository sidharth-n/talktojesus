import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Talk to Jesus</h3>
            <p className="text-gray-600 text-sm">
              AI-powered comfort and guidance for your spiritual journey.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-[#FFC107]">About</a></li>
              <li><a href="#" className="hover:text-[#FFC107]">Contact</a></li>
              <li><a href="#" className="hover:text-[#FFC107]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#FFC107]">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Important</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-[#FFC107]">Disclaimer</a></li>
              <li><a href="#" className="hover:text-[#FFC107]">Support</a></li>
              <li><a href="#" className="hover:text-[#FFC107]">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <p className="text-sm text-gray-600">
              © 2024 Talk to Jesus AI. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              This is an AI simulation and is not affiliated with any religious institution.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}