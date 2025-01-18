// Home Component
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');

  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);


  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-1 rounded-2xl mt-2 w-[66%] pl-4"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="p-2 mt-2 rounded-2xl" onClick={createPaste}>
          {pasteId ? 'Update My Paste' : 'Create My Paste'}
        </button>
      </div>

      <div>
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
