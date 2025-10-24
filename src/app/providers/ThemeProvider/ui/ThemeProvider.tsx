import {Theme, ThemeContext} from "../lib/ThemeContext";
import {FC, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem("theme") as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultPropsTheme = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultPropsTheme}>
            {children}
        </ThemeContext.Provider>
    )
}
