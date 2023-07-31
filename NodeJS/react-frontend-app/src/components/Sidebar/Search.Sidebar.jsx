import React from "react"
import { IoSearchSharp } from "react-icons/io5"

export function SearchSidebar(props) {
    return (
        <div className="form-control border-[1px] border-opacity-40 border-fontPrimary rounded-md text-fontPrimary">
            <div className="flex items-center justify-center gap-3 px-2">
                <button>
                    <IoSearchSharp className="text-lg font-bold" />
                </button>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-transparent py-1 px-2 focus:outline-none placeholder:text-fontPrimary placeholder:font-semibold"
                />
            </div>
        </div>
    )
}
