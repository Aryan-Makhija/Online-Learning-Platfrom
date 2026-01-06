"use client"
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
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
} from "lucide-react"
import { useRouter } from 'next/navigation'
import { SignedIn, UserButton } from "@clerk/nextjs"
const MobileMenu = () => {

    const router = useRouter()

    const handleNavigate = (id) => {
        router.push(`#${id}`)
    }

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
                    className="text-black hover:text-indigo-600"
                >
                    <Menu />
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-72 bg-white text-black border-r border-black/10"
                onCloseAutoFocus={(e) => e.preventDefault()} // 🚫 stop jump
            >
                <SheetHeader>
                    <SheetTitle className="text-left text-indigo-600">
                        Menu
                    </SheetTitle>
                </SheetHeader>
                <SignedIn>
                    <div className="mt-6 flex flex-col items-center gap-2">
                        <UserButton afterSignOutUrl="/" />
                        <span className="text-sm font-medium text-gray-700">
                            Profile
                        </span>
                    </div>
                </SignedIn>
                <nav className="mt-8 flex flex-col gap-2">
                    {[
                        { id: "features", label: "Features", Icon: Sparkles },
                        { id: "how", label: "How It Works", Icon: Workflow },
                        { id: "courses", label: "Courses", Icon: BookOpen },
                        { id: "testimonials", label: "Testimonials", Icon: MessageSquareQuote },
                        { id: "contact", label: "Contact", Icon: Mail },
                    ].map(({ id, label, Icon }) => (
                        <SheetClose asChild key={id}>
                            <Button
                                variant="ghost"
                                className="w-full justify-start gap-3 hover:bg-indigo-50 hover:text-indigo-600"
                                onClick={() => scrollToSection(id)}
                            >
                                <Icon className="h-5 w-5" />
                                {label}
                            </Button>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu



