import { LIGHT_THEME_NAME, LOCAL_STORAGE_THEME_NAME } from "../constants/layout"

export function toggleTheme() {
    const theme = localStorage.getItem(LOCAL_STORAGE_THEME_NAME)
    var html = document.documentElement

    if (theme) {
        localStorage.removeItem(LOCAL_STORAGE_THEME_NAME)
        html.classList.add("dark")
    }
    else {
        localStorage.setItem(LOCAL_STORAGE_THEME_NAME, LIGHT_THEME_NAME)
        html.classList.remove("dark")
    }
}
