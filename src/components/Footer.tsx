import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Ho An Loc</h3>
            <p className="text-slate-400">AI Engineer & Full Stack Developer</p>
          </div>
          
          <div className="flex items-center justify-center space-x-1 text-slate-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
          
          <div className="mt-4 text-slate-500 text-sm">
            © {new Date().getFullYear()} Ho An Loc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;