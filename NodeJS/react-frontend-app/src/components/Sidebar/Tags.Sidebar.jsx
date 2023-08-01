import React from "react"
import { AiOutlinePlus } from "react-icons/ai"

export function TagsSidebar(props) {
    const tags = [
        {
            name: "Tag 1",
            color: "#D1EAED",
        },
        {
            name: "Tag 2",
            color: "#FFDADA",
        },
    ]

    return (
        <>
            <h2 className="text-fontPrimary text-[12px] text-opacity-80">
                Tags
            </h2>
            <div className="flex gap-1 flex-wrap text-xs">
                {tags.map((tag) => (
                    <button
                        className="px-2 py-[5px] rounded-md font-semibold"
                        style={{ backgroundColor: tag.color }}
                        key={tag.name}
                    >
                        {tag.name}
                    </button>
                ))}
                <button
                    className="flex justify-center items-center gap-2 px-3 py-[5px] rounded-md font-semibold"
                    style={{ backgroundColor: "#EBEBEB" }}
                >
                    <AiOutlinePlus /> Add Tag
                </button>
            </div>
        </>
    )
}
