import React from "react"
import { MdKeyboardArrowRight } from "react-icons/md"
import { FaCalendarTimes } from "react-icons/fa"
import { NotificationSidebar } from "../Sidebar/notification.Sidebar"

export function ListsTaskContent(props) {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <input type="checkbox" name="" id="" />
                    {props.task.details ? (
                        <div className="flex flex-col gap-2">
                            {props.task.name}
                            <div className="flex gap-3">
                                {props.task.details.dudeDate ? (
                                    <span className="flex items-center gap-1 text-xs">
                                        <FaCalendarTimes />{" "}
                                        {props.task.details.dudeDate}
                                    </span>
                                ) : null}
                                {props.task.details.subTasks ? (
                                    <span className="flex items-center gap-1 text-xs">
                                        <NotificationSidebar
                                            len={props.task.details.subTasks}
                                        />
                                        Subtasks
                                    </span>
                                ) : null}
                                {props.task.details.list ? (
                                    <span className="flex items-center gap-1 text-xs">
                                        <span
                                            className="w-3 h-3 rounded-sm"
                                            style={{
                                                background:
                                                    props.task.details.list
                                                        .color,
                                            }}
                                        ></span>
                                        {props.task.details.list.name}
                                    </span>
                                ) : null}
                            </div>
                        </div>
                    ) : (
                        props.task.name
                    )}
                </div>
                <MdKeyboardArrowRight />
            </div>
        </>
    )
}
