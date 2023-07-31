import React from "react"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { BsListCheck } from "react-icons/bs"
import { FaCalendarAlt, FaStickyNote } from "react-icons/fa"

export function TaskSidebar(props) {
    const tasks = [
        {
            icon: <MdKeyboardDoubleArrowRight />,
            name: "Upcomming",
            notif: 12,
        },
        {
            icon: <BsListCheck />,
            name: "Today",
            notif: 5,
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
            <ul className="font-normal">
                {tasks.map((task) => (
                    <li
                        className="grid grid-cols-3 justify-start items-center p-2 rounded-md hover:bg-[#EBEBEB] hover:cursor-pointer hover:font-semibold"
                        key={task.name}
                    >
                        <div className="col-span-2 flex items-center gap-2">
                            {task.icon}
                            {task.name}
                        </div>
                        {task.notif ? (
                            <span className="justify-self-end bg-[#FAFAFA] text-[11px] w-7 text-center font-bold py-1 rounded-md">
                                {task.notif}
                            </span>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    )
}
