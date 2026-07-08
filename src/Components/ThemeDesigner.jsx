import { createContext, useEffect, useState } from "react";
export const uiTheme = createContext();
export default function ThemeDesigner({ children }) {
    const [theme, setTheme] = useState({
        primary: "#0F766E",      // Emerald
        secondary: "#376ed4",    // Royal Gold
        background: "#F8F8F5",   // Warm White
        sidebar: "#ffffff",      // Dark Emerald
        navbar: "#FFFFFF",
        navcard: "#ffffff",
        navtext: "#000000",
        text: "#1B1B1B",
        border: "#D8D8D8",
    });
    const updateTheme = (key, value) => {
        setTheme(prev => ({
            ...prev,
            [key]: value,
        }));

        document.documentElement.style.setProperty(
            `--${key}`,
            value
        );
    };

    useEffect(() => {
        Object.entries(theme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}`, value);
        });
    }, [theme]);

    return (
        <uiTheme.Provider value={{ theme, updateTheme }}>
            {children}
        </uiTheme.Provider>
    );
}
