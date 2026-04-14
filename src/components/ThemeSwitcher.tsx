import { useEffect, useMemo, useState } from 'react'

type ThemeId = 'slate' | 'ocean' | 'sand'

const storageKey = 'theme'

function applyTheme(theme: ThemeId) {
  document.documentElement.dataset.theme = theme
}

function readStoredTheme(): ThemeId | null {
  const value = localStorage.getItem(storageKey)
  if (value === 'slate' || value === 'ocean' || value === 'sand') return value
  return null
}

export function ThemeSwitcher() {
  const themes = useMemo(
    () =>
      [
        { id: 'slate' as const, label: 'Slate' },
        { id: 'ocean' as const, label: 'Ocean' },
        { id: 'sand' as const, label: 'Sand' },
      ] satisfies Array<{ id: ThemeId; label: string }>,
    [],
  )

  const [theme, setTheme] = useState<ThemeId>(() => {
    if (typeof window === 'undefined') return 'slate'
    return readStoredTheme() ?? 'slate'
  })

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem(storageKey, theme)
  }, [theme])

  return (
    <div className="themeSwitcher" role="group" aria-label="Color theme">
      {themes.map((t) => (
        <button
          key={t.id}
          type="button"
          className="themePill"
          aria-pressed={theme === t.id}
          onClick={() => setTheme(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}

