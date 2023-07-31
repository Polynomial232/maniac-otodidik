import React from "react"
import { SearchSidebar } from "./Sidebar/Search.Sidebar"
import { TagsSidebar } from "./Sidebar/Tags.Sidebar"
import { ListsSidebar } from "./Sidebar/Lists.Sidebar"
import { TaskSidebar } from "./Sidebar/Task.Sidebar"

export function Sidebar(props) {
    return (
        <>
            <div className="min-h-screen bg-secondaryColor rounded-lg p-4">
                <div className="flex flex-col gap-3">
                    <h1 className="text-fontPrimary text-2xl">Menu</h1>
                    <div id="contentMenu" className="flex flex-col gap-3">
                        <SearchSidebar />
                        <TaskSidebar />
                        <ListsSidebar />
                        <TagsSidebar />
                        <button>Settings</button>
                        <button>Sign out</button>
                    </div>
                </div>
            </div>
        </>
    )
}
