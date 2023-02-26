import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@/components/svgs'

export const ThemeModeToggle = (props) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => console.log(darkMode), [darkMode])

  return (
    <>
      <button
        type="button"
        className={
          'inline-flex items-center justify-center gap-2 rounded-md border-none bg-none py-2 px-3 text-sm outline-offset-2 transition active:transition-none'
        }
        onClick={() => setDarkMode((state) => !state)}
        {...props}
      >
        {darkMode ? (
          <MoonIcon className={'h-7 w-7'} />
        ) : (
          <SunIcon className={'h-7 w-7'} />
        )}
      </button>
    </>
  )
}

const variants = {
  initial: { scale: 0.6, rotate: 90 },
  animate: { scale: 1, rotate: 0 },
  whileTap: { scale: 0.95, rotate: 15 },
}
