import Lottie from "lottie-react";
import logo from "@/assets/logo.json";

const Logo = () => {
  return <Lottie animationData={logo} loop={true} className="w-16 h-16" />;
};

export default Logo;
