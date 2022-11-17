import React from "react";
import useLocalStorage from "use-local-storage";

const ThemeContext = React.createContext(undefined)

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}