import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
  const [searchUser, setSearchUser] = useState('')

  
  return (
    <div>
        <form 
        className='flex items-center justify-center w-full py-1 md:w-[400px]'>
            <BiSearch className='mr-2 mt-1'/>
            <input 
                type="text" 
                placeholder='Search'
                className='outline-none w-full' />
        </form>
    </div>
  )
}

export default SearchBar