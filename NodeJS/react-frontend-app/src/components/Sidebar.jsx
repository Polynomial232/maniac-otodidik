import React, { useState } from "react"
import { SearchSidebar } from "./Sidebar/Search.Sidebar"
import { TagsSidebar } from "./Sidebar/Tags.Sidebar"
import { ListsSidebar } from "./Sidebar/Lists.Sidebar"
import { TaskSidebar } from "./Sidebar/Task.Sidebar"
import { VscSettings, VscSignOut } from "react-icons/vsc"
import { GiHamburgerMenu } from "react-icons/gi"

export function Sidebar(props) {
    const [sidebarActive, setSidebarActive] = useState(true)

    return (
        <section
            id="sidebar"
            className={`relative ${sidebarActive ? "w-[20%]" : "w-[3%]"}`}
        >
            <div
                className={`flex min-h-[calc(100vh-1rem*2)] bg-secondaryColor rounded-lg p-4 ${
                    sidebarActive ? null : "hidden"
                }`}
            >
                <div className="flex flex-col gap-3 flex-grow-[1]">
                    <div className="flex justify-between items-center">
                        <h1 className="text-fontPrimary text-2xl font-gel-medium">
                            Menu
                        </h1>
                    </div>
                    <div
                        id="contentMenu"
                        className="flex flex-col justify-between flex-grow-[1]"
                    >
                        <div className="flex flex-col gap-3 ">
                            <SearchSidebar />
                            <TaskSidebar />
                            <ListsSidebar />
                            <TagsSidebar />
                        </div>
                        <div>
                            <button className="flex justify-start items-center gap-3 px-2 py-1 rounded-md  w-full">
                                <VscSettings /> Settings
                            </button>
                            <button className="flex justify-start items-center gap-3  px-2 py-1 rounded-md w-full">
                                <VscSignOut /> Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className={`absolute top-6  ${
                    sidebarActive ? "right-5" : "right-0"
                }`}
            >
                <GiHamburgerMenu
                    onClick={() => setSidebarActive(!sidebarActive)}
                />
            </button>
        </section>
    )
}
