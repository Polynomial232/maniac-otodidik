import React from "react"

export function NotificationSidebar(props) {
    return (
        <>
            <span className="justify-self-end bg-[#EBEBEB] text-[11px] w-6 text-center font-bold rounded-md group-hover:bg-[#FAFAFA]">
                {props.len}
            </span>
        </>
    )
}
