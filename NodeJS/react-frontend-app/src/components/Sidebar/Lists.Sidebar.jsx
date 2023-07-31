import React from "react"
import { AiOutlinePlus } from "react-icons/ai"

export function ListsSidebar(props) {
    const lists = [
        {
            color: "#FF6B6B",
            name: "Personal",
            notif: 3,
        },
        {
            color: "#67D9E8",
            name: "Work",
            notif: 6,
        },
        {
            color: "#FFD43B",
            name: "List 1",
            notif: 3,
        },
    ]
    return (
        <div>
            <h2 className="text-fontPrimary text-[12px] text-opacity-80">
                Lists
            </h2>
            <ul className="font-normal">
                {lists.map((list) => (
                    <li
                        className="grid grid-cols-3 justify-start items-center p-2 rounded-md hover:bg-[#EBEBEB] hover:cursor-pointer hover:font-semibold"
                        key={list.name}
                    >
                        <div className="col-span-2 flex items-center gap-2">
                            <span
                                className="w-5 h-5 rounded-md"
                                style={{ background: list.color }}
                            ></span>
                            {list.name}
                        </div>
                        {list.notif ? (
                            <span className="justify-self-end bg-[#FAFAFA] text-[11px] w-7 text-center font-bold py-1 rounded-md">
                                {list.notif}
                            </span>
                        ) : null}
                    </li>
                ))}
                <li className="flex items-center p-2 rounded-md hover:bg-[#EBEBEB] hover:cursor-pointer gap-3  hover:font-semibold">
                    <AiOutlinePlus /> Add New List
                </li>
            </ul>
        </div>
    )
}
