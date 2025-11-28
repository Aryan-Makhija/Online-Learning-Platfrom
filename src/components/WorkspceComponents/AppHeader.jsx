import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import { ArrowBigLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const AppHeader = ({ hideSidebar = false }) => {
    return (
        <div className='p-4 flex justify-between items-center shadow-sm'>
            {hideSidebar &&  <Link href="/workspace"><div className='flex gap-2 font-bold items-center text-2xl'><Image src={"/logo.svg"} width={40} height={40} alt="logo image"></Image>EduAI</div></Link> }
            {!hideSidebar && <SidebarTrigger />}
            <UserButton />
        </div>
    )
}

export default AppHeader