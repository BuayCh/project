import React from 'react'
import { Button } from '../ui/button'
import { RotateCw } from 'lucide-react';

function Buttons({text,isPending,type}) {
  return (
    <Button
    type={type}
    disabled={isPending}
    className="capitalize mt-2">
        {
            isPending 
            ? <>
               <RotateCw className='animate-spin'/>
            <span>Plase waite...</span></>
            : <p>{text}</p>
        }
    </Button>
  )
}

export default Buttons