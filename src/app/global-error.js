"use client";

import { useEffect } from "react";
import { AlertOctagon, RefreshCw, Home } from "lucide-react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global Application Error:", error);
  }, [error]);

  const handleRetry = () => {
    if (typeof reset === "function") {
      reset();
    } else {
      window.location.reload();
    }
  };

  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased font-sans min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full text-center bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          {/* Amber Accent Header Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500" />

          {/* Icon Badge */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-6 shadow-inner">
            <AlertOctagon className="w-8 h-8" />
          </div>

          <h1 className="text-2xl font-extrabold text-white tracking-tight mb-2">
            Critical System Error
          </h1>

          <p className="text-sm text-slate-400 mb-8 leading-relaxed">
            A top-level exception interrupted the application. Attempt to recover the current state or navigate back to safety.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleRetry}
              className="w-full sm:w-auto h-11 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>

            <a
              href="/"
              className="w-full sm:w-auto h-11 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
            >
              <Home className="w-4 h-4 text-slate-400" />
              <span>Go Home</span>
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}