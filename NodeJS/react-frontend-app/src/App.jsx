import { useState } from "react"
import "./App.css"
import { Sidebar } from "./components/Sidebar"

function App() {
    return (
        <>
            <section className="w-64">
                <Sidebar />
            </section>
        </>
    )
}

export default App
