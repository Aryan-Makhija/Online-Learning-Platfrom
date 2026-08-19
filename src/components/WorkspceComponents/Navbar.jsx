
"use client"

import { UserButton } from "@clerk/nextjs"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Menu, Sparkles, BookOpen, Compass, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import AddnewCourse from "./AddnewCourse"



const WorkspaceNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'My Learning', icon: BookOpen, href: '/workspace/my-learning' },
    { label: 'Explore Courses', icon: Compass, href: '/workspace/explore' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">

          {/* Brand Logo */}
          <Link href="/workspace" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                Edu<span className="text-amber-600">AI</span>
              </span>
              <span className="text-[10px] font-bold text-amber-700/80 tracking-wider uppercase mt-0.5">
                Workspace
              </span>
            </div>
          </Link>

          {/* Dedicated Page Links Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-white transition-all duration-200 shadow-none hover:shadow-sm"
                >
                  <Icon className="w-4 h-4 text-amber-600" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Action Trigger & Clerk User Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button className="relative group overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold text-xs sm:text-sm px-5 py-3 shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
                <span>Generate Course</span>
              </span>
            </button>

            {/* Clerk User Profile Icon */}
            <div className="flex items-center justify-center pl-1 border-l border-slate-200">
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 sm:hidden">
            <UserButton afterSignOutUrl="/" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold bg-slate-50 text-slate-700 border border-slate-200"
                  >
                    <Icon className="w-4 h-4 text-amber-600" />
                    {item.label}
                  </Link>
                )
              })}
            </div>

            <AddnewCourse>
              <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md">
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Generate New AI Course</span>
              </button>
            </AddnewCourse>
            
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


export default WorkspaceNavbar