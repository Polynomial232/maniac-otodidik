import React from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { ListsTaskContent } from "./Content/ListsTask.Content"
import { NotificationSidebar } from "./Sidebar/notification.Sidebar"

export function Content(props) {
    const tasks = [
        {
            name: "Research content ideas",
        },
        {
            name: "Create a database of guest authors",
        },
        {
            name: "Renew driver's license",
            details: {
                dudeDate: "22-03-22",
                subTasks: 1,
                list: {
                    name: "Personal",
                    color: "#FF6B6B",
                },
                tags: [
                    {
                        name: "Tag 1",
                        color: "#D1EAED",
                    },
                ],
            },
        },
        {
            name: "Consult accountant",
            details: {
                subTasks: 3,
                list: {
                    name: "List 1",
                    color: "#FFD43B",
                },
                tags: [
                    {
                        name: "Tag 1",
                        color: "#D1EAED",
                    },
                    {
                        name: "Tag 2",
                        color: "#FFDADA",
                    },
                ],
            },
        },
    ]

    return (
        <section id="content" className="flex-1">
            <h1 className="flex items-center gap-3 text-4xl font-bold font-gel-medium mb-4">
                Today
                <span className="border-[1px] border-[#EBEBEB] rounded-md px-3 py-1">
                    5
                </span>
            </h1>
            <div className="form-control border-[1px] border-opacity-40 border-fontPrimary rounded-md text-fontPrimary">
                <button className="flex justify-start items-center gap-3 px-3 py-2">
                    <AiOutlinePlus className="text-lg font-bold" />
                    Add New Task
                </button>
            </div>
            {tasks.map((task, idx) => (
                <div
                    className={`p-3 hover:bg-[#FAFAFA] hover:cursor-pointer ${
                        idx + 1 == tasks.length
                            ? null
                            : "border-b-[1px] border-fontPrimary border-opacity-40"
                    }`}
                    key={idx}
                >
                    <ListsTaskContent task={task} idx={idx} />
                </div>
            ))}
        </section>
    )
}
