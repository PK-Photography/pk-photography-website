"use client";

import React from "react";

const RefundPolicy = () => {
  return (
    <main className="bg-white text-[#0f1110] py-16 px-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
      <p className="mb-4 text-sm text-gray-500">Last updated: May 19, 2025</p>

      <section className="space-y-6 text-base leading-relaxed">
        <p>
          At PK Photography, we strive to provide exceptional service and memorable photography experiences. However, we understand that plans can change. Please read our refund policy carefully before booking.
        </p>

        <h2 className="text-xl font-semibold">1. Booking Cancellation</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Cancellations made more than 72 hours before the scheduled shoot are eligible for a full refund of the booking amount.
          </li>
          <li>
            Cancellations made within 48–72 hours will receive a 50% refund.
          </li>
          <li>
            Cancellations within 48 hours of the shoot are non-refundable.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">2. Rescheduling</h2>
        <p>
          Clients may reschedule their shoot up to 48 hours prior to the original time slot without any penalty, subject to availability. Rescheduling within 24 hours may attract a nominal fee.
        </p>

        <h2 className="text-xl font-semibold">3. Service Issues</h2>
        <p>
          If you are dissatisfied with the service due to genuine quality concerns, please email us within 7 days of receiving the deliverables. We will investigate and offer resolutions which may include:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Free re-editing of selected photos</li>
          <li>Partial refund depending on the situation</li>
          <li>A complimentary reshoot (where feasible)</li>
        </ul>

        <h2 className="text-xl font-semibold">4. Non-Refundable Services</h2>
        <p>
          Services such as makeup artists, location rentals, or other third-party arrangements booked through us are non-refundable once confirmed.
        </p>

        <h2 className="text-xl font-semibold">5. Refund Timeline</h2>
        <p>
          Approved refunds will be processed within 7–10 business days to the original mode of payment. Refund amount will be credited back in source account in 2-3 days after initiation of the refund
        </p>

        <h2 className="text-xl font-semibold">6. Contact for Refunds</h2>
        <p>
          To request a cancellation or refund, please email us at{" "}
          <a href="mailto:info@pkphotography.in" className="text-blue-600 underline">
            info@pkphotography.in
          </a>{" "}
          with your booking reference, name, and reason for the request.
        </p>
      </section>
    </main>
  );
};

export default RefundPolicy;