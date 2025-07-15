"use client";

import dynamic from "next/dynamic";

// Dynamic imports with SSR enabled
const Banner = dynamic(() => import("@/components/live-streaming/Banner"), {
  ssr: true,
});
const About = dynamic(() => import("@/components/live-streaming/About"), {
  ssr: true,
});
const Services = dynamic(() => import("@/components/live-streaming/Services"), {
  ssr: true,
});
const Equipment = dynamic(
  () => import("@/components/live-streaming/Equipment"),
  {
    ssr: true,
  }
);
const Pricing = dynamic(() => import("@/components/live-streaming/Pricing"), {
  ssr: true,
});
const LiveStreamDemo = dynamic(
  () => import("@/components/live-streaming/LiveStreamDemo"),
  {
    ssr: true,
  }
);
const RecentWorks = dynamic(
  () => import("@/components/live-streaming/RecentWorks"),
  {
    ssr: true,
  }
);
const Testimonials = dynamic(
  () => import("@/components/live-streaming/Testimonials"),
  {
    ssr: true,
  }
);
const FAQ2 = dynamic(() => import("@/components/live-streaming/FAQ2"), {
  ssr: true,
});
const CallToAction = dynamic(
  () => import("@/components/live-streaming/CallToAction"),
  {
    ssr: true,
  }
);

export default function LiveStreamingPage() {
  return (
    <main>
      <Banner />
      <About />
      <Services />
      <Equipment />
      <Pricing />
      <LiveStreamDemo />
      <RecentWorks />
      <Testimonials />
      <FAQ2 />
      <CallToAction />
    </main>
  );
}
