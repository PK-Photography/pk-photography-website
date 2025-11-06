
import type { ImagePlaceholder } from './placeholder-images';

export interface ServicePackage {
  name: string;
  price: string;
  originalPrice?: string;
  features: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export type EventListItem = {
    title: string;
    description: string;
}

export type EventTypeCategory = {
    categoryTitle: string;
    icon: string;
    image: ImagePlaceholder;
    list: EventListItem[];
};

export interface EquipmentItem {
  title: string;
  description: string;
  features: string[];
  image: ImagePlaceholder;
}

export interface WhoIsItForItem {
  text: string;
  image: ImagePlaceholder;
}

export interface ProcessStep {
  step: number;
  title: string;
  description:string;
  icon: string;
  image: ImagePlaceholder;
}

export interface Service {
  id: string;
  name: string;
  categoryName?: string;
  description: string;
  price: string;
  thumbnailImage: ImagePlaceholder;
  images: ImagePlaceholder[];
  details: string[];
  
  // New detailed fields
  pageContent: {
    longDescription: string;
    whoIsItFor: WhoIsItForItem[];
    whyChooseUs: string[];
    equipment?: EquipmentItem[];
    process: ProcessStep[];
    packages: ServicePackage[];
    customPackage?: ServicePackage; // Make custom package optional
    eventTypes?: EventTypeCategory[]; // Optional array for event types
    faqs: FAQ[];
    portfolio: ImagePlaceholder[];
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: ImagePlaceholder;
  services: Service[];
}

export interface Booking {
    id: string;
    fullName: string;
    email?: string;
    mobile: string;
    preferredDate?: Date;
    preferredTimeSlot?: string;
    message?: string;
    serviceId: string;
    serviceName: string;
    package: string;
    packageDetails: ServicePackage;
    addOns: {
        makeupArtist: boolean;
        pendrive: boolean;
        printedAlbum: boolean;
    };
    status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
    createdAt: any; // serverTimestamp
    advancePaid?: boolean;
    paymentId?: string;
}
