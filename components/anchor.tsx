import { motion } from 'framer-motion'
import Icon from './icons'
import { Anchor } from 'lib/types'
import Color from 'lib/utilities/colors'
import { useWindowSize } from 'hooks/useWindowSize'

const Anchor: React.FC<Anchor> = ({ label, url }) => {
  const [width] = useWindowSize()
  const IconAnimation = {
    initial: {
      scale: 1,
      fill: '#44403c',
    },
    hover: {
      rotate: 30,
      scale: 4.5,
      fill: '#fff',
    },
  }

  const bgAnimation = {
    initial: {
      scale: 1,
      backgroundColor: '#fff',
    },
    hover: {
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 5px',
      backgroundColor: Color(label),
      scale: 1.05,
    },
  }

  const textAnimation = {
    initial: {
      color: '#44403c',
    },
    hover: {
      color: '#fff',
    },
  }

  return (
    <motion.a
      initial="initial"
      {...(width > 768 && { whileHover: 'hover' })}
      transition={{ duration: 0.1, type: 'spring' }}
      href={url}
      target="_blank"
    >
      <motion.div
        variants={bgAnimation}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, type: 'spring' }}
        className="my-6 flex h-6 w-full items-center overflow-hidden rounded-2xl py-8 px-6 text-center"
      >
        <motion.div
          variants={IconAnimation}
          transition={{ duration: 0.5, type: 'spring' }}
          className="h-7 w-7"
        >
          <Icon label={label} />
        </motion.div>
        <motion.h2
          variants={textAnimation}
          className="flex w-full items-center justify-center font-semibold"
        >
          {label}
        </motion.h2>
      </motion.div>
    </motion.a>
  )
}

export default Anchor
