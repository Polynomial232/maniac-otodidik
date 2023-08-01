import React from "react"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { BsListCheck } from "react-icons/bs"
import { FaCalendarAlt, FaStickyNote } from "react-icons/fa"
import { NotificationSidebar } from "./notification.Sidebar"

export function TaskSidebar(props) {
    const tasks = [
        {
            icon: <MdKeyboardDoubleArrowRight />,
            name: "Upcomming",
            notifications: 12,
        },
        {
            icon: <BsListCheck />,
            name: "Today",
            notifications: 5,
        },
        {
            icon: <FaCalendarAlt />,
            name: "Calendar",
        },
        {
            icon: <FaStickyNote />,
            name: "Sticky Wall",
        },
    ]

    return (
        <div>
            <h2 className="text-fontPrimary text-[12px] text-opacity-80">
                Tasks
            </h2>
            <ul className="font-normal text-sm">
                {tasks.map((task) => (
                    <li
                        className="grid grid-cols-3 justify-start items-center py-1 px-2 rounded-md hover:bg-[#EBEBEB] hover:cursor-pointer hover:font-semibold group"
                        key={task.name}
                    >
                        <div className="col-span-2 flex items-center gap-2">
                            {task.icon}
                            {task.name}
                        </div>
                        {task.notifications ? (
                            <NotificationSidebar len={task.notifications} />
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    )
}
