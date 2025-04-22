// index.tsx

import ScrollTriggeredAnimation from "./components/ScrollTriggeredAnimation";
import StackingCards from "./components/StackingCards";

export default function CardStack() {
  return (
    <div className="relative mb-[100px] ">
      <section className="sticky top-0  h-screen">
        <ScrollTriggeredAnimation />
      </section>
      <section className="relative">
        <StackingCards />
      </section>
    </div>
  );
}
