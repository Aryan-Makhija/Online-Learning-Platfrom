"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import { Book, Compass, LayoutDashboard, Mail, ToolCaseIcon, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import AddnewCourse from "./AddnewCourse"



const AppSideBar = () => {


    const Sidebaroptions = [
        {
            title: "DashBoard",
            icon: LayoutDashboard,
            path: "/workspace"
        },
        {
            title: "My Learning",
            icon: Book,
            path: "/#"
        },
        {
            title: "Explore  Courses",
            icon: Compass,
            path: "/#"
        },
        {
            title: "Ai Tools",
            icon: ToolCaseIcon,
            path: "/#"
        },
        {
            title: "Billing",
            icon: Mail,
            path: "/#"
        },
        {
            title: "Profile",
            icon: User,
            path: "/#"
        },

    ]

    const path = usePathname()

    return (

        <Sidebar>
            <SidebarHeader >
                <Image src={"/logo.svg"} width={40} height={40}></Image>

            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup >

                    <AddnewCourse>

                    <Button>
                        Create New Course
                    </Button>

                    </AddnewCourse>
                </SidebarGroup>


                <SidebarGroup >

                    <SidebarGroupContent>

                        <SidebarMenu>
                            {
                                Sidebaroptions.map((item, index) => (
                                    <SidebarMenuItem key={index}>

                                        <SidebarMenuButton asChild className="p-5">
                                            <Link href={item.path} className={`text-[17px] ${path.includes(item.path) && "text-purple-600 bg-purple-200"}`}
                                            
                                            >
                                                <item.icon className="h-7 w-7" />
                                                <span>{item.title}</span>

                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>


                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar >
    )


}

export default AppSideBar