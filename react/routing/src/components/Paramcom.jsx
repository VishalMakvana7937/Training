import React from 'react'
import { useParams } from 'react-router-dom'

const Paramcom = () => {

    const {id} = useParams();
  return (
    <div>
        parama : {id}
    </div>
  )
}

export default Paramcom