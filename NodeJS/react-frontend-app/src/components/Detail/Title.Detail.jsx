import React, { useState } from "react"

export function TitleDetail(props) {
    const [title, setTitle] = useState(props.title)

    return (
        <div className="flex items-center justify-center border-[1px] border-opacity-40 border-fontPrimary rounded-md text-fontPrimary px-2">
            <input
                type="text"
                placeholder="title"
                className="w-full bg-transparent py-1 px-2 focus:outline-none placeholder:text-fontPrimary placeholder:font-semibold"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
    )
}
