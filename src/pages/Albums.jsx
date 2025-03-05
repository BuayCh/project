import PhotoCard from '@/components/card/PhotoCard'
import React from 'react'

function Albums() {
  return (
    <div className='flex flex-row gap-7'> 
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
    </div>
  )
}

export default Albums