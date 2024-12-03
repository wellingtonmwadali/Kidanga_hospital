import React from 'react'
import { boolean } from 'zod'
import { Button } from './button'
import Image from 'next/image'
import loaderIcon from '../../public/assets/icons/loader.svg'

 interface ButtonProps{
    isLoading: boolean,
    className?: string,
    children: React.ReactNode
}

const submitButton = ({isLoading, className, children}: ButtonProps) => {
  return (
<Button type='submit' disabled={isLoading} className={className ?? 'shad-primary-btn w-full'}>
    {isLoading ? (
        <div className='flex items-center gap-4'>
            <Image
            src={loaderIcon}
            alt='loader'
            width={24}
            height={24}
            className='animate-spin'
            />
            Loading...
        </div>
    ): children}
    
</Button>
  )
}

export default submitButton