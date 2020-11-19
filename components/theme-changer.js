import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  // useEffect(() => console.log({ resolvedTheme }), [resolvedTheme])

  if (!mounted) return <div className="ml-4 w-4"></div>

  return (
    <>
      <button
        className="text-black dark:text-white hover:text-my-blue dark:hover:text-celonis text-lg ml-4 w-4"
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      >
        {resolvedTheme === 'dark' ? (
          <>
            <span>○</span>
            <span className="sr-only">Light</span>
          </>
        ) : (
          <>
            <span>●</span>
            <span className="sr-only">Dark</span>
          </>
        )}
      </button>
    </>
  )
}
