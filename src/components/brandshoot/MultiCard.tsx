"use client";

import Image from "next/image";
import Link from "next/link";
import img13 from "@/assets/headshot/img13.png"; // top-right
import img14 from "@/assets/headshot/img14.png"; // bottom-left
import img15 from "@/assets/headshot/img15.png"; // avatar

export default function MultiCard() {
  return (
    <section className="bg-[#EFF2F5]">
      <div className="mx-auto max-w-[1160px] px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div className="rounded-[24px] bg-[#F0F0F0] border border-[#C1C1C5] p-6 md:p-8 flex flex-col justify-between h-full">
            <h1 className="text-[#222223] font-bold tracking-[-0.01em] leading-tight text-[32px] md:text-6xl">
              Take the Next Step in Your Career
            </h1>

            <div className="mt-8 flex items-start gap-4">
              <div className="rounded-2xl bg-black/10 p-1 self-end">
                <div className="relative w-[80px] h-[80px] rounded-xl overflow-hidden">
                  <Image
                    src={img15}
                    alt="Dhanya Arya"
                    fill
                    className="object-cover"
                    sizes="64px"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col flex-1 justify-end">
                <span className="text-[15px] font-medium text-[#222223]">Dhanya Arya</span>
                <span className="text-[13px] text-[#222223]">Potrait</span>

                <div className="mt-2 h-px w-full bg-[#C1C1C5]" />

                <Link
                  href="#profile"
                  className="mt-2 inline-flex items-center gap-2 text-[#222223] text-[12px] md:text-[13px] font-semibold tracking-wide"
                >
                  PROFILE
                  <span className="inline-flex items-center justify-center w-[24px] h-[24px] rounded-full bg-black text-white">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h12M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] bg-[#F0F0F0] border border-[#C1C1C5] shadow-sm p-2">
            <div className="relative w-full h-[240px] md:h-[360px] lg:h-[420px] overflow-hidden rounded-[18px]">
              <Image
                src={img13}
                alt="Professional headshot"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 560px"
                priority
              />
            </div>
          </div>

          <div className="rounded-[24px] bg-[#F0F0F0] border border-[#C1C1C5] shadow-sm p-2">
            <div className="relative w-full h-[240px] md:h-[360px] lg:h-[420px] overflow-hidden rounded-[18px]">
              <Image
                src={img14}
                alt="Editorial headshot"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 560px"
              />
            </div>
          </div>

          <div className="relative rounded-[24px] border border-[#C1C1C5] bg-[#DCDCE0] p-6 md:p-8 text-[#333333]">
            
            <h2 className="font-bold tracking-[-0.01em] leading-tight text-[28px] md:text-[36px]">
              Reserve Your Session Today
            </h2>

            <p className="mt-3 text-[14px] md:text-[15px] leading-[1.6] max-w-[60ch]">
              Ready to take the next step? Reserve your session with our easy-to-use
              booking system. Select your preferred date and time, and we’ll confirm
              the details of your professional headshot session in Mumbai.
            </p>

            <div className="mt-5 h-px w-full bg-[#C1C1C5]" />

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.08em] opacity-70">
                  Date
                </p>
                <div className="mt-2 text-[20px] md:text-[22px] font-semibold leading-snug">
                  <p>March 25, 2025</p>
                </div>
                <p className="mt-2 text-[11px] opacity-60">Confirmed Slot</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.08em] opacity-70">
                  Session Details
                </p>
                <ul className="mt-2 space-y-1.5 text-[13.5px] leading-[1.35]">
                  <li>90-minute session</li>
                  <li>2 outfit changes</li>
                  <li>Indoor studio lighting</li>
                  <li>5 retouched images</li>
                </ul>
              </div>

              <div>
                <p className="flex items-center justify-between text-[11px] uppercase tracking-[0.08em] opacity-70">
                  <span>Preferences</span>
                </p>
                <ul className="mt-2 space-y-1.5 text-[13.5px] leading-[1.35]">
                  <li>Style: Contemporary</li>
                  <li>Mood: Confident</li>
                  <li>Backdrop: Grey/Neutral</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          @media (max-width: 767px) {
            .mobile-card { border-radius: 22px; }
          }
        `}</style>
      </div>
    </section>
  );
}