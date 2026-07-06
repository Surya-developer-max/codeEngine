import { createContext, useEffect, useState } from "react";
export const uiTheme = createContext();
export default function ThemeDesigner({ children }) {
    const [theme, setTheme] = useState({
        primary: "#2563EB",
        secondary: "#3B82F6",
        background: "#F8FAFC",
        sidebar: "#0F172A",
        navbar: "#FFFFFF",
        card: "#FFFFFF",
        text: "#0F172A",
        border: "#E2E8F0",
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
