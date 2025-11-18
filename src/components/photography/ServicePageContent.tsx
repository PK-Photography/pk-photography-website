
'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Check, Camera } from 'lucide-react';
import Link from 'next/link';
import CategorizedListSection from '@/components/photography/CategorizedListSection';
import type { Service } from '@/lib/types';
import AnimatedGallery from '@/components/photography/AnimatedGallery';
import ContactButton from '@/components/photography/ContactButton';
import EquipmentCarousel from '@/components/photography/EquipmentCarousel';
import * as Icons from 'lucide-react';
import { useState } from 'react';

const getYouTubeEmbedUrl = (url: string): string | null => {
    let videoId: string | null = null;
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
        videoId = match[1];
    } else {
        const idMatch = url.match(/^[a-zA-Z0-9_-]{11}$/);
        if (idMatch) {
            videoId = idMatch[0];
        }
    }
    
    if (videoId) {
        const params = new URLSearchParams({
            autoplay: '1',
            mute: '1',
            loop: '1',
            playlist: videoId, // Important for looping
            controls: '0',
            showinfo: '0',
            autohide: '1',
            modestbranding: '1',
            playsinline: '1',
        });
        return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    }
    return null;
}


export default function ServicePageContent({ service }: { service: Service }) {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  const { pageContent } = service;
  const heroImage = service.images[0];
  
  const quotePackages = pageContent.packages.filter(p => p.price.toLowerCase().includes('quote'));
  const standardPackages = pageContent.packages.filter(p => !p.price.toLowerCase().includes('quote'));
  
  const weddingVideoUrl = service.id === 'weddings' ? getYouTubeEmbedUrl("https://www.youtube.com/watch?v=22SExhaXwi0") : null;
  
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
  
  const heroSubheadline = heroSubheadlines[service.id] || `Expert ${service.categoryName} Photography Services in Mumbai`;


  return (
    <main className="flex-grow">
    {/* Hero Section */}
    <section className="relative h-[60vh] md:h-[70vh] w-full text-white overflow-hidden">
      {weddingVideoUrl ? (
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <iframe
                className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 md:w-[177.77vh] md:h-[100vh] min-w-[177.77vh] min-h-[100vh]"
                src={weddingVideoUrl}
                title="Wedding videography background"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
      ) : heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={service.name}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover object-top"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
        <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl drop-shadow-lg">
          {service.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-xl text-slate-200 drop-shadow-md">
          {heroSubheadline}
        </p>
      </div>
    </section>

    <div className="bg-background">
      <div className="container mx-auto max-w-screen-lg py-12 md:py-16 px-4 space-y-12 md:space-y-24">
        
        {/* About the service */}
        <section>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg md:order-last">
                    {service.images[1] && (
                        <Image
                            src={service.images[1].imageUrl}
                            alt={`${service.name} detail shot`}
                            data-ai-hint={service.images[1].imageHint}
                            fill
                            className="object-cover object-top"
                        />
                    )}
                </div>
                <div className="space-y-6 text-center md:text-left md:order-first">
                <h2 className="font-headline text-2xl md:text-4xl text-[#517587] text-center">About Our {service.name} Services</h2>
                <div className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  <p className={isAboutExpanded ? '' : 'line-clamp-4 md:line-clamp-none'}>
                      {pageContent.longDescription}
                  </p>
                  <button onClick={() => setIsAboutExpanded(!isAboutExpanded)} className="text-[#557C8A] font-semibold mt-2 md:hidden">
                      {isAboutExpanded ? 'Read Less' : 'Read More'}
                  </button>
                </div>
                </div>
            </div>
        </section>


        {/* Event Types Section */}
        {pageContent.eventTypes && pageContent.eventTypes.length > 0 && (
            <div className="py-12 md:py-16">
                <CategorizedListSection 
                title={service.id === 'design-services' ? "Our Design Capabilities" : service.id === 'weddings' ? "What We Cover in a Wedding" : "Types of Events We Cover"}
                categories={pageContent.eventTypes} 
                />
            </div>
        )}
        
        {/* Equipment Section */}
        {pageContent.equipment && pageContent.equipment.length > 0 && (
          <div className="py-12">
              <EquipmentCarousel
                  title="Cutting-Edge Setup & Equipment"
                  subtitle="We use professional-grade equipment to ensure the highest quality results for every project."
                  items={pageContent.equipment}
              />
          </div>
        )}

        {/* Who is it for & Why Choose Us */}
        <section className="space-y-16">
          {pageContent.whoIsItFor && pageContent.whoIsItFor.length > 0 && (
            <div>
                <div className="text-center mb-12">
                    <h2 className="font-headline text-2xl md:text-4xl text-center">Who Is This For?</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {pageContent.whoIsItFor.map((item, index) => (
                      <div key={index} className="flex flex-col gap-3 group">
                          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg">
                              {item.image && (
                                  <Image 
                                      src={item.image.imageUrl}
                                      alt={item.text}
                                      data-ai-hint={item.image.imageHint}
                                      fill
                                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                  />
                              )}
                          </div>
                          <p className="font-semibold text-sm md:text-base text-center text-muted-foreground leading-tight">{item.text}</p>
                      </div>
                  ))}
                </div>
            </div>
          )}
          <div>
              <div className="text-center mb-12">
                  <h2 className="font-headline text-2xl md:text-4xl text-center">Why Choose Us?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start">
              {pageContent.whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="h-8 w-8 text-[#4CAF50] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.split(':')[0]}</h3>
                    <p className="text-muted-foreground text-base hidden md:block">{item.split(': ')[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        {pageContent.process && pageContent.process.length > 0 && (
          <div className="py-12">
            <section>
              <h2 className="font-headline text-2xl md:text-3xl mb-12 text-center text-[#557C8A]">Our Seamless Process</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {pageContent.process.map((step, index) => {
                   const Icon = (Icons as any)[step.icon] || Icons.HelpCircle;
                   const image = step.image;
                   return (
                      <Card key={index} className="flex flex-col rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
                          <CardHeader className="p-0">
                            <div className="relative aspect-video w-full">
                                {image && (
                                    <Image
                                        src={image.imageUrl}
                                        alt={step.title}
                                        data-ai-hint={image.imageHint}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/30" />
                                <div className="absolute top-4 left-4 bg-[#557C8A]/80 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg backdrop-blur-sm">
                                    {step.step}
                                </div>
                            </div>
                          </CardHeader>
                          <CardContent className="p-6 flex-grow flex flex-col">
                              <Icon className="h-8 w-8 text-[#557C8A] mb-4" />
                              <h3 className="font-headline text-xl mb-2">{step.title}</h3>
                              <p className="text-muted-foreground text-sm flex-grow hidden md:block">{step.description}</p>
                          </CardContent>
                      </Card>
                   )
                })}
              </div>
            </section>
          </div>
        )}

        {/* Packages */}
        {(standardPackages.length > 0 || quotePackages.length > 0) && (
          <section>
            <h2 className="font-headline text-3xl md:text-4xl mb-12 text-center">Packages & Pricing</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {pageContent.packages.map((pkg, index) => {
                const isQuotePackage = pkg.price.toLowerCase().includes('quote');

                if (isQuotePackage) {
                  return (
                     <Card key={index} className={`flex flex-col rounded-xl shadow-lg transition-transform hover:-translate-y-2 duration-300 border bg-card/80`}>
                        <CardHeader className="text-center pt-8">
                            <CardTitle className="font-headline text-2xl md:text-3xl">{pkg.name}</CardTitle>
                            <div className="pt-4 h-16 flex items-center justify-center">
                                <p className="text-[#557C8A] font-bold text-3xl font-headline">
                                    {pkg.price}
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow px-6 pb-6 space-y-4">
                            <ul className="space-y-4">
                                {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-left">
                                    <Check className="h-5 w-5 text-accent mt-1 shrink-0" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                                ))}
                            </ul>
                        </CardContent>
                        <div className="p-6 pt-0">
                            <ContactButton size="lg" className="w-full font-bold text-lg" variant={'outline'}>Contact Us</ContactButton>
                        </div>
                    </Card>
                  );
                }

                return (
                    <Card key={index} className={`flex flex-col rounded-xl shadow-lg transition-transform hover:-translate-y-2 duration-300 ${index === 1 && !pkg.price.toLowerCase().includes('quote') ? 'border-2 border-primary lg:scale-105 bg-card' : 'border bg-card/80'}`}>
                    {index === 1 && !pkg.price.toLowerCase().includes('quote') && (
                        <div className="bg-[#557C8A] text-white text-center py-2 font-bold text-sm rounded-t-lg tracking-widest">MOST POPULAR</div>
                    )}
                    <>
                        <CardHeader className="text-center pt-8">
                            <CardTitle className="font-headline text-2xl md:text-3xl">{pkg.name}</CardTitle>
                            <div className="pt-4 h-16 flex items-center justify-center">
                                <div className="flex items-baseline justify-center gap-2">
                                {pkg.originalPrice && (
                                <span className="text-xl text-muted-foreground line-through font-headline">
                                    {pkg.originalPrice}
                                </span>
                                )}
                                <p className="text-[#557C8A] font-bold text-3xl font-headline">
                                    {pkg.price}
                                </p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow px-6 pb-6 space-y-4">
                        <ul className="space-y-4">
                            {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-left">
                                <Check className="h-5 w-5 text-accent mt-1 shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                            </li>
                            ))}
                        </ul>
                        </CardContent>
                        <div className="p-6 pt-0">
                            <Button asChild size="lg" className="w-full font-bold text-lg" variant={index === 1 ? 'default' : 'outline'}>
                                <Link href={`/booking/${service.id}`}>Book Now</Link>
                            </Button>
                        </div>
                    </>
                    </Card>
                )
              })}
            </div>

            {pageContent.customPackage && (
                 <div className="mt-8">
                    <Card className={`flex flex-col rounded-xl shadow-lg transition-transform hover:-translate-y-2 duration-300 h-full border bg-card/80`}>
                    <div className="p-8 flex flex-col h-full">
                        <CardTitle className="font-headline text-2xl md:text-3xl">{pageContent.customPackage.name}</CardTitle>
                        <p className="text-[#557C8A] font-bold text-3xl font-headline mt-2 mb-4">
                            {pageContent.customPackage.price}
                        </p>
                        <ul className="space-y-4 flex-grow">
                        {pageContent.customPackage.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-left">
                                <Check className="h-5 w-5 text-accent mt-1 shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                            </li>
                        ))}
                        </ul>
                        <div className="mt-6">
                        <ContactButton size="lg" className="w-full font-bold text-lg">
                            Contact Us
                        </ContactButton>
                        </div>
                    </div>
                    </Card>
                </div>
            )}
          </section>
        )}
      </div>
        {/* Portfolio */}
        {pageContent.portfolio && pageContent.portfolio.length > 0 && (
          <section id="portfolio" className="py-16 md:py-20">
            <div className="container mx-auto max-w-screen-lg px-4 text-center">
              <h2 className="font-headline text-3xl md:text-4xl mb-12">Portfolio Showcase</h2>
              <AnimatedGallery portfolio={pageContent.portfolio} serviceName={service.name} />
            </div>
          </section>
        )}

         {/* FAQs */}
        <div className="container mx-auto max-w-screen-lg py-12 md:py-16 px-4 space-y-12 md:space-y-24">
         {pageContent.faqs && pageContent.faqs.length > 0 && (
          <section className="max-w-4xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl mb-10 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                  {pageContent.faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index} className="bg-secondary/50 rounded-lg px-4 border-l-4 border-primary">
                      <AccordionTrigger className="text-base text-left font-semibold hover:no-underline [&[data-state=open]]:text-[#557C8A] py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground pb-4 pr-4">
                        {faq.answer}
                      </AccordionContent>
                  </AccordionItem>
                  ))}
              </Accordion>
          </section>
         )}

        {/* CTA */}
        <section className="text-center">
            <Card className="bg-[white] text-[#557C8A]-foreground rounded-2xl">
                <CardContent className="p-8 md:p-12">
                    <Camera className="h-12 w-12 mx-auto mb-4"/>
                    <h2 className="font-headline text-3xl md:text-4xl mb-4">Ready to Capture Your Story?</h2>
                    <p className="max-w-2xl mx-auto text-[#557C8A]-foreground/80 mb-8 text-base">
                        {`Let's create something beautiful together. Contact PK Photography today to discuss your project and book your session in Mumbai.`}
                    </p>
                     <Button asChild size="lg" className="font-bold text-lg bg-[#557C8A]-foreground text-[#557C8A] hover:bg-[#557C8A]-foreground/90">
                        <Link href={`/booking`}>Inquire Now</Link>
                    </Button>
                </CardContent>
            </Card>
        </section>

      </div>
    </div>
  </main>
  );
}
