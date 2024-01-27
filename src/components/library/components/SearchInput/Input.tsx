import { motion } from 'framer-motion'
import { useSearchInput } from '../../../../hooks/useSearchInput'

export function Input() {
  const { isSearchVisible } = useSearchInput()

  return (
    <>
      {isSearchVisible && (
        <motion.div
          className="absolute right-0 top-0 translate-x-full transform rounded-r-lg bg-grey-1 p-2 transition-all group-hover:translate-x-0"
          initial={{ opacity: 0, marginLeft: '-32px' }}
          animate={{ opacity: 1, marginLeft: '0px' }}
          transition={{ duration: 0.7 }}
        >
          <input
            type="text"
            placeholder="Search in Your Library"
            className="bg-grey-1  text-sm text-white-1 placeholder-grey-2 focus:outline-none"
          />
        </motion.div>
      )}
    </>
  )
}
