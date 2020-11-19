import React from 'react'
import { motion } from 'framer-motion'
import useSound from 'use-sound'
import { PropTypes } from 'prop-types'

export const LinkWithSound = ({ children, css, href }) => {
  const [play, { stop }] = useSound('@/assets/sounds/plunger.mp3', { volume: 0.5 })
  //const [isHovering, setIsHovering] = React.useState(false);
  return (
    <motion.a
      className={css}
      href={href}
      onMouseEnter={() => {
        //setIsHovering(true);
        play({})
      }}
      onMouseLeave={() => {
        //setIsHovering(false);
        stop()
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  )
}

LinkWithSound.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string,
  href: PropTypes.string,
}
