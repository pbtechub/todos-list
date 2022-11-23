import React from 'react';
import { data } from './data';



const items = JSON.parse(data);

const UserDetails = ({ details}) => {
 

  return (
    <div className='w-full lg:fixed right-5  top-10 lg:w-[47%]'>
      <div className='mt-2'>
        <h1 className='text-md font-bold'>User Details</h1>
        <div className='w-full h-[80vh] p-8 border-[1px] border-black'>
         
         <div>
          
           {details.map((detail) => (
           
            <ul className='mt-5'>
              <li className='py-2 font-semibold max-w-[450px]'>{`ToDo ID : ${detail.userId}`}</li>
              <li className='py-2 font-semibold max-w-[450px]'>{`ToDo Title : ${detail.title}`}</li>
              <li className='py-2 font-semibold max-w-[450px]'>{`User ID : ${detail.id}`}</li>
              <li className='py-2 font-semibold max-w-[450px]'>{`Name : ${'n/a'}`}</li>
              <li className='py-2 font-semibold max-w-[450px]'>{`Email : ${'n/a'}`}</li>
            </ul>

          
            
           ))}
          </div>
         
        </div>
      </div>
      
    </div>
  )
}

export default UserDetails


