
import { allServices } from '@/lib/photography-data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServicePageContent from '@/components/photography/ServicePageContent';
import type { FAQ } from '@/lib/types';

type ServicePageProps = {
  params: {
    serviceId: string;
  };
};

const extractPrice = (priceString: string) => {
    const match = priceString.match(/₹([\d,]+)/);
    return match ? parseFloat(match[1].replace(/,/g, '')) : null;
};

const heroSubheadlines: { [key: string]: string } = {
  weddings: `Documenting your once-in-a-lifetime love story with timeless wedding photography and videography in Mumbai.`,
  events: `Capturing the energy, emotion, and key moments of your corporate and social events across Mumbai.`,
  'live-streaming': `Broadcast your events to a global audience with our professional live streaming and webcasting services in Mumbai.`,
  'portraits-headshots': `Crafting authentic portraits and professional headshots in Mumbai that capture your unique essence.`,
  'family-kids': `Creating joyful, candid, and timeless photographs of your family's precious moments in Mumbai.`,
  'fashion-shoots': `Bringing your creative vision to life with high-impact fashion photography and lookbooks for brands in Mumbai.`,
  'editorial-portfolio': `Building powerful portfolios for models and artists with compelling, story-driven editorial photography in Mumbai.`,
  'boudoir-shoots': `Celebrate your unique beauty with an empowering, private, and artistic boudoir photography experience in Mumbai.`,
  'brand-content': `Telling your brand's story through a strategic and cohesive library of photos and videos for your marketing channels.`,
  'product-ecommerce': `Driving sales with crisp, clean, and compelling product photography for e-commerce stores and brands in Mumbai.`,
  'food-photography': `Making your dishes look as delicious as they taste with irresistible food photography for restaurants and brands in Mumbai.`,
  'corporate-industrial': `Showcasing your company’s scale and vision through powerful corporate and industrial photography and videography.`,
  'real-estate-architectural': `Making properties shine with stunning architectural photography and cinematic videos that attract buyers and clients.`,
  'influencer-celebrity': `Providing discreet, high-quality, and impactful content creation for public figures and influencers in Mumbai.`,
  'podcast-production': `From pristine audio to multi-camera 4K video, we provide end-to-end podcast production in our Mumbai studio.`,
  'editing-retouching': `Transforming your raw photos and footage into polished, professional assets with our expert post-production services.`,
  'album-design': `Preserving your cherished memories in beautifully designed, handcrafted photo albums that last a lifetime.`,
  'drone-services': `Capturing breathtaking aerial perspectives with our professional drone photography and videography services across Mumbai.`,
  'design-services': `Extending your visual identity with stunning brand, web, and motion design.`
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = allServices.find((s) => s.id === params.serviceId);

  if (!service || !service.pageContent) {
    return {
      title: 'Service Not Found',
    };
  }

  const { pageContent } = service;
  
  const heroSubheadline = heroSubheadlines[service.id] || `Expert ${service.categoryName} Photography Services in Mumbai`;
  const pageTitle = `Professional ${service.name} in Mumbai | PK Photography`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "Organization",
      "name": "PK Photography",
      "url": "https://pkphotography.in"
    },
    "areaServed": {
      "@type": "City",
      "name": "Mumbai"
    },
    "description": pageContent.longDescription,
    "url": `https://pkphotography.in/booking/${service.id}`,
    "offers": pageContent.packages.map(pkg => {
        const price = extractPrice(pkg.price);
        return {
            "@type": "Offer",
            "name": pkg.name,
            "price": price,
            "priceCurrency": "INR"
        }
    }).filter(offer => offer.price !== null)
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pageContent.faqs.map((faq: FAQ) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return {
    title: pageTitle,
    description: heroSubheadline,
    openGraph: {
      title: pageTitle,
      description: heroSubheadline,
      images: [
        {
          url: service.images[0]?.imageUrl,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    alternates: {
        canonical: `/services/${service.id}`,
    },
    other: {
        "application/ld+json": JSON.stringify(serviceSchema),
        ...(pageContent.faqs && pageContent.faqs.length > 0 && {
            "application/ld+json+faq": JSON.stringify(faqSchema)
        }),
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = allServices.find((s) => s.id === params.serviceId);

  if (!service || !service.pageContent) {
    notFound();
  }

  return (
    <>
      <ServicePageContent service={service} />
    </>
  );
}

export async function generateStaticParams() {
    return allServices
        .filter(service => service.pageContent && service.pageContent.longDescription)
        .map(service => ({
            serviceId: service.id,
        }));
}
