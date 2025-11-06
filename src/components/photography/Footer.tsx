import { Camera, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import ContactButton from './ContactButton';

export default function Footer() {
  return (
    <footer className="bg-card border-t" id="contact">
      <div className="container mx-auto max-w-screen-xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2" aria-label="PK Photography Home">
            <Camera className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold tracking-wide">
              PK Photography
            </span>
          </Link>
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} PK Photography. All Rights Reserved.</p>
             <ContactButton variant="link" className="p-0 h-auto text-sm text-muted-foreground mt-1 md:mt-0">
               Capturing moments, creating memories. Get in touch!
            </ContactButton>
          </div>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
