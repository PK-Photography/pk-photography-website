import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import PKLogo from "@/assets/logo.webp";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header1 = () => {
  return (
    <header className=" top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Want your own Shoot for Free? </p>
        <div className="inline-flex gap-1 items-center">
          <p>Book Your Shoot</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container px-0">
          <div className="flex items-center justify-between">
            <Image src={PKLogo} alt="Saas Logo" height={120} width={120} />
            {/* <MenuIcon className="h-5 w-5 md:hidden" /> */}
            <nav className="hidden md:flex gap-6 text-black/70 items-center">
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">Gallery</a>
              <a href="#">Blogs</a>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">Signup Now</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
