import React, { useState } from "react"

export function DescriptionDetail(props) {
    const [description, setDescription] = useState(props.description)

    return (
        <div className="form-control border-[1px] border-opacity-40 border-fontPrimary rounded-md text-fontPrimary">
            <div className="flex items-center justify-center gap-3 px-2">
                <textarea
                    placeholder="description"
                    className="w-full bg-transparent py-1 px-2 focus:outline-none placeholder:text-fontPrimary placeholder:font-semibold"
                    onChange={(e) => setDescription(e.target.value)}
                    rows="5"
                >
                    {description}
                </textarea>
            </div>
        </div>
    )
}
