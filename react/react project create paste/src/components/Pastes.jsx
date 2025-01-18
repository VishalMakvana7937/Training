import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Pastes = () => {

  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const filterData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )


  return (
    <div>
      <input className='p-1 rounded-2xl mt-2 w-[550px] pl-4' type="search" placeholder='Search here' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      <div className='flex flex-col gap-5 mt-5'>
        {
          filterData.length > 0 &&
          filterData.map((paste, index) => {
            return (
              <div key={index} className='border'>
                <h2 className='text-lg font-bold'>{paste.title}</h2>
                <p>{paste.content}</p>

                <div className='flex flex-row place-content-between'>
                  <button>
                    Edit
                  </button>
                  <button>
                    View
                  </button>
                  <button>
                    Delete
                  </button>
                  <button>
                    Edit
                  </button>
                  <button>
                    Edit
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Pastes