"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="bg-white text-[#0f1110] py-16 px-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-500">Last updated: May 19, 2025</p>

      <section className="space-y-6 text-base leading-relaxed">
        <p>
          This Privacy Policy describes how we collect, use, and protect your personal information when you visit or interact with our website and services at PK Photography.
        </p>

        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Personal details such as your name, email address, and phone number when you fill out forms.</li>
          <li>Uploaded files, including resumes or documents submitted via career or booking forms.</li>
          <li>Technical data such as IP address, browser type, device information, and page interactions.</li>
        </ul>

        <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>To respond to inquiries and manage bookings or job applications.</li>
          <li>To improve website functionality and user experience.</li>
          <li>To send service updates or marketing emails (only if consent is given).</li>
        </ul>

        <h2 className="text-xl font-semibold">3. Sharing of Information</h2>
        <p>
          We do not sell, trade, or rent your personal information. However, we may share data with trusted service providers who assist us in operating the website or delivering services, under strict confidentiality.
        </p>

        <h2 className="text-xl font-semibold">4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-xl font-semibold">5. Cookies</h2>
        <p>
          Our site may use cookies to analyze web traffic and enhance your experience. You can control cookie settings through your browser.
        </p>

        <h2 className="text-xl font-semibold">6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data. To do so, please contact us at <a href="mailto:info@pkphotography.in" className="text-blue-600 underline">info@pkphotography.in</a>.
        </p>

        <h2 className="text-xl font-semibold">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. All changes will be posted on this page with a revised effective date.
        </p>

        <h2 className="text-xl font-semibold">8. Contact</h2>
        <p>
          For any questions about this policy, please reach out to us at <a href="mailto:info@pkphotography.in" className="text-blue-600 underline">info@pkphotography.in</a>.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;