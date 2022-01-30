import React, { useEffect, useState } from 'react'

const OldFooter = () => {
  const [dateState, setDateState] = useState(new Date())
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000)
    return () => {}
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="my-12 flex flex-row items-center justify-between">
        <p className="">
          ©{' '}
          {new Date().toLocaleDateString('de-DE', {
            year: 'numeric',
            timeZone: 'Europe/Berlin',
          })}
        </p>
        <div className="flex flex-row items-center justify-center tabular-nums">
          Munich{' '}
          {dateState.toLocaleTimeString('de-DE', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: 'Europe/Berlin',
          })}
        </div>
      </div>
    </div>
  )
}

export default OldFooter
