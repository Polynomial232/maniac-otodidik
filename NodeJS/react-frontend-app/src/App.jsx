import { useState } from "react"
import "./App.css"
import { Sidebar } from "./components/Sidebar"
import { Content } from "./components/Content"
import { Detail } from "./components/Detail"

function App() {
    return (
        <div className="min-h-[calc(100vh-1rem*2)] min-w-full flex flex-row gap-5">
            <Sidebar />
            <Content />
            <Detail />
        </div>
    )
}

export default App
