
import { PlaceHolderImages } from './placeholder-images';
import type { Category, Service } from './types';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Return a default placeholder if image not found, to avoid crashing
    return {
      id: 'placeholder',
      description: 'Placeholder Image',
      imageUrl: 'https://picsum.photos/seed/placeholder/600/400',
      imageHint: 'placeholder',
    };
  }
  return image;
};

export const photographyCategories: Category[] = [
  {
    id: 'weddings-events',
    name: 'Weddings & Events',
    description: 'Documenting your most important celebrations.',
    image: getImage('events-category'),
    services: [
      {
        id: 'weddings',
        name: 'Wedding Photography & Videography',
        categoryName: 'Weddings & Events',
        description: "Complete photo and video coverage for your wedding day, capturing every moment of your celebration.",
        price: 'Starting at ₹75,000',
        thumbnailImage: getImage('events-category'),
        images: [getImage('wedding-photography-1'), getImage('wedding-photography-2')],
        details: ['8+ hours of coverage', 'Second photographer/videographer', '400+ edited photos & highlight film', 'Engagement session included'],
        pageContent: {
          longDescription: "Your wedding day is a symphony of emotions, traditions, and unforgettable moments. As one of Mumbai's premier wedding photography and videography teams, we specialize in telling your unique love story with artistry and passion. Based in Andheri West, we are the wedding photographer near you, ready to capture your special day. We blend photojournalistic candids with cinematic portraits, capturing everything from the grandest ceremonies to the quietest, most intimate glances. We are experienced with diverse cultural weddings, from vibrant Hindu ceremonies to elegant Christian nuptials, ensuring every tradition is honored and beautifully documented.",
          eventTypes: [
            {
              categoryTitle: "Pre-Wedding Functions",
              icon: "PartyPopper",
              image: getImage('pre-wedding'),
              list: [
                { title: "Roka & Engagement", description: "Celebrate the beginning of your forever with warm, emotional photographs that capture your love and family joy." },
                { title: "Pre-Wedding Shoot", description: "Turn your love story into a cinematic experience with creative pre-wedding photography that’s uniquely “you.”" },
                { title: "Haldi & Mehendi", description: "From intricate henna art to heartfelt laughter, we capture every vibrant detail of your Mehendi celebrations." },
                { title: "Sangeet Night", description: "Let your dance, music, and family moments shine with our lively Sangeet photography coverage." },
              ]
            },
            {
              categoryTitle: "Wedding Day Coverage",
              icon: "Landmark",
              image: getImage('wedding-coverage'),
              list: [
                { title: "Bride & Groom Portraits", description: "Beautifully styled and natural portraits that highlight your charm, confidence, and wedding-day glow." },
                { title: "Getting Ready", description: "Candid, behind-the-scenes captures of your excitement and emotions before you say “I do.”" },
                { title: "Baraat & Grand Entry", description: "Document the energy and joy of the groom’s procession and the couple’s grand entrance in style." },
                { title: "Sacred Vows & Rituals", description: "Capture the sacred essence of your vows and every meaningful ritual with timeless wedding photography." },
              ]
            },
            {
              categoryTitle: "Family & Emotional Moments",
              icon: "Users",
              image: getImage('family-emotional'),
              list: [
                  { title: "Candid Family Moments", description: "The unscripted tears, smiles, and loving glances that happen when you think no one is watching." },
                  { title: "Group Photographs", description: "Classic portraits of your cherished friends and family, organized efficiently and beautifully." },
                  { title: "Guest Interactions", description: "The lively, celebratory mood of your guests as they mingle, laugh, and share in your happiness." },
                  { title: "Heartfelt Goodbyes", description: "Capturing the emotional essence of the Bidai or farewell, a poignant and beautiful part of the story." },
              ]
            },
            {
              categoryTitle: "Post-Wedding Celebrations",
              icon: "Star",
              image: getImage('post-wedding'),
              list: [
                { title: "Gala Reception", description: "Capturing the elegance, energy, and excitement of your first party as a married couple." },
                { title: "Post-Wedding Shoot", description: "A relaxed, romantic session after the main events, focused entirely on the two of you." },
                { title: "Bidai (Farewell)", description: "Emotional, heartfelt photographs that beautifully tell the story of this poignant goodbye." },
                { title: "Anniversary Shoots", description: "Celebrate your love story's milestones with a special photoshoot on your anniversaries." },
              ]
            },
            {
              categoryTitle: "Creative Add-Ons",
              icon: "Film",
              image: getImage('creative-add-ons'),
              list: [
                { title: "Highlight Film", description: "A cinematic summary of your wedding story, perfect for sharing with friends and family online." },
                { title: "Drone Videography", description: "Grand, aerial shots of your venue and ceremony, adding a spectacular sense of scale to your film." },
                { title: "Behind-the-Scenes", description: "A fun, candid glimpse into the making of your day, capturing the moments between the moments." },
                { title: "Instagram Reels", description: "Short, stylish edits of your best moments, perfectly formatted and ready to post on social media." },
              ]
            },
            {
              categoryTitle: "Post Deliveries",
              icon: "Gift",
              image: getImage('post-delivery'),
              list: [
                  { title: "Custom Photo Albums", description: "Work with our designers to create a stunning, lay-flat album that tells your wedding story beautifully." },
                  { title: "Mini Albums for Parents", description: "Create smaller, identical copies of your main album, a perfect and cherished gift for your parents." },
                  { title: "Online Gallery & Print Store", description: "A private, password-protected online gallery for you and your guests to view, download, and order prints." },
                  { title: "Personalized Slideshows", description: "A beautifully crafted slideshow of your best images set to music, perfect for anniversaries." }
              ]
            }
          ],
          whoIsItFor: [
            { text: "Cultural Ceremonies", image: getImage('cultural-ceremonies') },
            { text: "Destination Weddings", image: getImage('destination-weddings') },
            { text: "Engaged Couples", image: getImage('engaged-couples') },
            { text: "Event Planners", image: getImage('event-planners') }
          ],
          whyChooseUs: [
            "Experienced with multi-day, diverse cultural weddings.",
            "High-end cinematic results using top-of-the-line equipment.",
            "Dedicated two-person team ensures no moment is missed.",
            "Friendly and unobtrusive, letting you enjoy your day."
          ],
          equipment: [
              {
                  title: "High-Resolution Camera Systems",
                  description: "We use professional full-frame mirrorless cameras that excel in any lighting condition, capturing every detail with stunning clarity and rich color. Our extensive collection of prime and zoom lenses allows us to frame every moment perfectly, from epic wide-angle shots of the venue to intimate close-ups of emotional expressions.",
                  features: [
                      "Dual-camera coverage to capture multiple angles",
                      "A wide array of professional G-Master lenses",
                      "Exceptional low-light performance for candle-lit ceremonies"
                  ],
                  image: getImage('high-resolution-camera-systems')
              },
              {
                  title: "Cinematic Video & Aerials",
                  description: "Our video equipment is chosen to give your wedding film a true cinematic quality. We use gimbals for buttery-smooth moving shots, sliders for elegant pans, and drones to capture breathtaking aerial views of your venue. High-quality audio recorders ensure that vows and speeches are captured with crystal clarity.",
                  features: [
                      "Smooth, stabilized footage using 3-axis gimbals",
                      "Breathtaking 4K drone videography for epic scale",
                      "Discreet, high-quality audio recording for clear sound"
                  ],
                  image: getImage('cinematic-video-aerials')
              },
              {
                  title: "Creative Lighting & Luxury Albums",
                  description: "We bring our own portable, professional lighting to create beautiful, flattering portraits of the couple and family, regardless of the venue's lighting. After the wedding, your memories are preserved in stunning, custom-designed luxury albums, printed on archival-quality paper for a timeless keepsake.",
                  features: [
                      "Portable studio lighting for stunning portraits",
                      "Creative lighting tools for reception and sangeet events",
                      "Access to the finest luxury printed albums and wall art"
                  ],
                  image: getImage('luxury-album')
              }
          ],
          process: [
            { step: 1, title: "Meet & Plan", description: "We love to meet our couples (in person or via video call) to hear your story and understand the timeline and cultural aspects of your wedding.", icon: "Users", image: getImage('meet-and-plan') },
            { step: 2, title: "The Big Day(s)", description: "Our team provides full coverage of your events, from the Haldi and Sangeet to the ceremony and reception, capturing all the key moments and emotions.", icon: "Heart", image: getImage('the-big-days') },
            { step: 3, title: "Creative Post-Production", description: "Your photos are artfully edited, and your wedding film is crafted into a beautiful story with licensed music and professional color grading.", icon: "Wand2", image: getImage('creative-post-production') },
            { step: 4, title: "Your Wedding Story Delivered", description: "You receive a comprehensive online gallery with all your photos and videos, plus beautifully crafted albums and prints as part of our premium packages.", icon: "Gift", image: getImage('wedding-album') }
          ],
          packages: [
            { name: "Intimate Affair", price: "₹75,000", originalPrice: "₹95,000", features: ["6 Hours Coverage (Single Day)", "1 Photographer, 1 Videographer", "500+ Edited Photos", "All Raw/Unedited Photos & Video Footage", "3-5 Minute Highlight Film"] },
            { name: "Grand Celebration", price: "₹1,50,000", originalPrice: "₹1,90,000", features: ["2-Day Coverage (e.g., Sangeet + Wedding)", "2 Photographers, 2 Videographers", "All Edited Photographs", "All Raw/Unedited Photos & Video Footage", "10-15 Minute Feature Film + Teaser"] },
            { name: "The Royal Wedding", price: "₹2,50,000", originalPrice: "₹3,25,000", features: ["Up to 3 Days Coverage", "Full Photo & Video Team + Drone", "All Edited Photographs", "All Raw/Unedited Photos & Video Footage", "20-25 Minute Cinematic Film + Reels", "Luxury Wedding Album Included"] },
          ],
          faqs: [
            { question: "How far in advance should we book your wedding photography services in Mumbai?", answer: "For popular wedding dates in Mumbai, especially during peak season (October-March), we recommend booking 8-12 months in advance to secure your date." },
            { question: "What is your photography style for weddings?", answer: "We blend candid, photojournalistic storytelling with creative, cinematic portraits. Our goal is to capture the authentic emotions and atmosphere of your day while also creating stunning, artistic images of you as a couple." },
            { question: "Are you experienced with different cultural weddings like Marathi, Gujarati, or South Indian ceremonies?", answer: "Absolutely. Our team has extensive experience covering a diverse range of cultural and religious ceremonies. We understand the significance of different rituals and ensure they are captured respectfully and beautifully." },
            { question: "What are the deliverables and how long does it take to receive our wedding photos and film?", answer: "You will receive a curated gallery of high-resolution edited photos. The full set of photos is typically delivered within 4-6 weeks, while the wedding film takes about 8-10 weeks to allow for detailed editing." },
            { question: "Do you travel for destination weddings outside of Mumbai?", answer: "Yes, we love destination weddings! We have traveled across India and internationally. For destination weddings, travel and accommodation are billed at actuals, and we can create a custom package to suit your event." },
            { question: "How do you ensure our wedding data is safe?", answer: "Data safety is our top priority. We use cameras with dual card slots for instant backup, and all data is transferred to multiple hard drives immediately after the event to prevent any loss." },
            { question: "Can we customize a wedding package?", answer: "Yes. While our packages are designed to suit most needs, we are happy to create a custom wedding photography or videography package tailored to your specific events, coverage hours, and deliverables." }
          ],
          portfolio: [
            getImage('wedding-2'),
            getImage('wedding-3'),
            getImage('wedding-4'),
            getImage('wedding-5'),
            getImage('wedding-6'),
            getImage('wedding-7'),
            getImage('wedding-8'),
            getImage('wedding-9'),
            getImage('wedding-10'),
            getImage('wedding-11'),
            getImage('wedding-12'),
            getImage('wedding-13'),
            getImage('wedding-14'),
            getImage('wedding-15'),
            getImage('wedding-16'),
            getImage('wedding-17'),
            getImage('wedding-18'),
            getImage('wedding-19'),
            getImage('wedding-20'),
            getImage('wedding-21'),
            getImage('wedding-22'),
            getImage('wedding-23'),
            getImage('wedding-24'),
          ]
        }
      },
      {
        id: 'events',
        name: 'Event Photography and Videography',
        categoryName: 'Weddings & Events',
        description: 'Professional coverage for corporate functions, parties, anniversaries, and social gatherings.',
        price: 'Starting at ₹12,000',
        thumbnailImage: getImage('event-photography-1'),
        images: [getImage('event-photography-1'), getImage('event-photography-cover')],
        details: ['Candid and posed shots', 'Online gallery for guests', 'Fast turnaround time'],
        pageContent: { 
            longDescription: 'From high-profile corporate summits in BKC to intimate birthday parties in Bandra, our event photography service captures the energy and key moments of your gathering. We work discreetly and professionally to document your event without being intrusive, delivering a gallery of high-quality images that showcase the atmosphere, guests, and important details.',
            whoIsItFor: [
                { text: "Personal Celebrations", image: getImage('birthday-party') },
                { text: "Corporate Functions", image: getImage('corporate-event') },
                { text: "PR & Event Managers", image: getImage('celebrity-category') },
                { text: "Professional Planners", image: getImage('event-photography-2') }
            ],
            whyChooseUs: [
                "Versatile experience in a wide range of event types and sizes.", 
                "Fast turnaround for your PR and social media needs.", 
                "Professional, well-dressed, and unobtrusive team.",
                "Comprehensive coverage of candid moments and formal shots."
            ],
            process: [
                { step: 1, title: "Event Briefing", description: "We review the event schedule, key speakers or guests, and your specific shot list requirements.", icon: "ClipboardCheck", image: getImage('corporate-event') },
                { step: 2, title: "Event Coverage", description: "Our photographer(s) will arrive early to capture the setup and stay to document the event as it unfolds.", icon: "Camera", image: getImage('event-photography-1') },
                { step: 3, title: "Quick Selection", description: "For corporate events, we can provide a small selection of key shots on the same day for immediate press releases.", icon: "Star", image: getImage('photo-editing-1') },
                { step: 4, title: "Full Gallery Delivery", description: "The complete, edited gallery of all photographs is delivered within 2-3 business days via a private online portal.", icon: "Download", image: getImage('album-design-1') }
            ],
            packages: [
              { name: "Social Starter", price: "₹12,000", originalPrice: "₹15,000", features: ["Up to 3 Hours Coverage", "1 Photographer", "Ideal for small parties & gatherings", "All Raw/Unedited Photos Included", "150+ Edited Images"] },
              { name: "Corporate Essential", price: "₹25,000", originalPrice: "₹32,000", features: ["Up to 5 Hours Coverage", "1 Photographer, 1 Videographer", "3-min highlight video", "All Raw/Unedited Photos Included", "Priority Delivery"] },
              { name: "Gala Coverage", price: "₹50,000", originalPrice: "₹65,000", features: ["Full Day (8 hours) Coverage", "2 Photographers, 2 Videographers", "5-min cinematic film + interviews", "All Raw/Unedited Photos Included", "Live social media updates"] },
            ],
            equipment: [
                {
                    title: "Professional Lighting Setup",
                    description: "No matter the venue, we ensure every shot is perfectly lit. Our portable lighting equipment allows us to create flattering light for speakers, panelists, and guests, ensuring your event photos look polished and professional, never like a dark party with harsh flash.",
                    features: [
                        "Portable softboxes for flattering portraits and interviews",
                        "On-camera and off-camera flashes for dynamic reception shots",
                        "Creative lighting for highlighting branding and decor"
                    ],
                    image: getImage('equipment-lighting')
                },
                {
                    title: "Versatile Camera Systems",
                    description: "Our cameras are chosen for their versatility and low-light capabilities, essential for the varied environments of events. With a range of lenses, we can capture wide shots of the entire venue, medium shots of guest interactions, and tight close-ups of speakers on stage, all with crisp detail.",
                    features: [
                        "High-speed cameras to capture fast-moving moments",
                        "Wide-angle lenses to showcase the scale of your event",
                        "Telephoto lenses to capture speakers from a distance"
                    ],
                    image: getImage('equipment-cameras')
                },
                {
                    title: "Discreet Audio & Fast Delivery",
                    description: "For events with speakers or interviews, clear audio is key. We use discreet lapel microphones and professional recorders to capture every word. Our workflow is optimized for speed, allowing us to deliver key photos for press releases or social media within hours of the event concluding.",
                    features: [
                        "High-quality lapel and handheld microphones for clear sound",
                        "On-site photo selection and editing for immediate needs",
                        "Cloud-based delivery for fast access to your photos"
                    ],
                    image: getImage('equipment-audio')
                }
            ],
            eventTypes: [
              {
                categoryTitle: "Personal & Social Events",
                icon: "PartyPopper",
                image: getImage('wedding-category-prewedding'),
                list: [
                    { title: "Weddings", description: "Capturing the magic of your big day, from intimate ceremonies to grand celebrations." },
                    { title: "Anniversaries", description: "Commemorate your milestones with beautiful photos of your celebration." },
                    { title: "Birthdays", description: "From kids' parties to milestone birthdays, we capture the joy and excitement." },
                    { title: "Baby Showers", description: "Document the sweet anticipation and celebration of new life." },
                    { title: "Housewarming (Griha Pravesh)", description: "Capture the pride and happiness of moving into your new home." },
                    { title: "Family Reunions / Gatherings", description: "Create lasting memories of your family coming together." },
                    { title: "Farewell & Retirement Parties", description: "Honor a colleague or loved one with professional photo coverage." },
                    { title: "Private Parties / Social Get-togethers", description: "Discreet and candid coverage of your private social events." },
                    { title: "Proposal Shoots", description: "Capture the surprise and romance of the big question." }
                ]
              },
              {
                categoryTitle: "Corporate & Professional Events",
                icon: "Briefcase",
                image: getImage('corporate-event'),
                list: [
                    { title: "Corporate Conferences / Seminars", description: "Professional coverage of speakers, panels, and networking sessions." },
                    { title: "Product Launches", description: "High-impact photos and videos to create a buzz for your new product." },
                    { title: "Brand Activations / Promotions", description: "Capture the engagement and excitement of your brand's promotional events." },
                    { title: "Award Ceremonies / Annual Functions", description: "Document the achievements and celebrations of your organization." },
                    { title: "Exhibitions / Trade Shows", description: "Showcase your booth and interactions at major venues like Bombay Exhibition Centre." },
                    { title: "Corporate Parties / Team Outings", description: "Candid shots of your team bonding and celebrating success." },
                    { title: "Press Conferences / Media Events", description: "Professional images ready for immediate press release and media distribution." },
                    { title: "Workshops / Training Sessions", description: "Document the learning and collaboration in your professional workshops." },
                    { title: "CSR Activities / NGO Events", description: "Capture the heart and impact of your corporate social responsibility initiatives." }
                ]
              },
              {
                categoryTitle: "Entertainment & Influencer",
                icon: "Clapperboard",
                image: getImage('celebrity-category'),
                list: [
                    { title: "Celebrity Shoots & Red Carpet Events", description: "Experienced and discreet coverage for high-profile personalities." },
                    { title: "Music Video Launch Events", description: "Capture the artists, performances, and media buzz." },
                    { title: "Influencer & Creator Meetups", description: "Dynamic photos and videos that capture the energy of creator events." },
                    { title: "Film Promotions & Premieres", description: "Documenting the stars and excitement of movie launches." },
                    { title: "Behind-the-Scenes (BTS) for Film & TV", description: "Candidly capture the making of creative projects." },
                    { title: "Podcast & Talk Show Recordings", description: "Professional video and photo for your episodic content." }
                ]
              },
              {
                categoryTitle: "Cultural & Public Events",
                icon: "Landmark",
                image: getImage('event-photography-1'),
                list: [
                    { title: "Festivals & Cultural Programs", description: "Vibrant coverage of religious festivals, cultural performances, and community fairs." },
                    { title: "Concerts & Music Festivals", description: "Capture the energy of the crowd and the passion of the performers on stage." },
                    { title: "Stage Shows & Theatre Performances", description: "Theatrical photography that captures the drama and emotion of live performances." },
                    { title: "Fashion Shows & Ramp Walks", description: "High-fashion coverage of runway looks, designers, and backstage moments." },
                    { title: "Religious Ceremonies & Pujas", description: "Respectful and beautiful documentation of sacred ceremonies and rituals." },
                    { title: "Community Gatherings & Fairs", description: "Capture the spirit and engagement of local community events." }
                ]
              },
              {
                categoryTitle: "Educational & Institutional",
                icon: "GraduationCap",
                image: getImage('live-streaming-2'),
                list: [
                    { title: "School / College Annual Days", description: "Documenting student performances, awards, and the annual celebration." },
                    { title: "Graduation Ceremonies / Convocations", description: "Capture the pride and achievement of students on their graduation day." },
                    { title: "College Fests & Cultural Weeks", description: "High-energy photos and videos capturing the fun and creativity of college festivals." },
                    { title: "Workshops & Guest Lectures", description: "Professional coverage for your institution's academic and special events." },
                    { title: "Alumni Meets", description: "Capture the nostalgia and networking at your alumni reunion." }
                ]
              },
              {
                categoryTitle: "Special Interest Events",
                icon: "Star",
                image: getImage('brand-shoots-2'),
                list: [
                    { title: "Sports Tournaments & Marathons", description: "Action-packed photography that captures the competitive spirit and athleticism." },
                    { title: "Gym Launches & Fitness Challenges", description: "Dynamic visuals showcasing your new facility or fitness event." },
                    { title: "Motorsport & Adventure Events", description: "Capture the speed, thrill, and adrenaline of motorsport and adventure sports." },
                    { title: "Yoga & Wellness Retreats", description: "Serene and mindful photography for wellness and yoga events." },
                    { title: "Pet Shows & Pet Birthdays", description: "Fun and adorable photos of your furry friends at their special events." },
                    { title: "Charity Events & Fundraisers", description: "Capture the generosity and community spirit of your fundraising events." }
                ]
              }
            ],
            faqs: [
              { question: "What is your turnaround time for event photos?", answer: "For most social and corporate events in Mumbai, we deliver the fully edited photo gallery within 3-5 business days. For urgent PR needs, a select batch of highlight images can be delivered within a few hours." },
              { question: "How many photographers will cover my event?", answer: "Our standard packages include one or two photographers, which is sufficient for most events. For very large-scale events with multiple simultaneous activities, we can provide a larger team upon request." },
              { question: "Do you provide all the photos taken at the event?", answer: "Yes, our packages include all good, usable photos from the event with professional color and light correction. This typically amounts to 50-70 photos per hour of coverage." },
              { question: "Can you provide event videography as well?", answer: "Absolutely. We offer comprehensive event videography services, from a single cinematographer for basic coverage to a full team for creating cinematic highlight films, interview recordings, and social media reels." },
              { question: "What kind of corporate events do you specialize in?", answer: "We have extensive experience covering conferences, product launches, award ceremonies, exhibitions at venues like Jio World Centre, and corporate parties all across Mumbai and Thane." }
          ],
            portfolio: [
                getImage('event-photography-5'),
                getImage('event-photography-6'),
                getImage('event-photography-7'),
                getImage('event-photography-8'),
                getImage('event-photography-9'),
                getImage('event-photography-10'),
                getImage('event-photography-1'),
                getImage('event-photography-cover'),
            ]
        }
      },
       {
        id: 'live-streaming',
        name: 'Live Streaming',
        categoryName: 'Weddings & Events',
        description: 'Broadcast your event live to guests who can\'t be there in person with our professional streaming services.',
        price: 'Starting at ₹10,000',
        thumbnailImage: getImage('live-streaming-1'),
        images: [getImage('live-streaming-1'), getImage('live-streaming-2')],
        details: ['Multi-camera streaming setup', 'Professional audio', 'Broadcast to multiple platforms (YouTube, Facebook, etc.)'],
        pageContent: { 
            longDescription: 'Connect with a global audience in real-time with our professional live streaming and webcasting services in Mumbai. We ensure your weddings, corporate events, virtual gatherings, and hybrid events are broadcast flawlessly. Using the latest technology, we provide a seamless, buffer-free experience for viewers on YouTube, Facebook, Zoom, or your custom website. From single-camera setups to complex multi-camera productions, we handle all technical aspects so you can focus on your event.',
            whoIsItFor: [
                { text: "Couples & Families", image: getImage('wedding-live-stream') },
                { text: "Global Companies", image: getImage('corporate-live-stream') },
                { text: "Conference Organizers", image: getImage('live-streaming-2') },
                { text: "Virtual Gatherings", image: getImage('live-broadcast') }
            ],
            whyChooseUs: [
              "Broadcast-quality Full HD streaming.",
              "Experienced team for smooth, professional results.",
              "Custom branding and live audience interaction features.",
              "Cellular bonding for stable, buffer-free streaming."
            ],
            equipment: [
                {
                    title: "Professional-Grade Lighting Setup",
                    description: "Lighting plays a crucial role in the visual quality of any livestream or video production. At PK Photography, we use professional-grade lighting equipment to ensure every subject is well-lit, skin tones look natural, and the overall scene has a cinematic depth.",
                    features: [
                        "Soft LED panels for even, flattering light",
                        "RGB lights to enhance mood and add creative tones",
                        "Spotlights and modifiers for controlled highlights and shadows"
                    ],
                    image: getImage('equipment-lighting')
                },
                {
                    title: "Multi-Camera HD/4K Setup",
                    description: "To create a dynamic and engaging viewing experience, we utilize a multi-camera setup. This allows us to switch between different angles—like a wide shot of the stage, a close-up of the speaker, and audience reactions—giving your livestream a professional, broadcast-quality feel.",
                    features: [
                        "Multiple 4K cameras for crisp, clear video",
                        "Live switching for a seamless, TV-style production",
                        "Gimbal and slider shots for smooth, cinematic movement"
                    ],
                    image: getImage('equipment-cameras')
                },
                {
                    title: "Crystal-Clear Audio",
                    description: "Bad audio can ruin a great video. We ensure your message is heard loud and clear with our professional audio equipment. We use a combination of microphones to capture pristine sound, whether it's a single speaker, a panel discussion, or a live musical performance.",
                    features: [
                        "High-quality microphones (lapel, handheld, and condenser)",
                        "Professional audio mixers for balanced sound",
                        "Audio monitoring to prevent issues during the live event"
                    ],
                    image: getImage('equipment-audio')
                }
            ],
            process: [
                { step: 1, title: "Technical Recce & Planning", description: "We conduct a site visit to test internet speeds, plan camera placements, and finalize the audio setup.", icon: "Settings", image: getImage('live-streaming-1') },
                { step: 2, title: "Pre-Event Setup & Testing", description: "Our team arrives early to set up all equipment and run extensive tests, ensuring a perfect broadcast.", icon: "Truck", image: getImage('equipment-cameras') },
                { step: 3, title: "Live Broadcast & Monitoring", description: "During the event, a dedicated technician directs the live feed and monitors stream stability and quality.", icon: "Signal", image: getImage('live-broadcast') },
                { step: 4, title: "Recording & Delivery", description: "After the stream, we provide a high-resolution recording of the entire event for your archives or on-demand viewing.", icon: "DownloadCloud", image: getImage('video-editing-1') }
            ],
            eventTypes: [
                { 
                    categoryTitle: "Weddings",
                    icon: "Heart",
                    image: getImage('wedding-live-stream'),
                    list: [
                        { title: "Ceremony Streaming", description: "Share your sacred vows with loved ones who can't be there." },
                        { title: "Sangeet & Reception", description: "Broadcast the music, dance, and celebrations to a global audience." },
                        { title: "Pre-Wedding Events", description: "Stream your engagement, Haldi, or other ceremonies." },
                        { title: "Private Streaming Link", description: "A secure link just for your friends and family." },
                    ]
                },
                { 
                    categoryTitle: "Corporate Events",
                    icon: "Briefcase",
                    image: getImage('corporate-live-stream'),
                    list: [
                        { title: "Conferences & Summits", description: "Stream keynotes and panel discussions to a wider professional audience." },
                        { title: "Webinars & Town Halls", description: "Engage your employees or customers with interactive virtual presentations." },
                        { title: "Product Launches", description: "Create a buzz by launching your new product to a live online audience." },
                        { title: "Corporate Meetings", description: "Broadcast important internal or external corporate meetings securely." },
                        { title: "Keynote Speeches", description: "Share inspiring talks and presentations with a global audience." }
                    ]
                },
                {
                    categoryTitle: "Other Events",
                    icon: "Calendar",
                    image: getImage('live-streaming-2'),
                    list: [
                        { title: "Educational Sessions", description: "Stream workshops, lectures, and training programs." },
                        { title: "Music & Concerts", description: "Broadcast live performances to fans across the world." },
                        { title: "Sports Events", description: "Capture every moment of the game for fans who can't attend." },
                        { title: "Fashion Shows", description: "Bring the runway to a global audience with a live broadcast." },
                        { title: "Religious Ceremonies", description: "Stream services like church mass, pujas, and other ceremonies." }
                    ]
                }
            ],
            packages: [
                { name: "Basic", price: "₹10,000", originalPrice: "", features: ["Up to 2 Hours Streaming", "1 Full HD Camera", "Streaming to YouTube", "Basic Audio Setup"] },
                { name: "Standard", price: "₹20,000", originalPrice: "", features: ["Up to 3 Hours Streaming", "2 Full HD Cameras with Live Switching", "Professional Audio", "Basic Graphics & Lower Thirds"] },
                { name: "Premium", price: "₹35,000", originalPrice: "", features: ["Up to 4 Hours Streaming", "3+ Full HD Cameras", "Advanced Graphics & Branding", "Pre-event Testing", "1 Cinematic Angle with Gimbal"] },
            ],
            faqs: [
              { question: "Can we have a private live stream just for our family and friends?", answer: "Yes, we can stream to a private, unlisted YouTube link or a password-protected page that you can share exclusively with your guests." },
              { question: "What internet speed is required at the venue for a stable live stream?", answer: "A stable wired connection of at least 10-15 Mbps upload speed is ideal. However, if the venue's internet is unreliable, we use cellular bonding technology to ensure a smooth broadcast." },
              { question: "Can you display our wedding hashtag or company logo on the stream?", answer: "Absolutely. Our Standard and Premium packages include options for custom graphics, logos, lower thirds (name tags), and other branding elements to personalize your live stream." },
              { question: "How will our remote guests be able to watch the stream?", answer: "We provide you with a single, easy-to-share link. Your guests can simply click this link to watch the live event on any device, such as a phone, tablet, or smart TV, with no special software required." },
              { question: "Do we get a recording of the live stream after the event?", answer: "Yes, a high-quality recording of the entire live broadcast is included in all our packages. We provide you with a downloadable video file after the event." }
          ],
            portfolio: [
                getImage('live-streaming-1'),
                getImage('live-streaming-2'),
                getImage('wedding-live-stream'),
                getImage('corporate-live-stream'),
                getImage('corporate-event'),
                getImage('live-broadcast')
            ]
        }
      },
    ],
  },
  {
    id: 'portraiture',
    name: 'Portraiture',
    description: 'Capturing the essence of an individual or group.',
    image: getImage('portraiture-category'),
    services: [
      {
        id: 'portraits-headshots',
        name: 'Portraits & Headshots',
        categoryName: 'Portraiture',
        description: 'Personalized sessions for individuals, professionals, and artists to capture your unique personality.',
        price: 'Starting at ₹5,000',
        thumbnailImage: getImage('portraiture-category'),
        images: [getImage('personal-portrait'), getImage('headshots-portraits')],
        details: ['For individuals, actors, corporate teams', '30-minute to 1-hour sessions', 'Professional retouching', 'Studio or on-location'],
        pageContent: {
          longDescription: "In the bustling city of Mumbai, standing out is key. Our Portrait & Headshot sessions are more than just taking a picture; they're about capturing the very essence of who you are. Whether you're a professional aiming to enhance your LinkedIn profile, an actor in need of a compelling headshot, or an individual wanting to capture a personal milestone, we create images that speak volumes. We craft lighting and composition to reflect your personality, creating authentic and powerful portraits that make a lasting impression.",
          whoIsItFor: [
            { text: "LinkedIn Professionals", image: getImage('headshots-1') },
            { text: "Personal Branding", image: getImage('personal-portrait-1') },
            { text: "Actors & Models", image: getImage('portfolio-creation-1') },
            { text: "Corporate Teams", image: getImage('corporate-event') }
          ],
          whyChooseUs: [
            "We know the Mumbai market and what makes a visual identity stand out.",
            "Our collaborative sessions ensure your true personality shines through.",
            "State-of-the-art equipment and advanced retouching for a flawless finish.",
            "Each session is tailored to your specific goals and target audience."
          ],
          process: [
            { step: 1, title: "Consultation & Concept", description: "We start with a conversation to understand your vision, style, and goals. We'll plan the location, wardrobe, and overall mood for the shoot.", icon: "MessageSquare", image: getImage('headshots-2') },
            { step: 2, title: "The Photoshoot", description: "Our team will guide you through the session, helping with posing and expression to ensure you look your best and feel comfortable in front of camera.", icon: "Camera", image: getImage('personal-portrait-2') },
            { step: 3, title: "Selection & Retouching", description: "After the shoot, you'll receive a gallery of proofs to select your favorite images. Our expert retouchers will then perfect your chosen shots.", icon: "Wand2", image: getImage('photo-editing-1') },
            { step: 4, title: "Final Delivery", description: "You'll receive your final, high-resolution digital images through a private online gallery, ready to be used for your website, social media, or prints.", icon: "Download", image: getImage('album-design-1') }
          ],
          packages: [
            { name: "The Professional", price: "₹5,000", originalPrice: "₹8,000", features: ["1-Hour Session", "2 Looks/Outfits", "5 High-End Retouched Images", "All Raw/Unedited Photos Included", "Studio Session"] },
            { name: "The Executive", price: "₹10,000", originalPrice: "₹15,000", features: ["2-Hour Session", "Up to 4 Looks", "12 High-End Retouched Images", "All Raw/Unedited Photos Included", "Priority Editing Turnaround"] },
            { name: "The Personal Brand", price: "₹15,000", originalPrice: "₹25,000", features: ["Half-Day Session (4 hours)", "Unlimited Looks", "25 High-End Retouched Images", "All Raw/Unedited Photos Included", "Priority Editing Turnaround"] }
          ],
          customPackage: { name: "Corporate & Institutional", price: "Contact for Quote", features: ["Custom packages for teams and organizations", "On-location or in-studio shoots", "Consistent, professional headshots for your entire team", "Group discounts available"] },
          faqs: [
            { question: "What should I wear for my professional headshot session in Mumbai?", answer: "We recommend solid, professional attire that makes you feel confident. For corporate headshots, this is usually business formals. We provide a detailed style guide before your session to help you prepare." },
            { question: "How is a portrait different from a headshot?", answer: "A headshot is typically a tighter shot focusing on the face, used for professional profiles like LinkedIn or actor portfolios. A portrait is broader and can be full-body or environmental, aiming to capture personality and tell a story." },
            { question: "Do you offer on-location shoots in Mumbai for portraits?", answer: "Absolutely! On-location shoots are a great way to capture environmental portraits. We can shoot at your office, a favorite outdoor spot, or any location in the Mumbai area that reflects your personality or brand. Travel fees may apply for distant locations." },
            { question: "Do you provide hair and makeup services?", answer: "Yes, we work with a team of talented hair and makeup artists in Mumbai. Professional grooming is highly recommended for best results and can be added to any package for an additional fee." },
            { question: "How long does it take to receive the final retouched photos?", answer: "Our standard turnaround time is 7-10 business days after you have made your final selections from the proofing gallery. Expedited delivery is available with certain packages." }
          ],
          portfolio: [
            getImage('personal-portraits-1'), 
            getImage('personal-portraits-2'),
            getImage('personal-portraits-3'), 
            getImage('personal-portraits-4'),
            getImage('personal-portraits-5'), 
            getImage('personal-portraits-6'),
            getImage('personal-portraits-7'), 
            getImage('personal-portraits-8'),
            getImage('personal-portraits-9'), 
            getImage('personal-portraits-10'),
            getImage('personal-portraits-11'), 
            getImage('personal-portraits-12'),
            getImage('personal-portraits-13'), 
            getImage('personal-portraits-14'),
            getImage('personal-portraits-15'), 
            getImage('personal-portraits-16'),
            getImage('personal-portraits-17'),
            getImage('personal-portraits-18'), 
            getImage('personal-portraits-19'),
            getImage('personal-portraits-20'),
          ]
        }
      },
      {
        id: 'family-kids',
        name: 'Family & Kids',
        categoryName: 'Portraiture',
        description: 'Create lasting memories with your loved ones, from family gatherings to capturing precious childhood moments.',
        price: 'Starting at ₹8,000',
        thumbnailImage: getImage('family-portrait-1'),
        images: [getImage('family-cover'), getImage('baby-kids')],
        details: ['1-hour+ sessions', 'Up to 6 people (custom for more)', '20+ professionally edited photos', 'Fun and relaxed atmosphere'],
        pageContent: {
          longDescription: "Childhood is fleeting, and family moments are precious. Our Family & Kids photography sessions in Mumbai are designed to capture the authentic love, laughter, and connection you share. We create a relaxed and playful environment where children can be themselves and families can interact naturally. From the sunny beaches of Juhu to the lush greenery of Sanjay Gandhi National Park, we'll find the perfect backdrop for your family's story, creating timeless heirlooms you'll cherish for generations.",
          whoIsItFor: [
            { text: "New Parents", image: getImage('baby-kids-1') },
            { text: "Growing Families", image: getImage('family-portrait-1') },
            { text: "Multi-Generational", image: getImage('family-portrait-2') },
            { text: "Family Milestones", image: getImage('events-category') }
          ],
          whyChooseUs: [
            "Experienced in working with children of all ages.",
            "Focus on candid, emotional moments, not stiff poses.",
            "Knowledge of the best family-friendly locations in Mumbai.",
            "Safety and comfort of your family is our top priority."
          ],
          process: [
            { step: 1, title: "Planning the Session", description: "We'll discuss your family's personality, choose a location that you love, and plan outfits that will look great together.", icon: "Calendar", image: getImage('family-portrait-2') },
            { step: 2, title: "The Fun Photoshoot", description: "This is where the magic happens! We'll play games, share laughs, and capture the genuine interactions that make your family unique.", icon: "Laugh", image: getImage('baby-kids-2') },
            { step: 3, title: "Artful Editing", description: "Each photo is carefully selected and professionally edited to enhance its natural beauty, color, and light.", icon: "Palette", image: getImage('photo-editing-1') },
            { step: 4, title: "Your Family Gallery", description: "You'll receive a private online gallery with your beautiful, high-resolution images, ready to download, print, and share.", icon: "Image", image: getImage('album-design-2') }
          ],
          packages: [
            { name: "The Keepsake", price: "₹8,000", originalPrice: "₹12,000", features: ["1-Hour Session at a chosen location", "Up to 5 members", "20 Edited High-Resolution Images", "All Raw/Unedited Photos Included", "Private Online Gallery"] },
            { name: "The Heirloom", price: "₹15,000", originalPrice: "₹22,000", features: ["2-Hour Session, multiple looks", "Up to 8 members", "40 Edited High-Resolution Images", "All Raw/Unedited Photos Included", "Includes a beautiful 10-page layflat album"] },
            { name: "The Generation", price: "₹20,000", originalPrice: "₹35,000", features: ["Up to 3 Hours", "Unlimited members", "75+ Edited Images", "All Raw/Unedited Photos Included", "Premium 20-page album & canvas print"] },
          ],
          faqs: [
            { question: "What are the best locations in Mumbai for a family photoshoot?", answer: "We love shooting at locations like Hanging Gardens, Sanjay Gandhi National Park, or the beaches in Juhu and Aksa for their beautiful natural light. We can also do a comfortable session at your home." },
            { question: "What is the best time of day for a family shoot with kids?", answer: "The 'golden hours'—early morning or late afternoon—provide the most beautiful light. More importantly, we schedule the session around your children's happiest time of day, usually after a nap and a snack!" },
            { question: "What should our family wear for the photoshoot?", answer: "We recommend coordinating colors without being too 'matchy-matchy'. Choose 2-3 complementary colors and mix in neutrals. Most importantly, wear something comfortable that reflects your family's style. We provide a style guide to help you choose." },
            { question: "What happens if my child is not in the mood during the shoot?", answer: "It happens! We are very patient and experienced with children. We'll take breaks, play games, and create a fun, low-pressure environment. Our candid approach means we can capture beautiful moments even when kids are just being kids." },
            { question: "Can we include our pet in the family photos?", answer: "Absolutely! Pets are part of the family, and we'd love to include them in your session. Just let us know in advance so we can plan accordingly and choose a pet-friendly location." }
          ],
          portfolio: [
            getImage('baby-kids-photo-1'),
            getImage('baby-kids-photo-2'),
            getImage('baby-kids-photo-3'),
            getImage('baby-kids-photo-4'),
            getImage('baby-kids-photo-5'),
            getImage('baby-kids-photo-6'),
            getImage('baby-kids-photo-7'),
            getImage('baby-kids-photo-8'),
            getImage('baby-kids-photo-9'),
            getImage('baby-kids-photo-10'),
            getImage('baby-kids-photo-11'),
            getImage('baby-kids-photo-12'),
            getImage('baby-kids-photo-13')
          ]
        }
      },
    ],
  },
  {
    id: 'fashion-editorial',
    name: 'Fashion & Editorial',
    description: 'Creative and compelling imagery for fashion brands, publications, and talent.',
    image: getImage('fashion-category'),
    services: [
      {
        id: 'fashion-shoots',
        name: 'Fashion Shoots & Lookbooks',
        categoryName: 'Fashion & Editorial',
        description: 'High-quality fashion photography and videography for your brand, portfolio, or lookbook.',
        price: 'Starting at ₹20,000',
        thumbnailImage: getImage('fashion-category'),
        images: [getImage('fashion-shoots-1'), getImage('fashion-shoots-about')],
        details: ['Half-day or full-day rates', 'Concept development & styling assistance', 'Advanced retouching', 'Photo & video packages'],
        pageContent: {
          longDescription: "In the competitive fashion landscape of Mumbai, powerful imagery is not a luxury—it's a necessity. Our fashion photography and lookbook services are designed to make your collection stand out. We collaborate with brands and designers to create visually stunning narratives that resonate with your target audience. From edgy street style in Bandra to elegant shoots in South Mumbai, we bring your creative vision to life with technical precision and artistic flair.",
          whoIsItFor: [
            { text: "Fashion Designers", image: getImage('fashion-shoots-1') },
            { text: "E-commerce Brands", image: getImage('ecommerce-photography-1') },
            { text: "Stylists & Models", image: getImage('portfolio-creation-1') },
            { text: "Marketing Agencies", image: getImage('brand-shoots-2') }
          ],
          whyChooseUs: [
            "Deep understanding of fashion trends and art direction.",
            "Extensive network of models, stylists, and MUAs in Mumbai.",
            "Complete solution, from concept to post-production.",
            "Commercially successful and editorially acclaimed imagery."
          ],
          process: [
            { step: 1, title: "Creative Briefing", description: "We dive deep into your brand identity, collection theme, and campaign goals to develop a unique visual concept.", icon: "Lightbulb", image: getImage('fashion-shoots-2') },
            { step: 2, title: "Pre-Production", description: "This phase includes casting models, scouting locations in and around Mumbai, and finalizing styling and shot lists.", icon: "ClipboardList", image: getImage('celebrity-category') },
            { step: 3, title: "Full-Day Shoot", description: "With a professional team, we execute the vision, focusing on capturing a wide range of compelling images and video content.", icon: "Video", image: getImage('fashion-category') },
            { step: 4, title: "Post-Production & Delivery", description: "We provide high-end retouching, color grading, and video editing to deliver a polished final package ready for publication and marketing.", icon: "Sparkles", image: getImage('photo-editing-1') }
          ],
          packages: [
            { name: "Lookbook Essentials", price: "₹20,000", originalPrice: "₹30,000", features: ["Half-Day Shoot (4 hours)", "Up to 15 Looks", "50+ Edited Images", "All Raw/Unedited Photos Included", "Studio & Basic Lighting Included"] },
            { name: "Campaign Pro", price: "₹45,000", originalPrice: "₹60,000", features: ["Full-Day Shoot (8 hours)", "Full Creative Direction", "100+ Edited Images & 30-sec video", "All Raw/Unedited Photos Included", "Advanced Lighting & Location Scouting"] },
            { name: "Brand Launch", price: "₹90,000", originalPrice: "₹1,20,000", features: ["Multi-Day Shoot", "Complete Production Management", "Extensive Image/Video Library", "All Raw/Unedited Photos Included", "Includes Behind-the-Scenes Content"] },
          ],
          faqs: [
            { question: "Can you help with finding models, stylists, and makeup artists in Mumbai?", answer: "Yes, we have a strong network of professional models, stylists, and MUAs in the Mumbai fashion industry. We can manage the entire casting and crewing process for your shoot." },
            { question: "What is the difference between a lookbook and a campaign shoot?", answer: "A lookbook is typically focused on clearly showcasing each piece in a collection. A campaign shoot is more about storytelling and creating aspirational, emotionally resonant images that define the brand for the season." },
            { question: "What is the typical turnaround time for a fashion lookbook?", answer: "Turnaround depends on the scale of the project, but we typically deliver final retouched images within 10-14 business days after the shoot." },
            { question: "Do you shoot on location or in a studio?", answer: "Both! We can shoot in our fully-equipped partner studio in Mumbai, which is great for controlled lighting, or we can scout the perfect outdoor or indoor location to match your brand's aesthetic." },
            { question: "Are video services included in the fashion packages?", answer: "Our 'Campaign Pro' and 'Brand Launch' packages include video deliverables. We can also add video services, such as a fashion film or social media reels, to any package as a custom add-on." }
          ],
          portfolio: [
            getImage('fashion-shoots-about-1'),
            getImage('fashion-shoots-about-2'),
            getImage('fashion-shoots-about-3'),
            getImage('fashion-shoots-about-4'),
            getImage('fashion-shoots-about-5'),
            getImage('fashion-shoots-about-6'),
            getImage('fashion-shoots-about-7'),
            getImage('fashion-shoots-about-8'),
            getImage('fashion-shoots-about-9')
          ]
        }
      },
      {
        id: 'editorial-portfolio',
        name: 'Editorial & Portfolio',
        categoryName: 'Fashion & Editorial',
        description: 'Story-driven visuals for publication or building a stunning portfolio to showcase your talent as an artist.',
        price: 'Starting at ₹12,000',
        thumbnailImage: getImage('portfolio-creation-1'),
        images: [getImage('magazine-editorial'), getImage('portfolio-creations')],
        details: ['Collaboration with creative teams', 'Multiple looks and locations', 'Guidance on posing and expression'],
        pageContent: { 
            longDescription: 'Create a powerful narrative with our Editorial & Portfolio sessions. Designed for models, artists, and influencers in Mumbai, we help you build a collection of images that showcases your versatility and talent. We collaborate with you to develop concepts that align with your brand, producing high-impact visuals ready for magazine submissions, agency applications, or social media dominance.',
            whoIsItFor: [
                { text: "Aspiring Models", image: getImage('portfolio-creation-1') },
                { text: "Professional Actors", image: getImage('headshots-2') },
                { text: "Content Influencers", image: getImage('influencer-content-1') },
                { text: "Artists & Designers", image: getImage('personal-portrait-1') }
            ],
            whyChooseUs: [
                "Strong connections with Mumbai's fashion industry.",
                "Expertise in telling compelling stories through visuals.",
                "Collaborative approach to concept development.",
                "High-end retouching for a professional, polished finish."
            ],
            process: [
                { step: 1, title: "Vision Casting", description: "We brainstorm ideas, moods, and stories you want to tell with your portfolio.", icon: "Lightbulb", image: getImage('fashion-shoots-2') },
                { step: 2, title: "Pre-Production", description: "We coordinate with stylists, MUAs, and scout locations across Mumbai to bring the concepts to life.", icon: "ClipboardList", image: getImage('celebrity-category') },
                { step: 3, title: "The Shoot", description: "A dynamic session where we capture a range of expressions, poses, and styles.", icon: "Camera", image: getImage('fashion-shoots-1') },
                { step: 4, title: "Curation & Delivery", description: "We help you select the strongest images and provide expert retouching before delivering your final portfolio.", icon: "Sparkles", image: getImage('photo-editing-1') }
            ],
            packages: [
                { name: "Portfolio Starter", price: "₹12,000", originalPrice: "₹18,000", features: ["2-Hour Session", "3 Looks", "10 Retouched Images", "All Raw/Unedited Photos Included"] },
                { name: "Model Pro", price: "₹25,000", originalPrice: "₹35,000", features: ["Half-Day (4-hour) Session", "5 Looks", "20 Retouched Images", "All Raw/Unedited Photos Included", "Collaboration with a stylist"] },
                { name: "Editorial Feature", price: "₹45,000", originalPrice: "₹60,000", features: ["Full-Day (8-hour) Session", "Unlimited Looks", "35+ Retouched Images", "All Raw/Unedited Photos Included", "Full creative team (Stylist, MUA)"] },
            ],
            faqs: [
              { question: "I'm a new model in Mumbai. Can you help me build my first portfolio?", answer: "Absolutely. Our 'Portfolio Starter' package is designed for new talent. We provide expert guidance on posing and expression to help you feel comfortable and capture a range of looks that agencies want to see." },
              { question: "What kind of shots are included in a model portfolio package?", answer: "A strong portfolio shows versatility. We aim to capture a mix of commercial and editorial shots, including clean headshots, full-length body shots, and more creative, expressive images." },
              { question: "Can these photos be used for magazine submissions?", answer: "Yes, our editorial quality is suitable for both online and print publications. We can shoot according to specific submission guidelines if you have them." },
              { question: "How important is a professional stylist and makeup artist?", answer: "They are crucial for a high-quality shoot. A professional stylist elevates the wardrobe, while a makeup artist ensures you look flawless on camera under professional lighting. Our Pro and Feature packages include these services." },
              { question: "Do I get to choose the final images for retouching?", answer: "Yes. After the shoot, we will provide you with a proofing gallery of the best images. You can then select your favorites for final high-end retouching." }
            ],
            portfolio: [
                getImage('magazine-editorials-1'),
                getImage('magazine-editorials-2'),
                getImage('magazine-editorials-3'),
                getImage('magazine-editorials-4'),
                getImage('magazine-editorials-5'),
                getImage('magazine-editorials-6'),
                getImage('magazine-editorials-7'),
                getImage('magazine-editorials-8'),
                getImage('magazine-editorials-9'),
                getImage('magazine-editorials-10'),
                getImage('magazine-editorials-11'),
                getImage('magazine-editorials-12'),
            ]
        }
      },
      {
        id: 'boudoir-shoots',
        name: 'Boudoir Shoots',
        categoryName: 'Fashion & Editorial',
        description: 'Empowering and intimate photography sessions that celebrate you in a private, comfortable setting.',
        price: 'Starting at ₹15,000',
        thumbnailImage: getImage('boudoir-shoots-thumbnail'),
        images: [getImage('boudoir-shoots-cover'), getImage('boudoir-shoots-about')],
        details: ['Private and comfortable setting', 'Professional hair and makeup optional', 'Discreet and tasteful editing'],
        pageContent: { 
            longDescription: 'Celebrate yourself with a boudoir photography session in our private and secure Mumbai studio. Our all-female team creates a comfortable and empowering environment where you can explore your sensuality and confidence. These sessions are a beautiful gift to yourself or a partner, resulting in tasteful, artistic, and intimate portraits that you will treasure.',
            whoIsItFor: [
              { text: "A Gift", image: getImage('boudoir-shoots-1') },
              { text: "Celebrate Yourself", image: getImage('sensual-portrait') },
              { text: "Boost Confidence", image: getImage('personal-portrait-2') },
              { text: "Artistic Portraits", image: getImage('elegant-boudoir') }
            ],
            whyChooseUs: [
                "Our all-female team ensures your comfort and privacy.",
                "Focus on elegant, natural, and empowering imagery.",
                "Expert guidance on posing to flatter your unique body type.",
                "Absolute discretion and professionalism are guaranteed."
            ],
            process: [
                { step: 1, title: "Pre-Session Consultation", description: "A private chat to discuss your comfort level, style preferences, and the overall mood you want to create.", icon: "Lock", image: getImage('boudoir-shoots-2') },
                { step: 2, title: "Pampering & Prep", description: "You'll be treated to professional hair and makeup (optional) to help you look and feel your absolute best.", icon: "Brush", image: getImage('headshots-2') },
                { step: 3, title: "The Private Photoshoot", description: "Our photographer will guide you through elegant poses in a relaxed and supportive environment.", icon: "Heart", image: getImage('boudoir-shoots-1') },
                { step: 4, title: "Discreet Viewing & Delivery", description: "You'll view your images in a private session and select your favorites for tasteful retouching. Final images are delivered securely.", icon: "Package", image: getImage('album-design-1') }
            ],
            packages: [
                { name: "The Classic", price: "₹15,000", originalPrice: "₹20,000", features: ["90-Minute Session", "3 Outfits", "10 Retouched Images", "All Raw/Unedited Photos Included", "Password-Protected Gallery"] },
                { name: "The Luxe", price: "₹25,000", originalPrice: "₹38,000", features: ["3-Hour Session", "5 Outfits", "20 Retouched Images + Mini Album", "All Raw/Unedited Photos Included"] },
                { name: "The Empress", price: "₹40,000", originalPrice: "₹70,000", features: ["6-7 Hours Experience", "Unlimited Outfits", "Professional Hair & Makeup", "40 Retouched Images + Luxury Album", "All Raw/Unedited Photos Included", "Champagne & Refreshments"] },
            ],
            faqs: [
              { question: "I'm nervous about a boudoir shoot. How do you help clients feel comfortable?", answer: "Your comfort is our absolute priority. Our sessions are led by an all-female team in a private, secure studio. We start slow, provide expert posing guidance, and create a supportive, fun atmosphere where you're in complete control." },
              { question: "Will my boudoir photos be shared online?", answer: "Absolutely not. We have a strict privacy policy. No images from your boudoir session are ever shared online or anywhere else without your explicit, written consent. Your privacy is guaranteed." },
              { question: "What should I bring for my boudoir photoshoot?", answer: "We recommend bringing a few outfits you feel confident and beautiful in. This can include lingerie, oversized shirts, robes, or your partner's favorite shirt. We'll send you a detailed preparation guide to help you plan." },
              { question: "Do you provide hair and makeup?", answer: "Professional hair and makeup is highly recommended to enhance your experience and the final photos. It's included in our 'Empress' package and can be added to any other package." },
              { question: "Who is a boudoir shoot for?", answer: "It's for everyone! It's a powerful way to celebrate your body, a milestone, or your relationship. Many clients do it as a personal confidence boost, while others create a beautiful, intimate gift for a partner." }
            ],
            portfolio: [
              getImage('boudoir-shoots-image-1'),
              getImage('boudoir-shoots-image-2'),
              getImage('boudoir-shoots-image-3'),
              getImage('boudoir-shoots-image-4'),
              getImage('boudoir-shoots-image-5'),
              getImage('boudoir-shoots-image-6'),
              getImage('boudoir-shoots-image-7'),
              getImage('boudoir-shoots-image-8'),
              getImage('boudoir-shoots-image-9'),
              getImage('boudoir-shoots-image-10'),
              getImage('boudoir-shoots-image-11'),
              getImage('boudoir-shoots-image-12')
            ]
        }
      },
    ],
  },
  {
    id: 'commercial-brands',
    name: 'Commercial & Brands',
    description: 'High-impact imagery to elevate your brand.',
    image: getImage('commercial-category'),
    services: [
      {
        id: 'brand-content',
        name: 'Brand & Content',
        categoryName: 'Commercial & Brands',
        description: 'Visual content that tells your brand\'s story, perfect for websites, social media, and marketing campaigns.',
        price: 'Starting at ₹25,000',
        thumbnailImage: getImage('brand-shoots-1'),
        images: [getImage('brand-shoots-1'), getImage('brand-shoots-2')],
        details: ['Brand consultation', 'Lifestyle and product shots', 'Content for web and social media (photo/video)'],
        pageContent: { 
            longDescription: 'In today\'s visual-first world, compelling brand content is crucial. We partner with businesses in Mumbai to create a cohesive library of images and videos that tell your brand’s story, connect with your audience, and drive engagement. From lifestyle shots that show your product in action to behind-the-scenes content that builds trust, we produce visuals tailored for your website, social media, and marketing campaigns.',
            whoIsItFor: [
                { text: "Startups & SMBs", image: getImage('brand-shoots-1') },
                { text: "Restaurants & Hotels", image: getImage('food-photography-1') },
                { text: "Service Professionals", image: getImage('headshots-1') },
                { text: "Marketing Agencies", image: getImage('brand-shoots-2') }
            ],
            whyChooseUs: [
                "Strategy-first approach to meet marketing goals.",
                "Efficient high-volume content production for social media.",
                "Both photo and video for a cohesive visual identity.",
                "Experience with a diverse range of industries."
            ],
            process: [
                { step: 1, title: "Brand Deep Dive", description: "We start with a workshop to understand your brand's voice, target audience, and content needs.", icon: "Search", image: getImage('brand-shoots-2') },
                { step: 2, title: "Content Strategy & Planning", description: "We develop a shot list and content plan designed to meet your specific marketing objectives.", icon: "ClipboardCheck", image: getImage('design-service-2') },
                { step: 3, title: "Content Creation Day", description: "We execute the shoot efficiently, capturing a variety of photo and video assets.", icon: "Camera", image: getImage('brand-shoots-1') },
                { step: 4, title: "Delivery & Content Bank", description: "You receive a fully edited bank of content, organized and ready for you to post across your platforms.", icon: "Archive", image: getImage('album-design-1') }
            ],
            packages: [
                { name: "Social Starter", price: "₹25,000", originalPrice: "₹35,000", features: ["Half-Day Shoot", "Content for 1-month social media", "30+ Edited Images", "All Raw/Unedited Photos Included", "5 short-form videos (Reels/Shorts)"] },
                { name: "Brand Essential", price: "₹55,000", originalPrice: "₹75,000", features: ["Full-Day Shoot", "Content for 3-months social media", "100+ Edited Images", "All Raw/Unedited Photos Included", "15 short-form videos + 1 brand film"] },
                { name: "Content Partnership", price: "Contact for Quote", features: ["Monthly or Quarterly Retainer", "Ongoing Content Creation", "Strategy & Planning Included", "All Raw/Unedited Photos Included", "Priority Support"] }
            ],
            faqs: [
              { question: "What kind of ROI can I expect from professional brand content?", answer: "Professional content builds brand credibility, increases social media engagement, and improves conversion rates on your website. It's an investment in how customers perceive your brand's quality and trustworthiness." },
              { question: "How much content can you create in a half-day shoot?", answer: "With a clear strategy, a half-day shoot can generate a substantial content bank. This often includes enough unique photos and video clips for over a month of consistent social media posts, plus hero images for your website." },
              { question: "Do you help with content strategy and planning?", answer: "Yes, our process begins with a 'Brand Deep Dive' to understand your goals. We then help you build a content plan and shot list that ensures the visuals we create will directly support your marketing objectives." },
              { question: "Can you create content for different platforms like Instagram, LinkedIn, and websites?", answer: "Absolutely. We shoot and edit content with different platforms in mind, providing vertically-oriented videos for Reels/Shorts, professional images for LinkedIn, and high-resolution banners for your website." },
              { question: "We are a service-based business, not a product. How can you help us?", answer: "For service businesses, we focus on creating professional portraits, 'behind-the-scenes' content of your process, client testimonials, and lifestyle images that communicate your brand's values and expertise." }
            ],
            portfolio: [
                getImage('brand-shoots-1'),
                getImage('brand-shoots-2'),
                getImage('product-photography-1'),
                getImage('influencer-content-1'),
                getImage('commercial-category'),
                getImage('real-estate-1')
            ]
        }
      },
      {
        id: 'product-ecommerce',
        name: 'Product & E-Commerce',
        categoryName: 'Commercial & Brands',
        description: 'Crisp, clean, and consistent images of your products for your online store, catalog, or marketplace.',
        price: 'Starting at ₹500/photo',
        thumbnailImage: getImage('product-photography-1'),
        images: [getImage('ecommerce-photography-1'), getImage('ecommerce-photography-2')],
        details: ['Studio shots with uniform background', 'Ghost mannequin or flat lay', 'Optimized for web & bulk discounts'],
        pageContent: {
          longDescription: "In the digital marketplace, your product's first impression is everything. Our Product & E-commerce Photography service, based in Mumbai, provides clean, crisp, and compelling images that drive sales. We specialize in creating consistent, high-quality photos for your online store, Amazon listings, or print catalogs. From simple white-background shots to creative flat lays and lifestyle contexts, we make your products look irresistible.",
          whoIsItFor: [
            { text: "E-commerce Stores", image: getImage('ecommerce-photography-1') },
            { text: "Amazon & Flipkart", image: getImage('ecommerce-photography-2') },
            { text: "New Product Startups", image: getImage('product-photography-1') },
            { text: "Restaurants & Cafes", image: getImage('food-photography-1') }
          ],
          whyChooseUs: [
            "Sharp, color-accurate images optimized for fast web loading.",
            "Quick turnaround time, even for large batches of products.",
            "Proficient in multiple styles: white background, lifestyle, macro.",
            "Competitive pricing with attractive bulk discounts for large orders."
          ],
          process: [
            { step: 1, title: "Product & Brief", description: "You can ship your products to our Mumbai studio or we can arrange a pickup. We'll discuss the shot list and style guidelines.", icon: "Package", image: getImage('product-photography-2') },
            { step: 2, title: "Studio Photoshoot", description: "Our team meticulously styles, lights, and photographs each product according to the brief, ensuring consistency and quality.", icon: "Camera", image: getImage('product-photography-1') },
            { step: 3, title: "Editing & Optimization", description: "Images are professionally retouched to remove imperfections and are optimized for fast loading on e-commerce platforms.", icon: "Wand2", image: getImage('photo-editing-1') },
            { step: 4, title: "Delivery & Revisions", description: "Your final images are delivered via a secure online gallery. We offer a round of revisions to ensure you're 100% satisfied.", icon: "CheckCircle", image: getImage('album-design-1') }
          ],
          packages: [
            { name: "E-commerce Starter", price: "₹7,500", originalPrice: "₹10,000", features: ["Up to 10 Products", "2 Photos per Product (White Background)", "All Raw/Unedited Photos Included", "Basic Retouching", "Web-Optimized Files"] },
            { name: "Brand Builder", price: "₹20,000", originalPrice: "₹28,000", features: ["Up to 25 Products", "4 Photos per Product (Mixed Styles)", "All Raw/Unedited Photos Included", "Advanced Retouching", "Includes Lifestyle & Flat Lay Shots"] },
            { name: "Enterprise", price: "Contact for Quote", features: ["50+ Products", "Custom Shot List & Creative Direction", "All Raw/Unedited Photos Included", "360° Photography (Optional)", "Dedicated Account Manager"] }
          ],
          faqs: [
            { question: "What is your turnaround time for e-commerce product photos?", answer: "For our E-commerce Starter pack with up to 10 products, the typical turnaround is 3-5 business days after we receive the products at our Mumbai studio." },
            { question: "Can you shoot on a pure white background for Amazon/Flipkart?", answer: "Yes, we specialize in shooting on a pure white background (RGB 255,255,255) that meets the marketplace requirements for platforms like Amazon and Flipkart." },
            { question: "Do you also create lifestyle product photos?", answer: "Absolutely. Our 'Brand Builder' package includes lifestyle shots where we place your product in a contextually relevant setting to show it in use, which can significantly increase conversion rates." },
            { question: "How do we get the products to you?", answer: "You can ship your products directly to our studio in Mumbai. For local clients, we can also arrange for a pickup for a nominal fee. Once the shoot is complete, we will coordinate the return of the products." },
            { question: "Do you offer 360° product photography?", answer: "Yes, 360° photography is available as part of our 'Enterprise' package or as an add-on. It's an excellent tool for showcasing products like shoes, electronics, and bags from all angles." }
          ],
          portfolio: [
            getImage('product-photography-1'),
            getImage('ecommerce-photography-1'),
            getImage('product-photography-2'),
            getImage('ecommerce-photography-2'),
            getImage('brand-shoots-1'),
            getImage('commercial-category')
          ]
        }
      },
      {
        id: 'food-photography',
        name: 'Food Photography',
        categoryName: 'Commercial & Brands',
        description: 'Mouth-watering photos for restaurants, menus, and social media that make your dishes look delicious.',
        price: 'Starting at ₹10,000',
        thumbnailImage: getImage('food-photography-2'),
        images: [getImage('food-photography-1'), getImage('food-photography-2')],
        details: ['On-location at your restaurant', 'Menu, social media, and advertising shots', 'Styling and prop sourcing available'],
        pageContent: {
          longDescription: "In the vibrant food scene of Mumbai, delicious food deserves stunning photography. Our Food Photography service is dedicated to making your culinary creations leap off the page (or screen). We style and capture images that are not just pictures of food, but an invitation to a sensory experience. From sizzling action shots to perfectly composed flat lays, we create visuals that drive footfall for restaurants and clicks for delivery platforms.",
          whoIsItFor: [
            { text: "Restaurants & Cafes", image: getImage('food-photography-1') },
            { text: "Cloud Kitchens", image: getImage('food-portfolio-4') },
            { text: "Food Bloggers", image: getImage('food-portfolio-3') },
            { text: "FMCG Brands", image: getImage('product-photography-1') }
          ],
          whyChooseUs: [
            "Deep understanding of food styling to make your food look its best.",
            "Quick and efficient on-site shoots to minimize disruption.",
            "Images are crafted to meet business objectives and drive sales.",
            "Extensive experience shooting a wide range of cuisines."
          ],
          process: [
            { step: 1, title: "Menu & Style Discussion", description: "We discuss your key dishes, brand aesthetic, and where the images will be used to create a tailored shot list.", icon: "BookOpen", image: getImage('food-portfolio-1') },
            { step: 2, title: "On-Site Photoshoot", description: "Our team sets up a mini-studio at your location, working with your chefs to photograph dishes as they are prepared for maximum freshness.", icon: "ChefHat", image: getImage('food-photography-2') },
            { step: 3, title: "Gourmet Post-Production", description: "Each photo is meticulously edited to enhance colors, textures, and details, making the food look absolutely delicious.", icon: "Sparkles", image: getImage('photo-editing-1') },
            { step: 4, title: "Delivery of Your Visual Feast", description: "You receive a gallery of high-resolution, professionally edited images ready for use on menus, social media, and websites.", icon: "Utensils", image: getImage('album-design-1') }
          ],
          packages: [
            { name: "The Taster", price: "₹10,000", originalPrice: "₹15,000", features: ["2-Hour Session", "Up to 10 Dishes", "30+ Edited Images", "All Raw/Unedited Photos Included", "Ideal for Social Media & Zomato"] },
            { name: "The Main Course", price: "₹25,000", originalPrice: "₹35,000", features: ["Half-Day Shoot (4 hours)", "Up to 25 Dishes", "75+ Edited Images", "All Raw/Unedited Photos Included", "Includes Food Styling Consultation"] },
            { name: "The Full Menu", price: "Contact for Quote", features: ["Full-Day Shoot", "Complete Menu Coverage", "All Raw/Unedited Photos Included", "Includes Lifestyle & Ambiance Shots", "Video snippets for social media"] }
          ],
          faqs: [
            { question: "Do you provide food styling services with your packages?", answer: "Yes, our 'Main Course' package includes a consultation with a food stylist. For other packages, we can add a professional food stylist to ensure every dish looks picture-perfect for an additional fee." },
            { question: "Should we prepare the food in advance of the shoot?", answer: "For maximum freshness and appeal, it's best to prepare the dishes just before they are to be photographed. Our team will coordinate with your kitchen staff to establish a smooth workflow during the shoot." },
            { question: "Our restaurant in Mumbai has specific decor. Can you capture the ambiance?", answer: "Absolutely. We believe capturing the ambiance is just as important. Our 'Full Menu' package includes lifestyle and ambiance shots to showcase not just the food, but the entire dining experience." },
            { question: "How long does it take to get the final food photos?", answer: "We understand the fast-paced nature of the food industry. Our standard turnaround for food photography is quick, typically 3-5 business days." },
            { question: "Can you create videos or Reels for our restaurant's social media?", answer: "Yes, we can create engaging short-form videos, such as preparation shots, sizzlers, or cinematic clips of your dishes, which are perfect for Instagram Reels and other social media platforms. This is included in 'The Full Menu' package or as an add-on." }
          ],
          portfolio: [
            getImage('food-photography-1'),
            getImage('food-photography-2'),
            getImage('food-portfolio-1'),
            getImage('food-portfolio-2'),
            getImage('food-portfolio-3'),
            getImage('food-portfolio-4')
          ]
        }
      },
       {
        id: 'corporate-industrial',
        name: 'Corporate & Industrial',
        categoryName: 'Commercial & Brands',
        description: 'High-impact video and photography for corporate branding, industrial processes, and marketing campaigns.',
        price: 'Contact for Quote',
        thumbnailImage: getImage('corporate-industrial-thumb'),
        images: [getImage('corporate-ad'), getImage('office-tour')],
        details: ['Corporate Ads & Brand Films', 'Factory & Office Tours', 'Construction Timelapses', 'Manufacturing Process Documentation'],
        pageContent: {
          longDescription: "Elevate your corporate identity and showcase your industrial prowess with our specialized photo and video services in Mumbai. We translate your company's vision, values, and capabilities into powerful visual narratives. From producing compelling corporate brand films and advertisements to documenting intricate manufacturing processes and creating dynamic factory tours, our team delivers high-production-value content that builds trust, engages stakeholders, and drives business growth. We capture the scale of your operations and the precision of your work, whether it's through a cinematic construction timelapse or a detailed video of your company's journey.",
          whoIsItFor: [
            { text: "Manufacturing Firms", image: getImage('factory-tour') },
            { text: "Engineering Companies", image: getImage('manufacturing-process') },
            { text: "Construction Projects", image: getImage('construction-timelapse') },
            { text: "Corporate Offices", image: getImage('office-tour') }
          ],
          whyChooseUs: [
            "Experts in industrial environments, prioritizing safety.",
            "Cinematic approach to corporate storytelling.",
            "Advanced capabilities: drones, multi-cam, timelapses.",
            "Collaborative process to ensure brand alignment."
          ],
          process: [
            { step: 1, title: "Discovery & Strategy", description: "We begin with a deep dive into your business, objectives, and target audience to develop a powerful creative concept.", icon: "Compass", image: getImage('corporate-ad') },
            { step: 2, title: "Pre-Production & Logistics", description: "Our team handles all planning, from scripting and storyboarding to location scouting and scheduling in the complex Mumbai environment.", icon: "ClipboardList", image: getImage('design-service-2') },
            { step: 3, title: "On-Site Production", description: "With a professional crew, we execute the shoot efficiently, capturing all necessary footage with a keen eye for detail and narrative.", icon: "Film", image: getImage('equipment-cameras') },
            { step: 4, title: "Post-Production & Delivery", description: "Your footage is transformed into a polished final video with professional editing, color grading, sound design, and motion graphics, delivered in all required formats.", icon: "Sparkles", image: getImage('video-editing-1') }
          ],
          packages: [
            { name: "The Brand Film", price: "Contact for Quote", features: ["Single-day shoot with a full crew", "High-Resolution Photographs", "Comprehensive brand story video (2-3 mins)", "Full pre-production and scripting", "Cinematic editing, color, and sound"] },
            { name: "The Facility Showcase", price: "Contact for Quote", features: ["Complete video tour of your office, factory, or plant", "Interviews with key personnel", "Drone footage included", "Ideal for websites and investor presentations"] },
            { name: "The Full-Scale Campaign", price: "Contact for Quote", features: ["A suite of videos for a marketing campaign", "Includes main ad, social media cutdowns, and BTS content", "Full creative development from concept to delivery", "End-to-end project management"] }
          ],
          faqs: [
            { question: "Our factory floor has a lot of safety regulations. How do you handle shoots in such environments?", answer: "Safety is our top priority. Our team is experienced in working in industrial settings and will conduct a thorough site visit to understand and adhere to all your safety protocols. We plan our shoots meticulously to work around your production schedule and minimize disruption." },
            { question: "What are the typical usage rights for the corporate videos you produce?", answer: "Our standard agreements grant you broad usage rights for your company's owned digital platforms, including your website, social media, and for internal communications and investor relations. Usage for paid broadcast advertising can be discussed and licensed separately." },
            { question: "How long does it take to produce a corporate brand film?", answer: "Production timelines vary based on complexity. A typical corporate film project, from initial concept to final delivery, can take between 4 to 8 weeks. This includes time for scripting, pre-production, shooting, editing, and your team's feedback and revisions." },
            { question: "Can you include employee interviews or client testimonials in the video?", answer: "Yes, interviews and testimonials are a powerful way to add authenticity to your corporate videos. We can film professional, well-lit interviews on-site and integrate them seamlessly into the final production." },
            { question: "We need photos as well as video. Do you offer combined packages?", answer: "Absolutely. We are a full-service production house. We can efficiently capture both high-quality still photography and cinematic video during the same production, ensuring a consistent visual style across all your corporate assets." }
          ],
          portfolio: [
            getImage('corporate-ad'),
            getImage('office-tour'),
            getImage('factory-tour'),
            getImage('manufacturing-process'),
            getImage('construction-timelapse'),
            getImage('corporate-industrial-thumb')
          ]
        }
      },
    ],
  },
  {
    id: 'real-estate-architecture',
    name: 'Property',
    description: 'Showcasing properties and structures at their best.',
    image: getImage('real-estate-category'),
    services: [
      {
        id: 'real-estate-architectural',
        name: 'Real Estate & Architectural',
        categoryName: 'Property',
        description: 'High-quality photos, videos, and drone footage to make your property listings and projects stand out.',
        price: 'Starting at ₹7,000',
        thumbnailImage: getImage('real-estate-category'),
        images: [getImage('real-estate-1'), getImage('architectural-1')],
        details: ['Interior, exterior, and aerial shots', 'Twilight and daytime options', 'Fast 24-hour turnaround for real estate'],
        pageContent: { 
            longDescription: 'In Mumbai\'s competitive real estate market, exceptional visuals are essential to attract buyers and clients. Our Architectural and Real Estate photography service provides stunning, high-dynamic-range images and cinematic videos that showcase properties in their best light. From luxury apartments in South Mumbai to sprawling villas in Alibaug, we capture the design, space, and appeal of each project.',
            whoIsItFor: [
                { text: "Real Estate Agents", image: getImage('real-estate-1') },
                { text: "Architects & Designers", image: getImage('architectural-1') },
                { text: "Developers", image: getImage('construction-timelapse') },
                { text: "Hotels & Resorts", image: getImage('modern-house') }
            ],
            whyChooseUs: [
                "Specialized in wide-angle and advanced lighting techniques.",
                "Fast 24-48 hour turnaround for real estate listings.",
                "Drone services for breathtaking aerial views.",
                "Cinematic property walkthrough videos."
            ],
            process: [
                { step: 1, title: "Property Walkthrough", description: "We coordinate with the property owner or agent to schedule the best time for the shoot, considering natural light.", icon: "Home", image: getImage('real-estate-category') },
                { step: 2, title: "The Shoot", description: "Our photographer systematically captures every room, architectural detail, and exterior angle, including aerial shots if requested.", icon: "Camera", image: getImage('drone-property') },
                { step: 3, title: "Advanced Post-Processing", description: "We use techniques like exposure blending and color correction to create vibrant, true-to-life images that stand out.", icon: "Wand2", image: getImage('photo-editing-1') },
                { step: 4, title: "Gallery Delivery", description: "Your professionally edited photos and videos are delivered through an easy-to-use online gallery, ready for your MLS or marketing.", icon: "Download", image: getImage('album-design-1') }
            ],
            packages: [
                { name: "Realty Essential", price: "₹7,000", originalPrice: "₹10,000", features: ["For apartments up to 2BHK", "20-25 High-Res Photos", "All Raw/Unedited Photos Included", "24-Hour Delivery"] },
                { name: "Pro-Listing", price: "₹18,000", originalPrice: "₹25,000", features: ["For apartments/villas up to 4BHK", "35-40 High-Res Photos", "All Raw/Unedited Photos Included", "1-Min Cinematic Video"] },
                { name: "Architectural Showcase", price: "Contact for Quote", features: ["For architects/designers", "Full-Day Shoot with custom lighting", "All Raw/Unedited Photos Included", "Home Tour, Reels & Testimonials"] },
            ],
            faqs: [
              { question: "How should I prepare the property before a real estate photoshoot?", answer: "We provide a detailed checklist, but key steps include decluttering all surfaces, cleaning windows and mirrors, ensuring all lights are working, and removing personal items like family photos to help potential buyers envision themselves in the space." },
              { question: "What is the turnaround time for real estate photos in Mumbai?", answer: "We understand the fast-paced Mumbai real estate market. For our Realty Essential and Pro-Listing packages, we guarantee a 24-48 hour turnaround time for your edited photos." },
              { question: "Do you offer drone photography for properties?", answer: "Yes, we offer professional drone photography and videography. It's a great way to showcase the property's scale, location, and nearby amenities. Drone services can be added to any package." },
              { question: "What is the difference between a real estate shoot and an architectural shoot?", answer: "A real estate shoot is focused on marketing a property for quick sale, emphasizing bright, appealing spaces. An architectural shoot is more artistic, focusing on the designer's vision, materials, and unique structural details, often for a portfolio or publication." },
              { question: "Can you create a video walkthrough of the property?", answer: "Absolutely. Our 'Pro-Listing' package includes a cinematic video, and we can create more detailed walkthrough videos for any property. Video is a powerful tool for engaging online buyers." }
            ],
            portfolio: [
                getImage('real-estate-1'),
                getImage('architectural-1'),
                getImage('modern-interior'),
                getImage('kitchen-interior'),
                getImage('modern-house'),
                getImage('drone-property')
            ]
        }
      },
    ],
  },
  {
    id: 'celebrity-influencer',
    name: 'Influencer & Celebrity',
    description: 'High-profile shoots and content creation.',
    image: getImage('celebrity-category'),
    services: [
      {
        id: 'influencer-celebrity',
        name: 'Influencer & Celebrity Content',
        categoryName: 'Influencer & Celebrity',
        description: 'Professional, discreet photography and videography for public figures and social media content creation.',
        price: 'Contact for quote',
        thumbnailImage: getImage('celebrity-category'),
        images: [getImage('celebrity-shoots-1'), getImage('influencer-content-1')],
        details: ['Experienced with high-profile clients', 'Confidentiality assured', 'Batch content creation for social media'],
        pageContent: { 
            longDescription: 'We provide discreet, professional, and high-impact photography and videography services for celebrities, influencers, and public figures in Mumbai. Understanding the need for both stunning visuals and confidentiality, our team works efficiently to create content for social media, brand endorsements, press kits, and personal portfolios. Whether it\'s a red carpet event, a brand collaboration, or a day of batch-creating content, we are the trusted visual partners for many public personalities.',
            whoIsItFor: [
                { text: "Bollywood Actors", image: getImage('celebrity-shoots-1') },
                { text: "Social Media Influencers", image: getImage('influencer-content-1') },
                { text: "Public Figures", image: getImage('headshots-1') },
                { text: "High-Profile Individuals", image: getImage('candid-celebrity') }
            ],
            whyChooseUs: [
                "Absolute discretion and confidentiality (NDAs welcome).",
                "Experience in fast-paced, high-pressure environments.",
                "Ability to produce a high volume of quality content quickly.",
                "Deep understanding of content that performs well online."
            ],
            process: [
                { step: 1, title: "Strategy & Confidential Briefing", description: "We work with you or your management team under strict confidentiality to plan the content goals and logistics.", icon: "Lock", image: getImage('celebrity-shoots-1') },
                { step: 2, title: "Efficient Content Creation", description: "We execute the shoot(s) with a professional and nimble team, maximizing the output from our time together.", icon: "Zap", image: getImage('influencer-content-1') },
                { step: 3, title: "Priority Editing", description: "We offer expedited editing and delivery to meet the demanding timelines of social media and PR.", icon: "Rocket", image: getImage('photo-editing-1') },
                { step: 4, title: "Secure Delivery", description: "All content is delivered through a highly secure, encrypted online portal.", icon: "ShieldCheck", image: getImage('album-design-1') }
            ],
            packages: [
                { name: "Content Day Retainer", price: "₹10,000", features: ["Half-Day Shoot", "Photo and Video"] },
                { name: "Brand Collaboration", price: "₹20,000", features: ["Editing of photos", "Up to 2 Reels"] },
                { name: "Event Appearance", price: "₹25,000", features: ["Edited photos", "Cinematic highlight reel (up to 2)", "Photo and Video Team"] },
            ],
            faqs: [
              { question: "How do you ensure privacy and confidentiality for high-profile clients?", answer: "Confidentiality is paramount. All team members sign a strict Non-Disclosure Agreement (NDA). We can shoot at private studios or your preferred location, and all content is delivered via a secure, encrypted portal." },
              { question: "Can you create a large volume of content for social media in one day?", answer: "Yes, our 'Content Day Retainer' is designed for this. We work efficiently to shoot multiple looks and concepts in a single day, providing you with a bank of content to use over several weeks or months." },
              { question: "Can you match the aesthetic of my existing social media feed?", answer: "Absolutely. During our initial briefing, we will analyze your existing brand and aesthetic to ensure the photos and videos we create are perfectly aligned with your feed for a seamless look." },
              { question: "Do you offer quick turnaround times for time-sensitive events or posts?", answer: "Yes, we understand the fast-paced nature of social media and PR. We offer priority editing and expedited delivery options to meet your tight deadlines." },
              { question: "Do you travel for shoots outside of Mumbai?", answer: "Yes, our team is available to travel nationally and internationally for celebrity and influencer projects. We handle all logistics to ensure a smooth production, wherever the location." }
            ],
            portfolio: [
                getImage('celebrity-shoots-1'),
                getImage('influencer-content-1'),
                getImage('candid-celebrity'),
                getImage('fashion-shoots-2'),
                getImage('headshots-2'),
                getImage('celebrity-category')
            ]
        }
      },
      {
        id: 'podcast-production',
        name: 'Podcast Production',
        categoryName: 'Influencer & Celebrity',
        description: 'Professional audio and multi-camera video production for podcasts, from recording to final edits.',
        price: 'Starting at ₹8,000',
        thumbnailImage: getImage('podcast-setup'),
        images: [getImage('podcast-recording'), getImage('podcast-editing')],
        details: ['Multi-camera video recording', 'High-quality microphone setup', 'Editing and social media clip creation'],
        pageContent: { 
            longDescription: 'Launch or elevate your podcast with our end-to-end production services in Mumbai. We provide a professional studio environment with high-quality audio and multi-camera video recording capabilities. Our team handles the technical complexities, allowing you to focus on creating great content. From recording your episode to editing, mastering, and creating shareable social media clips, we are your one-stop shop for podcast production.',
            whoIsItFor: [
                { text: "Aspiring Podcasters", image: getImage('podcast-recording') },
                { text: "Video Podcasts", image: getImage('podcast-setup') },
                { text: "Corporate Podcasts", image: getImage('corporate-event') },
                { text: "Influencers", image: getImage('influencer-content-1') }
            ],
            whyChooseUs: [
                "Acoustically treated studio for crystal-clear audio.",
                "Multi-camera 4K setup for a dynamic, professional video.",
                "Experienced audio engineers and video editors.",
                "Packages include social media clips to promote your podcast."
            ],
            process: [
                { step: 1, title: "Pre-Production Call", description: "We discuss your podcast format, episode structure, and any specific technical or creative requirements.", icon: "Phone", image: getImage('podcast-setup') },
                { step: 2, title: "Studio Recording", description: "Record your episode in our professional studio with an engineer managing the audio and video, ensuring a smooth session.", icon: "Mic", image: getImage('podcast-recording') },
                { step: 3, title: "Post-Production", description: "Our team edits your video, mixes and masters the audio, and creates social media clips based on your chosen package.", icon: "Scissors", image: getImage('podcast-editing') },
                { step: 4, title: "Final Delivery", description: "You receive the final edited video and audio files, along with all social clips, ready for upload to your hosting platform.", icon: "Upload", image: getImage('album-design-1') }
            ],
            packages: [
                { name: "Podcast Starter", price: "₹8,000", features: ["Up to 30 mins recording time", "Single camera & wireless mic setup", "Professional mics & audio interface", "1 Full-length audio episode", "Editing available as add-on", "Audio mixing and mastering"] },
                { name: "Creator Plus", price: "₹15,000", features: ["Up to 90 mins recording time", "2 Camera video setup", "Professional lighting & audio", "1 Full-length video episode", "2 Social media clips (Reels/Shorts)", "Editing available as add-on"] },
                { name: "Studio Pro", price: "Contact for Quote", features: ["Full video and audio production", "Intro/Outro graphics", "5 Social media clips + audiograms", "Show notes & transcription", "Full Editing Included"] },
            ],
            faqs: [
              { question: "What is the benefit of a video podcast?", answer: "A video podcast significantly increases engagement by allowing you to publish on platforms like YouTube and create visual clips for social media (Instagram Reels, etc.), dramatically expanding your reach beyond audio-only listeners." },
              { question: "Can you accommodate guests who are in a different city?", answer: "Yes, we can facilitate high-quality remote recordings with video for guests who cannot be physically present at our Mumbai studio. We integrate their feed into the live production." },
              { question: "How many people can you accommodate in our podcast studio?", answer: "Our standard studio setup can comfortably accommodate up to 4 people on camera. For larger panel discussions, please contact us for a custom arrangement." },
              { question: "What is the turnaround time for a finished podcast episode?", answer: "For a standard video podcast, our turnaround time is typically 5-7 business days. This includes video editing, audio mastering, and creation of social media clips. Faster delivery is available for an extra charge." },
              { question: "Do I need to have my own intro/outro music and graphics?", answer: "You can provide your own, but our 'Studio Pro' package includes the creation of a professional intro/outro sequence with motion graphics and music to give your podcast a polished identity." }
            ],
            portfolio: [
                getImage('podcast-recording'),
                getImage('podcast-editing'),
                getImage('podcast-setup'),
                getImage('podcast-gear'),
                getImage('influencer-content-1'),
                getImage('celebrity-shoots-1')
            ]
        }
      },
    ],
  },
  {
    id: 'post-production',
    name: 'Post-Production',
    description: 'Enhance your photography and videography experience.',
    image: getImage('additional-services-category'),
    services: [
      {
        id: 'editing-retouching',
        name: 'Photo & Video Editing',
        categoryName: 'Post-Production',
        description: 'Professional photo retouching and cinematic video editing for social media, reels, teasers, and more.',
        price: 'Contact for quote',
        thumbnailImage: getImage('photo-editing-1'),
        images: [getImage('photo-editing-1'), getImage('video-editing-1')],
        details: ['Skin smoothing, color correction/grading', 'Object removal, motion graphics', 'Sound design'],
        pageContent: { 
            longDescription: 'Elevate your raw footage and photos with our expert post-production services. Based in Mumbai, our team of skilled editors and colorists can transform your content into a polished, professional final product. We offer everything from high-end photo retouching for fashion and beauty to cinematic color grading and editing for wedding films, commercials, and social media content.',
            whoIsItFor: [
                { text: "Photographers", image: getImage('photo-editing-1') },
                { text: "Videographers", image: getImage('video-editing-1') },
                { text: "Brand Marketers", image: getImage('brand-shoots-1') },
                { text: "Individuals", image: getImage('personal-portrait-1') }
            ],
            whyChooseUs: [
                "Specialized editors for different styles (e.g., fashion, wedding).",
                "Industry-standard software like Adobe Creative Suite.",
                "Collaborative process with feedback rounds.",
                "Fast and reliable turnaround times to meet your deadlines."
            ],
            process: [
                { step: 1, title: "Project Submission", description: "You securely upload your raw photos or video footage along with a detailed brief of your requirements.", icon: "UploadCloud", image: getImage('album-design-1') },
                { step: 2, title: "Editing & Crafting", description: "Our editor gets to work, applying color correction, retouching, and assembling the narrative for videos.", icon: "PenTool", image: getImage('photo-editing-1') },
                { step: 3, title: "Review & Feedback", description: "We send you the first version for your review. You can provide feedback for any revisions needed.", icon: "MessageCircle", image: getImage('podcast-editing') },
                { step: 4, title: "Final Delivery", description: "We apply the final polish and deliver the high-resolution files to you via a download link.", icon: "CheckSquare", image: getImage('album-design-2') }
            ],
            packages: [
                { name: "Photo Retouching", price: "₹500/image", features: ["High-end skin & beauty retouching", "Background cleanup/replacement", "Color correction", "Bulk discounts available"] },
                { name: "Video Editing", price: "₹5,000/min", features: ["Cinematic editing & color grading", "Licensed music", "Motion graphics & titles", "Social media versions (Reels, etc.)"] },
                { name: "Custom Editing Project", price: "Contact for Quote", features: ["For feature films, documentaries, or large-scale projects", "Personalized workflow and team", "From raw footage to final master", "All Raw Data Included"] }
            ],
            faqs: [
              { question: "What file formats do you accept for editing?", answer: "For photos, we strongly prefer RAW files (.CR2, .NEF, .ARW) for the best results. For video, high-quality formats like ProRes, CinemaDNG, or the original camera files are ideal." },
              { question: "How many rounds of revisions are included in your editing packages?", answer: "Our standard packages for both photo and video editing include two rounds of reasonable revisions to ensure you are completely satisfied with the final product." },
              { question: "What is the difference between color correction and color grading?", answer: "Color correction is the technical process of fixing issues and making the footage look natural and consistent. Color grading is the creative process of applying a specific artistic style or mood to the footage, like you see in films." },
              { question: "Can you create short videos for Instagram Reels or YouTube Shorts?", answer: "Yes, our video editing service includes creating vertically-oriented, engaging clips specifically optimized for social media platforms. This is a great way to maximize your video content's reach." },
              { question: "I have a large batch of photos. Do you offer bulk discounts?", answer: "Yes, we offer attractive discounts for bulk photo retouching orders, which is ideal for e-commerce brands, event photographers, and large projects. Please contact us with your requirements for a custom quote." }
            ],
            portfolio: [
                getImage('photo-editing-1'),
                getImage('video-editing-1'),
                getImage('color-grading'),
                getImage('cinematic-video'),
                getImage('social-media'),
                getImage('additional-services-category')
            ]
        }
      },
      {
        id: 'album-design',
        name: 'Album Design & Printing',
        categoryName: 'Post-Production',
        description: 'Beautifully designed, custom photo albums to preserve your cherished memories for a lifetime.',
        price: 'Starting at ₹10,000',
        thumbnailImage: getImage('album-design-1'),
        images: [getImage('album-design-1'), getImage('album-design-2')],
        details: ['Lay-flat panoramic spreads', 'Variety of cover materials', 'Collaborative design process'],
        pageContent: { 
            longDescription: 'Don\'t let your precious memories live only on a hard drive. We design and craft exquisite, museum-quality photo albums that tell the story of your wedding, family, or special event. Our design process is collaborative and personalized. We use premium materials, from elegant leather covers to archival-quality lay-flat paper, to create a timeless heirloom that you and your family will cherish for generations.',
            whoIsItFor: [
                { text: "Newlyweds", image: getImage('wedding-album') },
                { text: "Families", image: getImage('family-portrait-1') },
                { text: "Gifts for Parents", image: getImage('album-design-2') },
                { text: "Photographers", image: getImage('photo-editing-1') }
            ],
            whyChooseUs: [
                "Clean, modern, and story-driven design philosophy.",
                "Access to the best professional print labs for superior quality.",
                "Collaborative online proofing system makes revisions simple.",
                "Wide selection of premium cover materials and fine art papers."
            ],
            process: [
                { step: 1, title: "Photo Selection", description: "You select your favorite images from your gallery that you want to include in the album.", icon: "Image", image: getImage('album-design-2') },
                { step: 2, title: "Initial Design", description: "Our designer creates the first draft of the album layout, focusing on telling a beautiful visual story.", icon: "Layout", image: getImage('album-design-1') },
                { step: 3, title: "Review & Revise", description: "You review the design via our online proofing tool and provide feedback or request changes to the layout.", icon: "MessageSquare", image: getImage('podcast-editing') },
                { step: 4, title: "Printing & Delivery", description: "Once you approve the final design, the album is sent to our professional lab for printing and binding. It is then delivered to your doorstep.", icon: "Truck", image: getImage('brand-collateral') }
            ],
            packages: [
                { name: "The Classic Album", price: "₹10,000", features: ["25-Page Lay-flat Album (12x18 inch)", "Includes design & printing", "Online Album gallery", "Pan India free delivery"] },
                { name: "The Premium Album", price: "₹20,000", features: ["12x18 inch Lay-flat Album", "Non-tearable matt/glossy paper", "Leather or Acrylic Cover", "Online Album gallery", "Pan India free delivery"] },
                { name: "Album Combo", price: "₹25,000", features: ["Luxury 12x18 Album book", "1 Mini Album", "Luxury album box", "Other free gifts (calendar, wall clock, etc.)", "Wide variety of paper options", "Online Album gallery", "Pan India free delivery"] },
            ],
            faqs: [
              { question: "How does the album design process work?", answer: "It's a collaborative process. You first select your favorite photos, then our designer creates a layout. We send you a digital proof for your review, and we include two rounds of changes to ensure you love the design before we print." },
              { question: "What kind of materials do you use for the albums?", answer: "We use only high-quality, professional materials. Our albums feature thick, lay-flat pages, archival-quality paper, and a variety of premium cover options including leather, linen, and acrylic." },
              { question: "How many photos should I select for my album?", answer: "For a clean and elegant design, we recommend an average of 3-5 photos per spread (2 pages). So, a 25-page album would comfortably hold between 40 to 60 of your very best images." },
              { question: "What is the turnaround time for a custom album?", answer: "The design process typically takes 1-2 weeks, depending on your feedback. Once the design is approved, printing and delivery usually take another 2-3 weeks." },
              { question: "Can I get smaller copies of the main album for my parents?", answer: "Yes, our 'Album Combo' package includes a mini album, and we can create identical smaller copies of any main album. They make a perfect and cherished gift for parents and family." }
            ],
            portfolio: [
                getImage('album-design-1'),
                getImage('album-design-2'),
                getImage('wedding-album'),
                getImage('photo-album'),
                getImage('wedding-photography-2'),
                getImage('family-portrait-1')
            ]
        }
      },
      {
        id: 'drone-services',
        name: 'Drone Photography & Videography',
        categoryName: 'Post-Production',
        description: 'Stunning aerial shots to give a unique perspective to your project, event, or property listing.',
        price: 'Starting at ₹15,000',
        thumbnailImage: getImage('drone-photography-1'),
        images: [getImage('drone-photography-1'), getImage('drone-photography-2')],
        details: ['Licensed and insured drone pilots', '4K video and high-resolution photos', 'Ideal for real estate, events, and commercial projects'],
        pageContent: { 
            longDescription: 'Take your visuals to new heights with our professional drone photography and videography services in Mumbai. We provide breathtaking aerial perspectives that add a cinematic and high-production-value feel to any project. Our licensed and experienced pilots are skilled at navigating Mumbai\'s complex airspace to capture stunning footage of real estate, commercial projects, events, and more.',
            whoIsItFor: [
                { text: "Weddings & Events", image: getImage('wedding-reception') },
                { text: "Corporate Projects", image: getImage('corporate-industrial-thumb') },
                { text: "Real Estate", image: getImage('drone-property') },
                { text: "Creative Productions", image: getImage('cinematic-video') }
            ],
            whyChooseUs: [
                "Our drone pilots are licensed, certified, and fully insured.",
                "We use high-end drones capable of shooting 4K/6K video.",
                "Deep understanding of DGCA regulations for flying in Mumbai.",
                "A creative approach to capturing unique and dynamic aerial shots."
            ],
            process: [
                { step: 1, title: "Feasibility & Planning", description: "We assess the location for flight safety and restrictions, and plan the shoot according to your creative brief and local regulations.", icon: "Map", image: getImage('aerial-landscape') },
                { step: 2, title: "The Aerial Shoot", description: "Our pilot executes the flight plan, capturing a variety of shots and angles to provide ample options in post-production.", icon: "Navigation", image: getImage('drone-photography-1') },
                { step: 3, title: "Post-Production", description: "We color grade the footage and edit the photos to bring out the best in the aerial visuals.", icon: "Palette", image: getImage('color-grading') },
                { step: 4, "title": "Delivery", "description": "The final, high-resolution aerial photos and video clips are delivered to you digitally.", icon: "Download", image: getImage('album-design-1') }
            ],
            packages: [
              { name: "SkyView Half-Day Shoot", price: "₹20,000", features: ["Up to 4 Hours Flight Time", "1 Location", "All Raw/Unedited Photos & Videos", "Option to include basic color-corrected images or clips"] },
              { name: "SkyMaster Full-Day Shoot", price: "₹35,000", features: ["Full-Day Shoot (Up to 8 Hours)", "Multiple Locations (within city limits)", "1 Cinematic Edited Highlight Video (2-3 mins)", "All Edited Aerial Photos (15-25)", "All Raw/Unedited Photos & Video Clips Included"] },
              { name: "Custom Aerial Production", price: "Contact for Quote", features: ["Multi-Day or Scheduled Shoots", "Custom Editing & Grading", "Multi-Drone Operation", "Advanced Planning & Research Support"] }
            ],
            faqs: [
              { question: "Is it legal to fly drones everywhere in Mumbai?", answer: "No, Mumbai has many no-fly zones, especially around the airport, government buildings, and other sensitive areas. We always conduct a feasibility check and handle the DGCA permission process (UIN/UAOP) where required." },
              { question: "Are your drone pilots licensed?", answer: "Yes, all our pilots are DGCA-certified and fully insured, ensuring a professional and compliant operation for every flight." },
              { question: "What happens in case of bad weather like rain or high winds?", answer: "Drone safety is our absolute priority. We cannot fly in rain or high winds. We constantly monitor the weather and will reschedule for the next suitable day at no additional cost to you." },
              { question: "What kind of video quality can we expect from the drone?", answer: "We use professional-grade drones that can shoot in stunning 4K and even 6K resolution, providing crisp, cinematic-quality footage suitable for everything from social media to large-screen presentations." },
              { question: "Can drone footage be integrated into our main wedding or event video?", answer: "Absolutely. We highly recommend it! Integrating aerial shots is a fantastic way to add a sense of scale and grandeur to your final event film. Our editing team will seamlessly blend the ground and aerial footage." }
            ],
            portfolio: [
                getImage('drone-photography-1'),
                getImage('drone-photography-2'),
                getImage('drone-property'),
                getImage('aerial-landscape'),
                getImage('real-estate-1'),
                getImage('wedding-photography-1')
            ]
        }
      },
      {
        id: 'design-services',
        name: 'Design Services',
        categoryName: 'Post-Production',
        description: 'Custom graphic design to complement your brand, from social media templates to marketing materials.',
        price: 'Contact for quote',
        thumbnailImage: getImage('design-service-1'),
        images: [getImage('design-service-1'), getImage('design-service-2')],
        details: ['Social media templates', 'Marketing collateral (brochures, flyers)', 'Digital assets (banners, ads)'],
        pageContent: {
            longDescription: 'Extend your visual brand identity beyond photography with our professional design services. We create stunning, cohesive design assets that align with your brand\'s aesthetic, ensuring consistency across all your marketing channels. From digital graphics for your website and social media to print materials for your business, our design team helps you build a memorable brand presence.',
            whoIsItFor: [
                { text: "New Brands", image: getImage('design-service-1') },
                { text: "Photographers", image: getImage('photo-editing-1') },
                { text: "Businesses", image: getImage('brand-collateral') },
                { text: "Digital Assets", image: getImage('social-media-kit') }
            ],
            whyChooseUs: [
                "Deep understanding of visual storytelling.",
                "Designs that are aesthetically aligned with your photography.",
                "A one-stop-shop for your photo and design needs.",
                "A collaborative process to match your vision."
            ],
            process: [
                { step: 1, title: "Design Briefing", description: "We start with a consultation to understand your brand, target audience, and specific design requirements.", icon: "Briefcase", image: getImage('design-service-2') },
                { step: 2, title: "Concept & Creation", description: "Our designers develop initial concepts and mockups for your review, translating your vision into tangible designs.", icon: "PenTool", image: getImage('lookbook-design') },
                { step: 3, title: "Feedback & Revisions", description: "You provide feedback on the concepts, and we refine the designs until they are perfect.", icon: "MessageCircle", image: getImage('podcast-editing') },
                { step: 4, title: "Final Asset Delivery", description: "We deliver all the final design files in the required formats for both digital and print purposes.", icon: "Archive", image: getImage('album-design-1') }
            ],
            eventTypes: [
                {
                    categoryTitle: "Branding & Print Design",
                    icon: "Palette",
                    image: getImage('design-service-1'),
                    list: [
                        { title: "Logo Design", description: "Crafting a unique and memorable logo that represents your brand's essence." },
                        { title: "Brand Identity Design", description: "Developing a complete visual system including logo, colors, and typography." },
                        { title: "Brochure & Flyer Design", description: "Creating professional marketing materials for print and digital distribution." },
                        { title: "Business Card Design", description: "Designing elegant and impactful business cards that leave a lasting impression." }
                    ]
                },
                {
                    categoryTitle: "Digital & UI/UX Design",
                    icon: "Smartphone",
                    image: getImage('design-service-2'),
                    list: [
                        { title: "Website UI/UX Design", description: "Designing intuitive and visually appealing user interfaces for websites." },
                        { title: "Social Media Creatives", description: "Designing custom templates and graphics for a cohesive social media presence." },
                        { title: "Landing Page Design", description: "Crafting high-converting landing pages that drive user action and engagement." },
                        { title: "Emailer & Newsletter Design", description: "Creating visually engaging email templates for marketing campaigns." }
                    ]
                },
                {
                    categoryTitle: "Video & Motion Design",
                    icon: "Film",
                    image: getImage('video-editing-1'),
                    list: [
                        { title: "Motion Graphics", description: "Adding dynamic animated elements to your videos to enhance storytelling." },
                        { title: "Video Editing", description: "Professionally editing your raw footage into a polished and compelling final video." },
                        { title: "Title & Intro Animation", description: "Creating captivating animated titles and intros for your video content." },
                        { title: "Social Media Video Ads", description: "Producing short, impactful video ads optimized for platforms like Instagram and Facebook." }
                    ]
                }
            ],
            packages: [
                {
                    name: "Brand Starter Kit",
                    price: "₹15,000",
                    originalPrice: "₹20,000",
                    features: [
                        "Logo Design (3 concepts)",
                        "Brand Identity Guide (Colors, Typography)",
                        "Business Card Design",
                        "Social Media Profile Pictures & Banners"
                    ]
                },
                {
                    name: "Digital Presence",
                    price: "₹35,000",
                    originalPrice: "₹45,000",
                    features: [
                        "Includes everything in Brand Starter Kit",
                        "5 Social Media Post Templates (e.g., Canva/Figma)",
                        "3 Web Banner Designs",
                        "1 Landing Page UI Design (Figma)"
                    ]
                },
                {
                    name: "Full-Stack Design Partner",
                    price: "Contact for Quote",
                    features: [
                        "A dedicated design team for your ongoing needs.",
                        "Covers graphic, UI/UX, and motion design.",
                        "Perfect for startups and marketing agencies.",
                        "Monthly retainer for continuous support."
                    ]
                }
            ],
            faqs: [
              { question: "What is a brand identity guide?", answer: "A brand identity guide is a crucial document that outlines your brand's visual rules, including your logo usage, color palette, and typography. It ensures your brand looks consistent across all platforms, from your website to your social media." },
              { question: "Can I edit the social media templates myself?", answer: "Yes. We can create your custom social media templates in user-friendly platforms like Canva or Figma, which allows you or your team to easily update them with new text and images while maintaining a professional look." },
              { question: "What is the difference between UI and UX design?", answer: "UI (User Interface) design is about the visual look and feel of a website or app—the colors, fonts, and layout. UX (User Experience) design is about how it feels to use the product—is it logical, easy to navigate, and enjoyable? We focus on both to create effective digital products." },
              { question: "What files do I receive for a logo design project?", answer: "You will receive a complete set of files for both digital and print purposes, including high-resolution vector files (AI, EPS, SVG) that can be scaled to any size, as well as standard image files (PNG, JPG)." },
              { question: "Do your design services include website development?", answer: "Our design packages focus on the visual and user experience design (UI/UX). We deliver production-ready design files that you can hand off to a web developer. We can recommend trusted developers in Mumbai if you need one." }
            ],
            portfolio: [
                getImage('design-service-1'),
                getImage('design-service-2'),
                getImage('social-media-kit'),
                getImage('brand-collateral'),
                getImage('lookbook-design'),
                getImage('marketing-material')
            ]
        }
      }
    ],
  }
];

export const allServices: Service[] = photographyCategories.flatMap((category) => category.services.map(service => ({...service, categoryName: category.name})));

    
