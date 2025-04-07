import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex-col flex justify-center items-center'>
        <h2 className='text-3xl font-bold text-white'>
            Browse All Templates
        </h2>
        <p className='text-white'>
            What would you like to create today?
        </p>
        <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
            <Search />
            <input
                type='text'
                onChange={(event)=>onSearchInput(event.target.value)}
                placeholder='Search for templates'
                className='bg-transparent w-full outline-none'
            />
        </div>
        </div>
    </div>
  )
}

export default SearchSection