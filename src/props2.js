import React, { useEffect, useState } from 'react'
import axios from 'axios'

function props2() {
    const[state,setstate]=useState()
    useEffect(()=>
    {

axios.get('https://fakestoreapi.com/products/category/jewelery')
    },[])
  return (
    <div></div>
  )
}

export default props2