
import React from 'react';
import SearchBar from './SearchBar';


const Todos = ({ toDos, setViewUser}) => {

  return (
    <div className='w-full lg:w-[50%]'>
        <div className='flex items-center justify-between'>
            <h1 className='text-md font-bold'>ToDos</h1>
            <SearchBar />
        </div>
        <table className='table-auto'>
            <thead className='text-center'>
                <tr className='w-full'>
                    <th className='p-3 bg-slate-900 text-white'>ToDo ID</th>
                    <th className='p-3 bg-slate-900 text-white'>Title</th>
                    <th className='p-3 bg-slate-900 text-white'>Status</th>
                    <th className='p-3 px-5 bg-slate-900 text-white'>Action</th>
                </tr>
            </thead>
            <tbody className='w-auto h-auto text-slate-800 text-xs font-semibold bg-gray-300'>
              
                {toDos.map((item) => (
                    
                        <tr className=''>
                        <td className='rows text-center'>{item.userId}</td>
                        <td cl>{item.title}</td>
                        <td>{`${item.completed === true ? 'Completed' : 'Incompleted'}`}</td>
                        <td className='text-center'>
                            <button 
                                onClick={() => setViewUser(item.id)}
                                className='bg-transparent text-black border-[1px] border-black text-[10px] px-2 py-0.5 rounded-md hover:bg-slate-900 hover:text-white font-semibold'>
                                    View User
                            </button>
                        </td>
                    </tr>
                    
                    )
                    
                    )}
                
            </tbody>
        </table>

    </div>
  )
}

export default Todos