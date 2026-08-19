

"use client"

import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  Menu,
  Sparkles,
  Workflow,
  BookOpen,
  MessageSquareQuote,
  Mail,
  ArrowRight,
  User,
  HelpCircle,
  GraduationCap
} from "lucide-react"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from 'next/link'

const MobileMenu = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth" })
  } 

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-800 hover:text-amber-600 hover:bg-amber-50/50 rounded-xl"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-80 bg-white text-slate-900 border-l border-amber-900/10 p-6 flex flex-col justify-between"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div className="space-y-6">
          {/* Header & Logo */}
          <SheetHeader className="p-0 text-left">
            <SheetTitle className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                    Edu<span className="text-amber-600">AI</span>
                  </span>

                </div>
              </Link>
            </SheetTitle>
          </SheetHeader>

          {/* User Account Bar */}
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
            <SignedIn>
              <div className="flex items-center gap-3">
                <UserButton afterSignOutUrl="/" />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-800">
                    Your Account
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Workspace Ready
                  </span>
                </div>
              </div>
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-lg py-2 flex items-center justify-center gap-2">
                  <User className="w-3.5 h-3.5" />
                  <span>Sign In to EduAI</span>
                </Button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-1.5">
            {[
              { id: "features", label: "Features", Icon: Sparkles },
              { id: "how", label: "How It Works", Icon: Workflow },
              { id: "courses", label: "Courses", Icon: BookOpen },
              { id: "testimonials", label: "Testimonials", Icon: MessageSquareQuote },
              { id: "faq", label: "Faq", Icon: HelpCircle },
              { id: "contact", label: "Contact", Icon: Mail },
            ].map(({ id, label, Icon }) => (
              <SheetClose asChild key={id}>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 text-slate-600 hover:text-amber-700 hover:bg-amber-50/80 font-medium text-sm rounded-xl py-2.5 transition-colors"
                  onClick={() => scrollToSection(id)}
                >
                  <Icon className="h-4 w-4 text-amber-600" />
                  {label}
                </Button>
              </SheetClose>
            ))}
          </nav>
        </div>

        {/* Bottom Call to Action */}

      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
