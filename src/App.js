import React, { useEffect, useState } from 'react';
import Todos from './components/Todos';
import UserDetails from './components/UserDetails';
import { data } from './components/data';


const items = JSON.parse(data);
const App = () => {
const [toDos, setToDos] = useState(items);
const [viewUser, setViewUser] = useState();

const userIndex = (viewUser - 1);
const details = [items[userIndex]];

  return (
    <div className='w-full lg:flex mt-10 px-5 gap-10'>
        <Todos 
          toDos={toDos}
          setViewUser={setViewUser}
        />
        <UserDetails 
           details={details}
           />
    </div>
  )
}

export default App



