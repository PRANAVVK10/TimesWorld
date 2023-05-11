import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Country from '../components/Country';

export default function Home() {

  return (
    <div className='container-home'>
          <Navbar />
        {/* {
            state.map((r)=>{
              
                <Country country={r.name} region={r.region} flag={r.flag}/>
            })
        } */}
        <div className="inline-container">
        <Country />
        </div>

    </div>
  )
}
