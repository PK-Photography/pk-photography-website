"use client";

import dynamic from "next/dynamic";
const backgroundVideo = "/live-streaming/coverpage.mp4";
const fallbackImage = "/live-streaming/audio_equipment.jpg";

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
  const title = "Experience Live Streaming Like Never Before";
  const description =
    "Broadcast your events in high-definition to a global audience with PK Photography—your trusted partner in seamless live streaming.";
  return (
    <main>
      <Banner
        fallbackImage={fallbackImage}
        backgroundVideo={backgroundVideo}
        title={title}
        description={description}
      />
      <About />
      <Services />
      <Equipment />
      <Pricing serviceName="live-streaming" />
      <LiveStreamDemo />
      <RecentWorks />
      <Testimonials />
      <FAQ2 />
      <CallToAction />
    </main>
  );
}
