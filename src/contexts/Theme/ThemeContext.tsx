import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { ThemeType, Theme } from "../../types/Theme";
import { THEMES } from "./ThemeConfig";

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme;
  setCurrentTheme:  Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: "light",
  theme: THEMES["light"],
  
} as ThemeContextProps);

export const useTheme = () => useContext(ThemeContext);
