import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Pastes = () => {

  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const filterData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handelDelet = (id) => {
    dispatch(removeFromPastes({ _id: id }));
  };

  const handleShare = (paste) => {
    if (navigator.share) {
      navigator.share({
        title: paste.title,
        text: paste.content,
        url: window.location.href + `?pasteId=${paste._id}`,
      }).then(() => {
        toast.success('Shared successfully');
      }).catch((error) => {
        toast.error('Error sharing paste');
        console.error('Sharing failed:', error);
      });
    } else {
      toast.error('Sharing not supported on this device');
    }
  };

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
                    <a href={`/?pasteId=${paste?._id}`}>
                      Edit
                    </a>
                  </button>
                  <button>
                    <a href={`/pastes/${paste?._id}`}>
                      View
                    </a>
                  </button>
                  <button onClick={() => handelDelet(paste?._id)}>
                    Delete
                  </button>
                  <button onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success('Copied to clipboard');
                  }}>
                    Copy
                  </button>
                  <button onClick={() => handleShare(paste)}>
                    Share
                  </button>
                </div>
                <div>
                  {paste.createdAt}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Pastes;
