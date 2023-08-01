import React, { useState } from "react"
import { TitleDetail } from "./Detail/Title.Detail"
import { DescriptionDetail } from "./Detail/Description.Detail"
import { AiOutlinePlus } from "react-icons/ai"

export function Detail(props) {
    const [detailbarActive, setDetailbarActive] = useState(true)

    const lists = ["Personal", "Work", "List 1"]

    return (
        <section
            id="detail"
            className={`w-[28%] flex min-h-[calc(100vh-1rem*2)] bg-secondaryColor rounded-lg p-4 ${
                detailbarActive ? null : "hidden"
            }`}
        >
            <div className="flex flex-col gap-3 flex-grow-[1]">
                <div className="flex justify-between items-center">
                    <h1 className="text-fontPrimary text-2xl font-gel-medium">
                        Task:
                    </h1>
                </div>
                <div className="flex flex-col justify-between flex-grow-[1]">
                    <div className="flex flex-col gap-3">
                        <TitleDetail title="text" />
                        <DescriptionDetail description="text" />
                        <div className="flex">
                            <span className="w-[25%]">List</span>
                            <select
                                name=""
                                id=""
                                className="flex items-center justify-center border-[1px] border-opacity-40 border-fontPrimary rounded-md text-fontPrimary px-2"
                            >
                                {lists.map((list) => (
                                    <option value="">{list}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex">
                            <span className="w-[25%]">Due Date</span>
                            <input
                                type="date"
                                name=""
                                id=""
                                className="flex items-center justify-center border-[1px] border-opacity-40 border-fontPrimary rounded-md text-fontPrimary px-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <span className="w-[25%]">Tags</span>
                            <div className="flex gap-2">
                                <button
                                    className="px-2 py-[2px] rounded-md font-semibold"
                                    style={{ backgroundColor: "#D1EAED" }}
                                >
                                    Tag 1
                                </button>
                                <button
                                    className="flex justify-center items-center gap-2 px-3 py-[2px] rounded-md font-semibold"
                                    style={{ backgroundColor: "#EBEBEB" }}
                                >
                                    <AiOutlinePlus /> Add Tag
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <h2 className="text-fontPrimary text-xl font-gel-medium">
                                    Substask:
                                </h2>
                            </div>
                            <div className="form-control border-[1px] border-opacity-40 border-fontPrimary rounded-md text-fontPrimary">
                                <button className="flex justify-start items-center gap-3 px-3 py-2">
                                    <AiOutlinePlus className="text-lg font-bold" />
                                    Add new Subtasks
                                </button>
                            </div>
                            <div className="px-3 flex gap-3">
                                <input type="checkbox" name="" id="" />
                                Subtasks
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 justify-between items-center font-gel-medium">
                        <button className="flex-1 border-[1px] border-fontPrimary rounded-md border-opacity-40 py-2">
                            Delete Task
                        </button>
                        <button className="flex-1 rounded-md py-2 bg-yellow">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
