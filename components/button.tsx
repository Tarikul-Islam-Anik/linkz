import { motion } from 'framer-motion'
export default function Button({ item }) {
  const { label } = item
  return (
    <motion.button
      whileHover={{
        translateY: -2,
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="rounded-lg border px-3 py-1 font-semibold tracking-wide"
    >
      {label}
    </motion.button>
  )
}
