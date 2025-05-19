import React from 'react';
import { getCurrentYear } from '../../../helper';
export function Footer() {


  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">{`© ${getCurrentYear()}  Sumit Kumar Khamari. All rights reserved.`}
      </div>
    </footer>
  );
}