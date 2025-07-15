import React from 'react';
import { getCurrentYear } from '../../../helper';
import DecryptedText from '../DecryptedText';
export function Footer() {


  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <DecryptedText
          text={`© ${getCurrentYear()}  Sumit Kumar Khamari. All rights reserved.`}
          speed={100}
          maxIterations={20}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
        />
      </div>
    </footer>
  );
}