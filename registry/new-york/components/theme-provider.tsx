"use client"

import * as React from "react"

type Theme = "light" | "dark"

export type ThemeSetting = Theme | "system"

export type ThemeProviderProps = {
  attribute?: string
  children: React.ReactNode
  defaultTheme?: ThemeSetting
  disableTransitionOnChange?: boolean
  enableSystem?: boolean
  storageKey?: string
  value?: Partial<Record<ThemeSetting | Theme, string>>
}

type ThemeContextValue = {
  theme: ThemeSetting
  resolvedTheme: Theme
  systemTheme: Theme
  setTheme: (theme: ThemeSetting) => void
}

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)"
const DEFAULT_STORAGE_KEY = "omni-ui-theme"
const DEFAULT_ATTRIBUTE_VALUE: Record<Theme, string> = {
  light: "light",
  dark: "dark",
}

const ThemeContext =
  React.createContext<ThemeContextValue | undefined>(undefined)

function getDocumentElement() {
  return typeof document === "undefined" ? null : document.documentElement
}

function disableTransitionsTemporarily() {
  const doc = typeof document === "undefined" ? null : document
  if (!doc) return () => {}

  const style = doc.createElement("style")
  style.setAttribute("data-omni-theme-transition", "false")
  style.appendChild(
    doc.createTextNode(
      "*{transition-duration:0s !important; animation-duration:0s !important;}"
    )
  )
  doc.head.appendChild(style)

  return () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        style.remove()
      })
    })
  }
}

function applyThemeClass(options: {
  attribute: string
  disableTransitionOnChange: boolean
  theme: Theme
  value?: ThemeProviderProps["value"]
}) {
  const docEl = getDocumentElement()
  if (!docEl) return

  const { attribute, disableTransitionOnChange, theme, value } = options
  const cleanup = disableTransitionOnChange
    ? disableTransitionsTemporarily()
    : undefined

  const themeValue =
    value?.[theme] ?? value?.[theme === "dark" ? "dark" : "light"]

  if (attribute === "class") {
    const classToAdd =
      themeValue ??
      (theme === "dark"
        ? DEFAULT_ATTRIBUTE_VALUE.dark
        : DEFAULT_ATTRIBUTE_VALUE.light)
    const classToRemove =
      theme === "dark"
        ? DEFAULT_ATTRIBUTE_VALUE.light
        : DEFAULT_ATTRIBUTE_VALUE.dark

    docEl.classList.add(classToAdd)
    docEl.classList.remove(classToRemove)
  } else {
    const valueToSet =
      themeValue ??
      (theme === "dark"
        ? DEFAULT_ATTRIBUTE_VALUE.dark
        : DEFAULT_ATTRIBUTE_VALUE.light)
    docEl.setAttribute(attribute, valueToSet)
  }

  cleanup?.()
}

function getSystemTheme(): Theme {
  if (typeof window === "undefined") {
    return "light"
  }
  return window.matchMedia(COLOR_SCHEME_QUERY).matches ? "dark" : "light"
}

export function ThemeProvider({
  attribute = "class",
  children,
  defaultTheme = "system",
  disableTransitionOnChange = false,
  enableSystem = true,
  storageKey = DEFAULT_STORAGE_KEY,
  value,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<ThemeSetting>(defaultTheme)
  const [systemTheme, setSystemTheme] = React.useState<Theme>(getSystemTheme)
  const resolvedTheme =
    theme === "system" && enableSystem ? systemTheme : (theme as Theme)

  React.useEffect(() => {
    const storedTheme = (() => {
      try {
        const item = localStorage.getItem(storageKey)
        if (item === "light" || item === "dark" || item === "system") {
          return item as ThemeSetting
        }
        return null
      } catch {
        return null
      }
    })()

    if (storedTheme) {
      setThemeState(storedTheme)
      return
    }

    setThemeState(defaultTheme)
  }, [defaultTheme, storageKey])

  React.useEffect(() => {
    if (!enableSystem) return
    if (typeof window === "undefined") return
    const media = window.matchMedia(COLOR_SCHEME_QUERY)
    const handler = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? "dark" : "light")
    }
    setSystemTheme(media.matches ? "dark" : "light")
    media.addEventListener("change", handler)
    return () => media.removeEventListener("change", handler)
  }, [enableSystem])

  React.useEffect(() => {
    applyThemeClass({
      attribute,
      disableTransitionOnChange,
      theme: resolvedTheme,
      value,
    })
  }, [attribute, disableTransitionOnChange, resolvedTheme, value])

  const setTheme = React.useCallback(
    (nextTheme: ThemeSetting) => {
      setThemeState(nextTheme)
      try {
        localStorage.setItem(storageKey, nextTheme)
      } catch {
        // localStorage might be disabled
      }
    },
    [storageKey]
  )

  const contextValue = React.useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
      systemTheme,
    }),
    [theme, resolvedTheme, setTheme, systemTheme]
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
