import React from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { NotificationSidebar } from "./notification.Sidebar"

export function ListsSidebar(props) {
    const lists = [
        {
            color: "#FF6B6B",
            name: "Personal",
            notifications: 3,
        },
        {
            color: "#67D9E8",
            name: "Work",
            notifications: 6,
        },
        {
            color: "#FFD43B",
            name: "List 1",
            notifications: 3,
        },
    ]
    return (
        <div>
            <h2 className="text-fontPrimary text-[12px] text-opacity-80">
                Lists
            </h2>
            <ul className="font-normal text-sm">
                {lists.map((list) => (
                    <li
                        className="grid grid-cols-3 justify-start items-center py-1 px-2 rounded-md hover:bg-[#EBEBEB] hover:cursor-pointer hover:font-semibold group"
                        key={list.name}
                    >
                        <div className="col-span-2 flex items-center gap-2">
                            <span
                                className="w-3 h-3 rounded-sm"
                                style={{ background: list.color }}
                            ></span>
                            {list.name}
                        </div>
                        {list.notifications ? (
                            <NotificationSidebar len={list.notifications} />
                        ) : null}
                    </li>
                ))}
                <li className="flex items-center py-1 px-2 rounded-md hover:bg-[#EBEBEB] hover:cursor-pointer gap-3  hover:font-semibold">
                    <AiOutlinePlus /> Add New List
                </li>
            </ul>
        </div>
    )
}
