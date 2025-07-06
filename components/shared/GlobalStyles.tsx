"use client";

export default function GlobalStyles() {
  return (
    <style jsx global>{`
      @keyframes shine {
        0% {
          background-position: -200% center;
        }
        100% {
          background-position: 200% center;
        }
      }
      .animate-shine {
        background-size: 200% 100%;
        animation: shine 6s ease-in-out infinite;
      }
      
      /* Simple hover effect for buttons */
      .btn-shine {
        position: relative;
        overflow: hidden;
      }
      .btn-shine::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          to bottom right,
          rgba(255,255,255,0) 0%,
          rgba(255,255,255,0.1) 50%,
          rgba(255,255,255,0) 100%
        );
        transform: rotate(30deg);
        transition: transform 0.5s;
        opacity: 0;
      }
      .btn-shine:hover::before {
        transform: rotate(30deg) translate(100%, -100%);
        opacity: 1;
      }
    `}</style>
  );
}
