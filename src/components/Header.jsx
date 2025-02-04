import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'

const Header = ({ DownloadIcon }) => {
  return (
    <div className='w-full fixed top-0 left-0 bg-white shadow-sm border flex justify-between items-center p-4 z-50'>
      <div className="flex items-center gap-2">
        <img src='/logo.svg' alt="Logo" className="h-10 w-10" />

        <span className="text-xl font-bold text-gray-800">LogoForge</span>
      </div>
      <Button className='flex gap-2 items-center' onClick={() => DownloadIcon(Date.now())}>
        <Download className='h-4 w-4' />
        Download
      </Button>
    </div>
  )
}

export default Header
