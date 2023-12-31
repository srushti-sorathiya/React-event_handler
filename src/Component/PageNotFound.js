import React from 'react'
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigation = useNavigate();
  return (
    <div>
      <div className='center-co1'>
        <button className='btn-transparent Boder' onClick={() => navigation(-1)}>
          <h2><i style={{ padding: "10px" }} className="fa-solid fa-angle-left"></i>Back</h2>
        </button>
      </div>
      <div className='center-co'>
        <h2 className='text-fo'>404 : Page Not Found</h2>
      </div>
    </div>
  )
}

export default PageNotFound