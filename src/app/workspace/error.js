"use client";

import { useEffect } from "react";

import { AlertTriangle, RefreshCw, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CourseError({ error, reset }) {
  useEffect(() => {
    console.error("Course Page Error:", error);
  }, [error]);

  const handleRetry = () => {
    if (typeof reset === "function") {
      // Re-renders the Next.js route segment
      reset();
    } else {
      // Fallback: reloads the browser window
      window.location.reload();
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 py-12 bg-slate-50/50">
      <div className="max-w-md w-full text-center bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl shadow-slate-900/5 relative overflow-hidden">
        {/* Amber Accent Header Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500" />

        {/* Warning Icon */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 mb-5">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
          Unable to Load Course
        </h1>

        <p className="text-sm text-slate-500 mb-8 leading-relaxed">
          Something went wrong while fetching this course layout. Please try refreshing or return to your workspace.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={handleRetry}
            className="w-full sm:w-auto h-11 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
          >
            <RefreshCw className="w-4 h-4 text-amber-400" />
            <span>Try Again</span>
          </Button>

          
        </div>
      </div>
    </div>
  );
}