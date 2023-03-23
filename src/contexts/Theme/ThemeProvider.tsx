import {FC, useState} from "react";
import { ThemeType } from "../../types/Theme";
import {ThemeContext} from "./ThemeContext";
import { THEMES } from "./ThemeConfig";

type Props = {
    children?: React.ReactNode
  };

const ThemeProvider = ({children}: Props)=>{
    const [currentTheme, setCurrentTheme] = useState<ThemeType>('light')

    return(
        <ThemeContext.Provider value={{
            themeType: currentTheme,
            theme: THEMES[currentTheme],
            setCurrentTheme,
            }}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeProvider;