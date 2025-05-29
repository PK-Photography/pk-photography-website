"use client";

import React from "react";

const TermsAndConditions = () => {
  return (
    <main className="bg-white text-[#0f1110] py-16 px-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-4 text-sm text-gray-500">Last updated: May 19, 2025</p>

      <section className="space-y-6 text-base leading-relaxed">
        <p>
          These Terms and Conditions (“Terms”) govern your use of the PK Photography website and services. By accessing or using our platform, you agree to comply with and be bound by these Terms.
        </p>

        <h2 className="text-xl font-semibold">1. Services</h2>
        <p>
          PK Photography offers photography services across various categories such as headshots, weddings, events, and more. All bookings are subject to availability and confirmation.
        </p>

        <h2 className="text-xl font-semibold">2. Booking & Payments</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Clients must complete the booking form with accurate information.</li>
          <li>Advance payments may be required to confirm your booking.</li>
          <li>All fees will be communicated before the shoot and must be settled as agreed.</li>
        </ul>

        <h2 className="text-xl font-semibold">3. Cancellations & Refunds</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Cancellations made within 48 hours of the shoot may not be eligible for a refund.</li>
          <li>Rescheduling is subject to availability and should be communicated in advance.</li>
        </ul>

        <h2 className="text-xl font-semibold">4. Image Rights & Usage</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Clients receive edited digital images for personal or business use, as agreed upon.</li>
          <li>PK Photography retains the right to use images for portfolio, website, and marketing purposes unless a prior written agreement states otherwise.</li>
        </ul>

        <h2 className="text-xl font-semibold">5. User Responsibilities</h2>
        <p>
          You agree not to misuse our platform, attempt to hack, or interfere with other users. Any abusive or fraudulent activity will result in termination of access.
        </p>

        <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
        <p>
          While we strive for perfection, PK Photography is not liable for any indirect, incidental, or consequential damages arising from the use of our services or website.
        </p>

        <h2 className="text-xl font-semibold">7. Shipping Timeline</h2>
        <p>
        Shipping and delivery will be done in 10-15 working days
        </p>

        <h2 className="text-xl font-semibold">8. Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms at any time. Continued use of the website implies your acceptance of any changes.
        </p>

        <h2 className="text-xl font-semibold">9. Contact</h2>
        <p>
          If you have questions about these Terms, please contact us at{" "}
          <a href="mailto:info@pkphotography.in" className="text-blue-600 underline">
            info@pkphotography.in
          </a>.
        </p>
      </section>
    </main>
  );
};

export default TermsAndConditions;