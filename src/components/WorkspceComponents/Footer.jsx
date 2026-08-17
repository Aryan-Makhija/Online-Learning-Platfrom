import React from 'react'
import Link from 'next/link'
import {
  Sparkles,
  Github,
  Twitter,
  Linkedin,
  Disc as Discord,
  ArrowRight,
  ShieldCheck,
  Zap,
  GraduationCap
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* TOP SECTION: BRAND & NAVIGATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">

          {/* BRAND COLUMN */}
          <div className="lg:col-span-2 space-y-4">

            <div className="flex items-center gap-2.5">


              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">
                  Edu<span className="text-amber-600">AI</span>
                </span>
               
              </div>

            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering learners worldwide with AI-driven, personalized course generation, dynamic syllabi, and interactive study tools.
            </p>

            {/* LIVE SYSTEM STATUS */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>All AI Models Operational</span>
            </div>
          </div>

          {/* COLUMN 1: PLATFORM */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#workspace" className="hover:text-amber-400 transition-colors">
                  AI Generator
                </Link>
              </li>
              <li>
                <Link href="#workspace/explore" className="hover:text-amber-400 transition-colors">
                  Explore Courses
                </Link>
              </li>
              <li>
                <Link href="#workspace/dashboard" className="hover:text-amber-400 transition-colors">
                  My Workspace
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Pro Plans</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-extrabold bg-amber-500/20 text-amber-400 rounded-md border border-amber-500/30">
                    NEW
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: RESOURCES */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#docs" className="hover:text-amber-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#guides" className="hover:text-amber-400 transition-colors">
                  Study Guides
                </Link>
              </li>
              <li>
                <Link href="#community" className="hover:text-amber-400 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#changelog" className="hover:text-amber-400 transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: LEGAL & SECURITY */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Legal & Trust
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#privacy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#terms" className="hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#security" className="hover:text-amber-400 transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT & SOCIALS */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} EduAI Inc. All rights reserved. Built for learners worldwide.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 hover:text-amber-400 text-slate-400 transition-all border border-slate-800"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 hover:text-amber-400 text-slate-400 transition-all border border-slate-800"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 hover:text-amber-400 text-slate-400 transition-all border border-slate-800"
              aria-label="Discord"
            >
              <Discord className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 hover:text-amber-400 text-slate-400 transition-all border border-slate-800"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer