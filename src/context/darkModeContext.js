import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext()
export const DarkModeContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")
    ) || false)

    const toggle = () => {
        //it will chng mode after toggle
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        // this is use to set key value to local storage for dark mode
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode])

    return (
        <DarkModeContext.Provider value={{ darkMode, toggle }}>{children}</DarkModeContext.Provider>
    )
}