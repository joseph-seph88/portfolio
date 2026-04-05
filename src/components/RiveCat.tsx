"use client";

import { useRive } from "@rive-app/react-canvas";

export default function RiveCat({ className }: { className?: string }) {
  const { RiveComponent } = useRive({
    src: "/portfolio/assets/riv/cat.riv",
    artboard: "Cat & Treat",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <div className={`w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-3xl overflow-hidden mt-4 border-2 border-gray-300 bg-gray-100 ${className ?? ''}`}>
      <RiveComponent />
    </div>
  );
}
