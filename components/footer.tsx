import React, { useEffect, useState } from 'react'

import Container from '@/components/container'
import { EXAMPLE_PATH } from '@/lib/constants'

const Footer = () => {
  const [dateState, setDateState] = useState(new Date())
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000)
    return () => {}
  }, [])
  return (
    <>
      <footer className="bg-accent-1 border-accent-2 border-t">
        <div className="my-12 flex flex-grow flex-col items-start justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div>Andreas Ellwanger</div>
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col">
              <div className={'leading-{1.5625rem} mb-4 text-xl'}>Munich</div>
              <div className={'mb-4 tabular-nums leading-6 text-black/80'}>
                {dateState.toLocaleTimeString('de-DE', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                  timeZone: 'Europe/Berlin',
                })}
              </div>
              <div className={'leading-6'}>hello@andreasellwanger.com</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
