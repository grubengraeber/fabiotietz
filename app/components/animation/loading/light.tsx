import Image from 'next/image'
import React from 'react'

function Light() {
  return (
    <div
    className="w-full h-full animate-pulse flex justify-center"
    >
        <Image src="/favicons/head_light.svg" alt="loading light" width={100} height={100} />
    </div>
  )
}

export default Light
