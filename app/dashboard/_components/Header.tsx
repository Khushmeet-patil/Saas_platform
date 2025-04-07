"use client"
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Header() {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <motion.div 
      className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className={`flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white transition-all duration-300 ${
          isFocused ? 'border-blue-400 shadow-md' : 'border-gray-200'
        }`}
        whileHover={{ 
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)" 
        }}
        animate={{
          scale: isFocused ? 1.02 : 1
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          whileHover={{ rotate: 15 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Search className={`transition-colors duration-300 ${isFocused ? 'text-blue-500' : 'text-gray-500'}`} />
        </motion.div>
        <input 
          type="text" 
          placeholder='Search...'
          className='outline-none w-full'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </motion.div>
    </motion.div>
  )
}

export default Header