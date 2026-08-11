import React from 'react'

const PortfolioLoader = ({ leaving = false }) => (
  <div
    className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black text-white transition-opacity duration-500 ${
      leaving ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}
    role="status"
    aria-live="polite"
    aria-label="Loading portfolio"
  >
    {/* Background glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_55%)]" />

    <div className="relative px-6 text-center">
      <div className="mb-7 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-white/40" />
        <p className="text-[10px] font-semibold tracking-[0.5em] text-white/60 sm:text-xs">
          WELCOME TO
        </p>
        <span className="h-px w-10 bg-white/40" />
      </div>

      <h1 className="animate-[loaderReveal_0.9s_cubic-bezier(.16,1,.3,1)_both] text-4xl font-black tracking-[0.12em] sm:text-6xl md:text-8xl">
        MY PORTFOLIO
      </h1>

      <div className="mx-auto mt-10 h-px w-52 overflow-hidden bg-white/20 sm:w-72">
        <span className="block h-full w-full origin-left animate-[loaderProgress_1.6s_cubic-bezier(.65,0,.35,1)_forwards] bg-white" />
      </div>

      <p className="mt-4 animate-pulse text-[10px] font-medium tracking-[0.3em] text-white/40">
        LOADING EXPERIENCE
      </p>
    </div>

    <style>{`
      @keyframes loaderReveal {
        from {
          opacity: 0;
          transform: translateY(24px);
          letter-spacing: 0.3em;
        }
        to {
          opacity: 1;
          transform: translateY(0);
          letter-spacing: 0.12em;
        }
      }

      @keyframes loaderProgress {
        from { transform: scaleX(0); }
        to { transform: scaleX(1); }
      }

      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  </div>
)

export default PortfolioLoader