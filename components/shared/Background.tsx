"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern-dark.svg')] bg-center opacity-20"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-purple-900/20 filter blur-[100px] animate-float"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-blue-900/20 filter blur-[100px] animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-fuchsia-900/10 filter blur-[120px] opacity-50 animate-pulse"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-[0.02] mix-blend-overlay"></div>
    </div>
  );
}
