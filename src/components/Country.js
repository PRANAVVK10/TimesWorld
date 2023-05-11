import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import '../App.css';

export default function Country() {
    const [ state, updaedState ] = useState([{}]);
    
    useEffect(() => {
        axios.get("https://restcountries.com/v2/all?fields=name,region,flag").then((res)=>{
            updaedState(res.data);
        })
    }, [])
console.log(state)
  return (
    <div className='inline-block-country'>
       {
        state.map((r)=>{
           return(
            <div className='country-container'>
                <img className='country-image' src="https://www.shutterstock.com/image-vector/empty-placeholder-image-icon-design-260nw-1366372628.jpg" alt="" />
            <div>
                <h4>{r.name}</h4>
                <h6>{r.region}</h6>
            </div>
            </div>
           )
        })
       }

    </div>
  )
}
