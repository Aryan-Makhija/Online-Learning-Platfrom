
"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  BookOpen, 
  Compass, 
  PlusCircle, 
  Menu, 
  X,
  GraduationCap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import AddnewCourse from './AddnewCourse'

const WorkspaceNavbar = ({ activeTab, setActiveTab }) => {
  const { user } = useUser()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'enrolled', label: 'My Learning', icon: BookOpen },
    { id: 'explore', label: 'Explore Courses', icon: Compass },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">

          {/* BRAND LOGO */}
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

          {/* DESKTOP NAVIGATION TABS */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navTabBg"
                      className="absolute inset-0 bg-white rounded-xl"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-600' : 'text-slate-400'}`} />
                    {item.label}
                  </span>
                </button>
              )
            })}
          </nav>

          {/* RIGHT ACTIONS: GENERATE COURSE & CLERK USER BUTTON */}
          <div className="hidden sm:flex items-center gap-3">
            <AddnewCourse>
              <Button className="relative group overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold text-xs sm:text-sm px-5 py-5 shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]">
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
                <span>Generate Course</span>
              </Button>
            </AddnewCourse>

            <div className="pl-2 border-l border-slate-200 flex items-center">
              <UserButton 
                afterSignOutUrl="/" 
                appearance={{
                  elements: {
                    avatarBox: 'w-10 h-10 border-2 border-amber-300 shadow-sm'
                  }
                }}
              />
            </div>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <div className="flex items-center gap-2 sm:hidden">
            <UserButton afterSignOutUrl="/" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
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
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold border ${
                    isActive
                      ? 'bg-amber-50 text-amber-900 border-amber-300'
                      : 'bg-slate-50 text-slate-600 border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4 text-amber-600" />
                  {item.label}
                </button>
              )
            })}
          </div>

          <AddnewCourse>
            <Button className="w-full py-5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md">
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Generate New AI Course</span>
            </Button>
          </AddnewCourse>
        </motion.div>
      )}
    </header>
  )
}

export default WorkspaceNavbar