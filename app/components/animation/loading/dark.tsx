import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function Dark() {


  return (
    <div
    className="w-full h-full animate-pulse flex justify-center"
    >
        <Image src="/favicons/head_dark.svg" alt="loading dark" width={100} height={100} />
    </div>
  )
}

export default Dark
