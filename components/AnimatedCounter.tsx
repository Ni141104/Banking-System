'use client'
import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'


const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className='flex'>
    
    <CountUp end={amount} duration={1} decimals={2} decimal='.'/>
    </div>
  )
}

export default AnimatedCounter  